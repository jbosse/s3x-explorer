import * as path from "path";
import Mocha from "mocha";

export function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: "tdd",
    color: true,
    timeout: 20000, // 20 second timeout for network operations
  });

  const testsRoot = path.resolve(__dirname, "..");

  return new Promise((resolve, reject) => {
    // Use require instead of import for glob to avoid TypeScript issues
    const glob = require("glob");

    glob("**/**.test.js", { cwd: testsRoot }, (err: any, files: string[]) => {
      if (err) {
        return reject(err);
      }

      // Add files to the test suite
      files.forEach((f: string) => mocha.addFile(path.resolve(testsRoot, f)));

      try {
        // Run the mocha test
        mocha.run((failures: number) => {
          if (failures > 0) {
            reject(new Error(`${failures} tests failed.`));
          } else {
            resolve();
          }
        });
      } catch (err) {
        console.error(err);
        reject(err);
      }
    });
  });
}
