#!/usr/bin/env node

const program = require("commander");
const exists = require('fs').existsSync;
const inquirer = require("inquirer");
const rm = require("rimraf").sync;
const ora = require("ora");
const download = require("download-git-repo");

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

  var dpath = program.args[0];

  if(exists(dpath)) {

    inquirer.prompt([
      type: "confirm",
      message: "Target directory exists. Continue?",
      name: "ok"
    ], function(ans) {
      if(ans.ok) {

        rm(dpath);
        downloadTemplate(dppath);
      }
    })
  }
  else {

    downloadTemplate(dpath);
  }
}

// 下载模板工程
function downloadTemplate(dpath) {

  var spinner = ora("downloading template...");
  spinner.start();

  download("kuangcaibao/tdx-js-demo", dpath, function(err) {
    
    spinner.stop();
    if(err) {

      console.log("Failed to download repo: " + err.message.trim());
    }
    else {

      console.log("Download Success.");
    }
  })
}