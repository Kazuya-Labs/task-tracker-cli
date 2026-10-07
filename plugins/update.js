import { checkData, readJson, writeJson } from "../helper/filesHelper.js";
import { help } from "./help.js";

export const updateTask = (args) => {
  try {
    const [index, newvalue] = args;
    if (!index || !newvalue) {
      help();
      return;
    }
    let rawData = readJson();
    const item = rawData[index - 1];
    checkData(item);
    rawData[index - 1] = {
      ...item,
      title: newvalue,
      updateAt: new Date(),
    };
    writeJson(rawData);
    console.log(`success update task ${Number(index)}`);
  } catch (error) {
    console.log(error);
  }
};
