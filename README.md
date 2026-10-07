----

 ```sh
git clone https://github.com/Kazuya-Labs/task-tracker-cli
cd task-tracker-cli
sh init.sh
```

```sh
task add "item"                   : add task 
task update id "new item"         : update item by id 
task list                         : views all item
task delete id                    : delete item by id 
task mark-in-progress id          : update status to progress by id 
task mark-done id                 : update status to done by id 
```

---

### STRUKTUR DIRECTORIES

```
.
├── database
│   ├── db.json
│   └── help.txt
├── helper
│   └── filesHelper.js
├── index.js        # main
├── init.sh
├── package.json
├── plugins         # folder feature/plugins
│   ├── add.js      # feature
│   ├── delete.js
│   ├── done-pogress.js
│   ├── help.js
│   ├── list.js
│   ├── mark-progress.js
│   └── update.js
├── pnpm-lock.yaml
└── README.md

```

---

projects based by [roadmap.sh]()

---

---

Licensi ISC

---
