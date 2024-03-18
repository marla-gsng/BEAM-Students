import chalk from "chalk";
import http from "http";

// console.log(chalk.blueBright("Paul"));
// console.log(chalk.redBright("Sheikh"));
// console.log(chalk.greenBright("Wara"));
// console.log(chalk.yellowBright("Sam"));

const host = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
  response.end("<h1>Hello World</h1>");
});

server.listen(port, host, () =>
  console.log(chalk.blueBright(`Server is running on http://${host}:${port}`))
);
