#!/usr/bin/env node

const program = require("commander");

program
  .version(require("../package.json").version)
  .usage("[options] <project-name>")
  .option("-c, --create", "create a project")
  .parse(process.argv);

/**
 * help 
 */
function help() {
  console.log(program.args.length);
  if(program.args.length < 0) {
    return program.help();
  }
}
help();


if(program.create) {
  create();
}

// 创建项目逻辑
function create() {

  console.log("project create");
}