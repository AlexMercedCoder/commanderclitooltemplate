const program = require("../options");

if (program.hello) {
  console.log("you used the test flag");
  console.log(program.hello);
}

if (program.pass) {
  console.log(
    "you used the --pass/-p flag and the value you passed is: " + program.pass
  );
}
module.exports = program;
