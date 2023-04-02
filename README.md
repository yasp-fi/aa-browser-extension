# YaspFi Browser Extension (Account Abstraction)

[YaspFi](http://yasp.fi/) is an all-in-one next-generation non-custodial wallet focused on DeFi.
With YaspFi you can store, invest and exchange your funds on multiple networks without ever worrying about losing access. In addition, [YaspFi](http://yasp.fi/) provides comprehensive analytics and risk assessment score to help users make data-based investment decisions.

Our mission is to make decentralized finance more user-friendly, transparent, and accessible to a wider audience.

## Features

- Easy access to Ethereum-based account abstraction features
- Seamless integration with DApps
- Secure and efficient account management
- Compatible with major browsers (e.g., Chrome)

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) v14 or newer
- [Yarn](https://yarnpkg.com/) package manager

### Clone the Repository

Clone the repository from GitHub:

```bash
git clone https://github.com/yasp-fi/aa-browser-extension.git
```

### Install Dependencies

Navigate to the project directory and install the required dependencies using Yarn:

```bash
cd aa-browser-extension
yarn install
```

### Build the Extension

Build the extension for production:

```bash
yarn build
```

Or build the extension for development and watch for changes:

```bash
yarn watch
```

The built extension will be located in the `dist` folder.

## Load the Extension into Your Browser

### Google Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" using the toggle in the top right corner.
3. Click "Load unpacked" and select the `dist` folder in the project directory.

### Other Browsers

Please refer to the respective browser's documentation on how to load unpacked extensions.

## Usage

Once the extension is installed, you can access the YASP AA features through the browser toolbar. Interact with Ethereum DApps and manage your accounts securely and efficiently.

## Contributing

Please feel free to contribute to the project by submitting issues, bug reports, or pull requests. We appreciate your support and collaboration.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
