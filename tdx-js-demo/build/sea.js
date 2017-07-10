const fs = require("fs");
const path = require("path");
const MemoryFS = require("memory-fs");
const webpack = require("webpack");
const mfs = new MemoryFS();
const compiler = webpack({
  context: process.cwd(),
  entry: "./src/index.js",
  output: {
    filename: "bundle.sea.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  }
});
compiler.outputFileSystem = mfs;

compiler.run( (err, stats) => {

  if(err) {
    console.log(err);
    return;
  }

  const content = mfs.readFileSync(path.resolve("bundle.sea.js"), "utf8");
  // console.log(content);

  // 输出 sea.js 格式文件
  sea(content, {
      filename: "bundle.sea.js",
      dir: path.resolve(__dirname, "../dist")
  });
})

// 输出 seajs 文件
const sea = (content, config) => {

  let { filename, dir } = config;

  // 判断路径
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  let outFile = path.resolve(dir, filename);
  fs.writeFileSync(outFile, `define(function(require, exports, module) {
    module.exports = ${content}
  })`);
  
}