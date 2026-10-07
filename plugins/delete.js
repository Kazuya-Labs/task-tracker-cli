import { checkData, readJson, writeJson } from "../helper/filesHelper.js";

export const deleteTask = (args) => {
  const [index] = args;
  try {
    const rawData = readJson();
    checkData(rawData[index - 1]);
    rawData.splice(index, 1);
    writeJson(rawData);
    console.log("success delete " + index);
    return;
  } catch (error) {
    console.log(error);
  }
};
