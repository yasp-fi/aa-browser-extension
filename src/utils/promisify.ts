export type CallbackFunction = (err: Error, result: any) => void;
export const promisify = (inner: (cb: CallbackFunction) => void) =>
  new Promise((resolve, reject) =>
    inner((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    })
  );
