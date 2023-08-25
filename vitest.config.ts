import * as path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        watch: false,
        testTimeout: /^d+$/.test(process.env.TEST_TIMEOUT ?? "") ? parseInt(process.env.TEST_TIMEOUT) : 30000,
        maxThreads: 1,
        minThreads: 1,
        coverage: {
            provider: "c8",
            reportsDirectory: `${__dirname}/coverage/unit/`,
        },
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, "./src"),
        },
    },
});
