#!/usr/bin/env node

const program = require("commander");
const exists = require('fs').existsSync;
const inquirer = require("inquirer");
const rm = require("rimraf").sync;
const ora = require("ora");
const download = require("download-git-repo");
const path = require("path");

program
  .version(require("../package.json").version)
  .usage("[options] <project-name>")
  .option("-c, --create", "create a project")
  .parse(process.argv);

/**
 * help 
 */
function help() {
  // console.log(program.args.length);
  if(program.args.length <= 0) {
    return program.help();
  }
}
help();


if(program.create) {
  create();
}

// 创建项目逻辑
function create() {

  var dname = program.args[0];

  // var dpath = path.resolve(__dirname, dname);

  if(exists(dname)) {

    inquirer.prompt([{
      type: "confirm",
      message: "Target directory exists. Continue?",
      name: "ok"
    }]).then(function(ans) {
      console.log(ans);
      if(ans.ok) {

        rm(dname);
        downloadTemplate(dname);
      }
    });
  }
  else {

    downloadTemplate(dname);
  }
}

// 下载模板工程
function downloadTemplate(dname) {

  var spinner = ora("downloading template...");
  spinner.start();

  download("kuangcaibao/tdx-js-demo", dname, function(err) {
    
    spinner.stop();
    if(err) {

      console.log("Failed to download repo: " + err.message.trim());
    }
    else {

      console.log("Download Success.");
    }
  })
}