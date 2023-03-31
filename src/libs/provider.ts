import { v4 } from 'uuid';
import { CallbackFunction } from 'src/utils/promisify';

const ProviderEngine = require('web3-provider-engine');
const SubscriptionSubprovider = require('web3-provider-engine/subproviders/subscriptions');
const DefaultFixture = require('web3-provider-engine/subproviders/default-fixture');
const NonceTrackerSubprovider = require('web3-provider-engine/subproviders/nonce-tracker');
const SanitizingSubprovider = require('web3-provider-engine/subproviders/sanitizer');
const FetchSubprovider = require('web3-provider-engine/subproviders/fetch');

class SafeSubprovider {
  private engine = new ProviderEngine();

  constructor() {}

  sendTransaction(payload: any, end: CallbackFunction) {
    const id = v4().toString();
    payload.params[0].id = id;
    const showPopupEvent = new window.CustomEvent('EV_SHOW_POPUP_TX', {
      detail: payload.params[0],
    });
    window.dispatchEvent(showPopupEvent);

    const resolveTransactionHandler = function(data: any) {
      window.removeEventListener(
        'EV_RESOLVED_TRANSACTION' + data.detail.id,
        resolveTransactionHandler
      );
      if (data.detail.hash) {
        end(null, data.detail.hash);
      } else {
        end(new Error('Transaction rejected', data.detail.id));
      }
    };

    window.addEventListener('EV_RESOLVED_TRANSACTION' + id, resolveTransactionHandler);
  }

  signTypedData(payload: any, end: CallbackFunction) {
    const showPopupSignEvent = new window.CustomEvent('EV_SHOW_POPUP_SIGNATURE', {
      detail: payload.params,
    });
    window.dispatchEvent(showPopupSignEvent);
    const signedTypedDataHandler = function(data: any) {
      window.removeEventListener('EV_RESOLVED_WALLET_SIGN_TYPED_DATA', signedTypedDataHandler);

      if (data.detail.walletSignature) {
        end(null, data.detail.walletSignature);
      } else {
        end(new Error('Signature rejected'));
      }
    };
    window.addEventListener('EV_RESOLVED_WALLET_SIGN_TYPED_DATA', signedTypedDataHandler);
  }

  handleRequest(payload: any, next: () => void, end: CallbackFunction) {
    const account = this.engine.currentSafe;
    switch (payload.method) {
      case 'eth_accounts':
        end(null, account ? [account] : []);
        return;
      case 'eth_coinbase':
        end(null, account);
        return;
      case 'eth_sendTransaction':
        this.sendTransaction(payload, end);
        return;
      case 'wallet_signTypedData':
        this.signTypedData(payload, end);
        return;
      default:
        next();
    }
  }

  setEngine(engine: any) {
    this.engine = engine;
  }
}

export class YaspSafeProvider {
  rpcUrl: string;
  engine: any;

  constructor({ rpcUrl }: { rpcUrl: string }) {
    this.rpcUrl = rpcUrl;
    this.engine = new ProviderEngine();
    this.init();
  }

  setSafe(safe: any) {
    this.engine.currentSafe = safe;
  }

  init() {
    this.engine.setMaxListeners(0);

    // Metamask methods are temporary. Must be deleted in the future.
    this.engine.isMetaMask = !0;
    this.engine._metamask = {
      isApproved: () => true,
      isUnlocked: () => true,
      isEnabled: () => true,
    };

    this.engine.constructor = {
      name: 'SafeWeb3Provider',
    };
    this.engine.isSafe = true;
    this.engine.isConnected = function() {
      return true;
    };

    this.engine.addProvider(new SafeSubprovider());

    this.engine.addProvider(new DefaultFixture());

    this.engine.addProvider(new NonceTrackerSubprovider());

    this.engine.addProvider(new SanitizingSubprovider());

    this.engine.addProvider(new SubscriptionSubprovider({ maxFilters: 100 }));

    this.engine.addProvider(new FetchSubprovider({ rpcUrl: this.rpcUrl }));

    const sendAsync = (payload: unknown, cb: CallbackFunction) => {
      this.engine.sendAsync(payload, cb);
    };

    const sendSync = (payload: any) => {
      let result;
      switch (payload.method) {
        case 'eth_accounts':
          result = this.engine.currentSafe ? [this.engine.currentSafe] : [];
          break;
        case 'eth_coinbase':
          result = this.engine.currentSafe || null;
          break;
        case 'eth_uninstallFilter':
          sendAsync(payload, function() {});
          result = true;
          break;
        default:
          throw new Error('SafeProvider does not support this synchronous request', payload);
      }
      return {
        id: payload.id,
        jsonrpc: payload.jsonrpc,
        result,
      };
    };

    this.engine.send = function(payload: any, callback: CallbackFunction) {
      if (callback) {
        sendAsync(payload, callback);
      } else {
        return sendSync(payload);
      }
    };

    this.engine.enable = () => {
      return new Promise((resolve, reject) => {
        sendAsync(
          { method: 'eth_accounts', params: [] },
          (error: Error | null, response: unknown) => {
            if (error) {
              reject(error);
            } else {
              resolve(response);
            }
          }
        );
      });
    };

    window.dispatchEvent(new window.CustomEvent('EV_SAFE_PROVIDER_READY'));

    this.engine.start();
  }
}
