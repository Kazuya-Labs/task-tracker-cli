import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
const databasefiles = path.join(process.cwd(), "database", "db.json");
export const readJson = () =>
  JSON.parse(readFileSync(databasefiles, { encoding: "utf-8" }));

export const writeJson = (data) => {
  const stringify = JSON.stringify(data, null, 2);
  writeFileSync(databasefiles, stringify);
  return true;
};

export const checkData = (item) => {
  if (!item?.title || item?.status === false)
    throw new Error("data tidak ditemukan");
  return true;
};
