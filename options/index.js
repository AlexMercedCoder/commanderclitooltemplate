/////////////////////////////////////
// Create Program Options Here
// Exported to actions
//////////////////////////////////////

const program = require("../program")

program
  .option('-h, --hello', 'A Test Flag')
  .option('-p, --pass <type>', 'passing argument to flag');
 
program.parse(process.argv);

module.exports = program