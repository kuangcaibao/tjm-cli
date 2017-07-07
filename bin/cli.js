#!/usr/bin/env node

const program = require("commander");

program
  .version(require("../package.json").version)
  .usage("[project-name]")
  .option("-c, --create", "create a project")
  .parse(process.argv);

if(program.create) {
  create();
}

// 创建项目逻辑
function create() {

  console.log("project create");
}