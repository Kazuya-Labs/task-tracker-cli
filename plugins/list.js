import { readJson } from "../helper/filesHelper.js";

export const list = () => {
  try {
    const rawData = readJson();
    let index = 1;
    let results = "";
    for (const data of rawData) {
      results += `${index++}. ${data.title} ${data?.status ? " : " + data.status : ""}\n`;
    }
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};
