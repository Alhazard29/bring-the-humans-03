import { copyFileSync } from "node:fs";
import { join } from "node:path";

// The entry's whole program: copy VIDEO.json into the grader's output
// directory, byte for byte, and print nothing on success.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
