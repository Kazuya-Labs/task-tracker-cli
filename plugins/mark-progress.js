import { checkData, readJson, writeJson } from "../helper/filesHelper.js";

export const updateTaskProgress = (args) => {
  try {
    const [index] = args;
    let rawData = readJson();
    const isData = checkData(rawData[index - 1]);
    rawData[index - 1] = {
      ...rawData[index - 1],
      status: "in progress",
    };
    writeJson(rawData);
    console.log(`success update progress ${Number(index)} `);
  } catch (error) {
    console.log(error?.message);
  }
};
