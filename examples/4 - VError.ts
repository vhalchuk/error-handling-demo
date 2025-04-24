import { VError } from "verror";
import * as fs from "node:fs/promises";

async function readConfig(path: string): Promise<any> {
    try {
        const data = await fs.readFile(path, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Could not read config from ${path}: ${err.message}`);
            // throw new VError(err, "Could not read config from \"%s\"", path);
            // throw new VError(
            //     {
            //         cause: err,
            //         message: "Could not read config",
            //         info: { path }
            //     },
            //     "Could not read config"
            // );
        }
    }
}

(async () => {
    try {
        await readConfig('./nonexistent.json');
    } catch (err) {
        if (err instanceof VError) {
            console.error('Message:', err.message);
            console.error('Full Stack:\n', VError.fullStack(err));
            console.error('Cause:', VError.cause(err));
            console.error('Info:', VError.info(err));
        } else {
            console.error('Unexpected error:', err);
        }
    }
})();
