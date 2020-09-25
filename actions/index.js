const program = require("../options");
const chalk = require("chalk"); //For Making Logs Colorful
const files = require("files") //For creating folders and files

if (program.hello) {
  console.log(chalk.bgCyan.black("you used the test flag"));
  console.log(program.hello);
}

if (program.pass) {
  console.log(
    "you used the --pass/-p flag and the value you passed is: " + program.pass
  );
}
module.exports = program;
