#!/usr/bin/env node
// const { program } = require('commander');
const packageJson = require('./package.json');
// const inquirer = require('inquirer');
const chalk = require('chalk');
// const fs = require('fs');
// const Table = require('cli-table');


// program
//   .name('Benchmark UI Library')
//   .description('CLI to generate a benchmark for UI libraries ')
//   .version(packageJson.version);

// const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);
// const removeFileExtension = (fileName) => fileName.split('.').slice(0, -1).join('.');
// const FRAMEWORK_FILES = [...fs.readdirSync('frameworks')];

// const generatePromptChoices = async () => FRAMEWORK_FILES.map((file) => ({
//   name: removeFileExtension(capitalizeWord(file)),
//   value: removeFileExtension(file.toLowerCase())
// }));

// const showSelectedChoices = (data) => {
//   const table = new Table({
//     chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗', 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝', 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼', 'right': '║' , 'right-mid': '╢' , 'middle': '│' },
//     head: ['Framework', '%'],
//     colWidths: [20, 10]
//   });
//   data.map(choice => table.push([choice, '0 %']));
//   console.log(table.toString());
// }

// program
//   .command('generate')
//   .description('Generate a benchmark report')
//   .action(async () => {
//     let answers = await inquirer.prompt([
//       {
//         type: 'checkbox',
//         name: 'framework',
//         message: 'What frameworks do you to compare?',
//         choices: await generatePromptChoices()
//       },
//     ]);
//     showSelectedChoices(answers["framework"])
//   });

// program.parse();


const http = require('http')
  shell = require('shelljs'),
  path = require('path'),
  fs = require('fs');

console.log(chalk.green('Welcome to the Benchmark UI Library!'));
http.createServer(function (req, res) {
  console.log(chalk.white('Server created'));

  if (req.method === 'GET') {
    if (req.url === '/react.js') {
      if (!packageJson.dependencies.react) {
        shell.exec('npm install --save react react-dom');
      }
      const jsPath = path.join(`${__dirname}/frameworks/`, 'react.js');
      const jsStream = fs.createReadStream(jsPath);
      res.setHeader('Content-Type', 'application/javascript');
      jsStream.pipe(res);
    } else {
      const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
      res.setHeader('Content-Type', 'text/html');
      res.end(htmlContent);
    }
  }

  // const html = buildHtml(req);
  // res.writeHead(200, {
  //   'Content-Type': 'text/html',
  //   'Content-Length': html.length,
  //   'Expires': new Date().toUTCString()
  // });
  // // res.end(html);
  // res.end('./index.html');
}).listen(8080);

// function buildHtml(req) {
//   const header = `
//     <script type="text/javascript" src="./test.js"></script>
//   `;
//   const body = '<div id="app"></div>';

//   // concatenate header string
//   // concatenate body string
//   // return `<!DOCTYPE html><head>${header}</head><body>${body}</body>
//   // </html>`;
//   return `
//   <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <script type="text/javascript" src="./asdastest.js"></script>
//       <script>
//         console.log('asdasd')
//       </script>
//       <title>Document</title>
//     </head>
//     <body>
//       Xurupita
//     </body>
//   </html>
//   `
// };
