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
    fs.writeFileSync("user.json", JSON.stringify(users), "utf-8");
    //console.log(users);
    break;
  case "rm":
    users.users = users.users.filter((user) => user !== process.argv[3]);
    //console.log(users);
    fs.writeFileSync("user.json", JSON.stringify(users), "utf-8");
    break;
  case "reset":
    console.log("Resetear");
    fs.writeFileSync("user.json", '{"users":[]}', "utf-8");
    break;
}
