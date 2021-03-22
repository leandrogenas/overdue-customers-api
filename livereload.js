var filewatcher = require('filewatcher');
 
const path  = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const fse = require('fs-extra');
 
const { exec, execSync } = require("child_process");
 
const MAX_TRIES = 10;

const getAllFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      const folder = path.join(__dirname, dirPath);
      if(!arrayOfFiles.includes(folder))
        arrayOfFiles.push(folder)
    }
  })

  return arrayOfFiles
}

const copyPublicFiles = () => 
{
  const srcDir = __dirname + '/packages/angular/dist';
  const destDir = __dirname + '/packages/nestjs/public';
  // To copy a folder or file  
  fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
    if (err) {                 
      console.error(err);      
    } else {
      console.log("success!");
    }
  });
}

rimraf.sync("packages/nestjs/public/*");
copyPublicFiles();

var watcher = filewatcher();
watcher.on('change', (file, stat) =>
{
  console.log(file);  
  setTimeout(() => {
      console.log('Arquivos compilados');

      copyPublicFiles()
  }, 1500);

});

getAllFiles(path.join("packages", "angular", "src")).forEach(val => {
  watcher.add(val);
});
