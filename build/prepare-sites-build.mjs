import { cp, mkdir, rm, rename } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const output = resolve(root, ".output");
const dist = resolve(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(resolve(output, "server"), resolve(dist, "server"), { recursive: true });
await cp(resolve(output, "public"), resolve(dist, "public"), { recursive: true });

// The Sites package contract expects a JavaScript server entrypoint. Vinext
// emits the same ESM entrypoint with an .mjs extension.
await rename(resolve(dist, "server", "index.mjs"), resolve(dist, "server", "index.js"));
