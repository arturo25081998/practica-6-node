let command = process.argv[2];
const fs = require("fs");

const readBD = () => {
  let userData = fs.readFileSync("user.json", "utf8");
  return userData;
};

let users = JSON.parse(readBD());

switch (command) {
  case "ls":
    users.users.forEach((user) => {
      console.log(user);
    });
    break;
  case "add":
    users.users.push(process.argv[3]);
    let newBd = JSON.stringify(users);
    fs.writeFileSync("user.json", newBd, "utf-8");
    //console.log(users);
    break;
  case "rm":
    console.log("Elimianar");
    break;
  case "reset":
    console.log("Resetear");
    let reset = '{"users":[]}';
    fs.writeFileSync("user.json", reset, "utf-8");
    break;
}
