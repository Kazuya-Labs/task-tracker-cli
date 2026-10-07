import { readJson, writeJson } from "../helper/filesHelper.js";

export const addTask = (args) => {
  try {
    const [text] = args;
    if (!text) {
      return;
    }
    let oldData = readJson();
    const strukturData = {
      status: null,
      title: text,
      createdAt: new Date(),
      updateAt: new Date(),
    };
    oldData.push(strukturData);
    writeJson(oldData);
    console.log("success add task " + text);
  } catch (error) {
    console.log(error);
  }
};
