import { readFileSync } from "node:fs";
import path from "node:path";

export const help = () => {
  const text = readFileSync(path.join(process.cwd(), "database", "help.txt"), {
    encoding: "utf-8",
  });
  console.log(text);
};
