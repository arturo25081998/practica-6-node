const fs = require("fs");
const dbName = "koders.json";

function init() {
  const dbExist = fs.existsSync(dbName);
  if (!dbExist) {
    fs.writeFileSync(dbName, JSON.stringify([]), "utf-8");
  }
}

const readBD = () => {
  let userData = fs.readFileSync(dbName, "utf8");
  return userData;
};

init();
let command = process.argv[2];
let koders = JSON.parse(readBD());

switch (command) {
  case "ls":
    koders.forEach((koder) => {
      console.log(koder);
    });
    break;
  case "add":
    koders.push(process.argv[3]);
    fs.writeFileSync(dbName, JSON.stringify(koders), "utf-8");
    //console.log(users);
    break;
  case "rm":
    koders = koders.filter((koder) => koder !== process.argv[3]);
    fs.writeFileSync(dbName, JSON.stringify(koders), "utf-8");
    break;
  case "reset":
    console.log("Reset values for BD");
    fs.writeFileSync(dbName, JSON.stringify([]), "utf-8");
    break;
}
