import { checkData, readJson, writeJson } from "../helper/filesHelper.js";

export const updateTaskDone = (args) => {
  try {
    const [index] = args;
    let rawData = readJson();
    const item = rawData[index - 1];
    checkData(item);
    if (item?.status === "done") {
      console.log(" status sudah done sebelumnya ");
      return;
    }
    rawData[index - 1] = {
      ...item,
      status: "done",
      updateAt: new Date(),
    };
    writeJson(rawData);
    console.log(`success update progress ${index} `);
  } catch (error) {
    console.log(error);
  }
};
