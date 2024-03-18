import chalk from "chalk";
import http from "http";
import "dotenv/config";
import fs from "fs";
import axios from "axios";

// console.log(chalk.blueBright("Paul"));
// console.log(chalk.redBright("Sheikh"));
// console.log(chalk.greenBright("Wara"));
// console.log(chalk.yellowBright("Sam"));

// console.log(process.env);
const host = process.env.HOST;
const port = process.env.PORT;

fs.writeFile("test.txt", "Hello World", (err) => {
  if (err) throw err;
});

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

axios
  .get("http://www.google.com")
  .then((response) => {
    fs.writeFile("google.html", response.data, "utf-8", (err) => {
      if (err) throw err;
      console.log("The file has been created");
    });
  })
  .catch((error) => {
    console.log(error);
  });

const server = http.createServer((request, response) => {
  response.end("<h1>Hello World</h1>");
});

server.listen(port, host, () =>
  console.log(chalk.blueBright(`Server is running on http://${host}:${port}`))
);
