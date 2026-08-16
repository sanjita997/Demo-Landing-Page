import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const output = resolve(root, ".output");
const dist = resolve(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(resolve(output, "server"), resolve(dist, "server"), { recursive: true });
await cp(resolve(output, "public"), resolve(dist, "public"), { recursive: true });
// Sites serves public browser assets from dist/client. Keep the Nitro public
// directory too for the worker's ASSETS binding.
await cp(resolve(output, "public"), resolve(dist, "client"), { recursive: true });

// The Sites package contract expects a JavaScript server entrypoint. Keep the
// original .mjs entrypoint too, because Cloudflare's generated configuration
// references it directly.
await cp(resolve(dist, "server", "index.mjs"), resolve(dist, "server", "index.js"));
