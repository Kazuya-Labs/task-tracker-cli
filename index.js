import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { addTask } from "./plugins/add.js";
import { deleteTask } from "./plugins/delete.js";
import { list } from "./plugins/list.js";
import { updateTaskProgress } from "./plugins/mark-progress.js";
import { updateTaskDone } from "./plugins/done-pogress.js";
import { updateTask } from "./plugins/update.js";
import { help } from "./plugins/help.js";

const mapPlugin = {
  add: addTask,
  delete: deleteTask,
  list: list,
  "mark-in-progress": updateTaskProgress,
  "mark-done": updateTaskDone,
  update: updateTask,
  help: help,
  "--help": help,
  "-h": help,
};

const main = () => {
  try {
    const [command, loc, prefix, ...args] = process.argv;
    const listCmdValidation = [
      "update",
      "mark-in-progress",
      "mark-done",
      "delete",
    ];

    if (listCmdValidation?.includes(prefix) && !args[0]) {
      help();
      return;
    }
    if (mapPlugin[prefix]) {
      return mapPlugin[prefix](args);
    }
  } catch (error) {
    console.log(error);
  }
};

main();
