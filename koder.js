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
    if (koders.length <= 0) {
      console.info("No koders found");
      process.exit(0);
    }
    koders.forEach((koder) => {
      console.log(koder);
    });
    break;
  case "add":
    let newKoder = process.argv[3];
    if (!newKoder) {
      console.error("please enter a koder");
      process.exit(1);
    }
    koders.push(newKoder);
    fs.writeFileSync(dbName, JSON.stringify(koders), "utf-8");
    break;
  case "rm":
    let deleteKoder = process.argv[3];
    if (!deleteKoder) {
      console.error("please enter a koder to delete");
      process.exit(3);
    }
    koders = koders.filter((koder) => koder !== deleteKoder);
    fs.writeFileSync(dbName, JSON.stringify(koders), "utf-8");
    break;
  case "reset":
    console.log("Reset values for BD");
    fs.writeFileSync(dbName, JSON.stringify([]), "utf-8");
    break;
}
