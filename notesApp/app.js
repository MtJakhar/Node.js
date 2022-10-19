import chalk from "chalk";
import yargs from "yargs";

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note");
  },
});

console.log(yargs.argv);
