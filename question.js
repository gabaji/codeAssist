const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const fs = require("fs");
const { RSA_NO_PADDING } = require("constants");
const readline = require("readline-sync");
const colors = require("colors");

// grab tab pane of practice tab and then for each element, perform the given query

async function write(array, path) {
  fs.writeFileSync(path, JSON.stringify(array));
}

async function read(path) {
  try {
    const fileContent = fs.readFileSync(path);
    const array = JSON.parse(fileContent);
    return array;
  } catch {
    console.log("Have you logged in?".red);
  }
}

async function printCategories() {
  vals = await read("ques.json");
  var key = Object.keys(vals);
  for (var i = 0; i < key.length; ++i) {
    console.log(i + 1 + ". " + key[i]);
  }
}

async function getter(url) {
  let driver = new webdriver.Builder()
    .setChromeOptions(new chrome.Options().headless())
    .forBrowser("chrome")
    .build();

  driver.get(url);
  var x = await driver.findElements(
    webdriver.By.css("#practice_tab .tab-pane")
  );
  var vals = {};
  var text, link, category;

  for (var i = 0; i < x.length; ++i) {
    category = await x[i].getAttribute("id");
    vals[category] = {};
    var problems = await x[i].findElements(
      webdriver.By.css("a.practice-unsolved")
    );
    for (var j = 0; j < problems.length; ++j) {
      text = await problems[j].getAttribute("innerText");
      link = await problems[j].getAttribute("href");
      vals[category][text] = link;
    }
  }
  await write(vals, "ques.json");
  driver.close();
}
async function link(username) {
  // console.log(username)
  let driver = new webdriver.Builder()
    .setChromeOptions(new chrome.Options().headless())
    .forBrowser("chrome")
    .build();

  await driver.get("https://recommender.codedrills.io/");
  var textbox, button;

  try {
    textbox = driver.findElement({ id: "handles" });
    button = driver.findElement({ id: "handles-submit" });
  } catch {
    console.log(
      "Please make sure you entered correct username and platform".red
    );
  }

  await textbox.sendKeys(username);
  await button.click();
  const ans = await driver.getCurrentUrl();
  await driver.close();
  // console.log(ans);
  getter(ans);
}

async function setusername() {
  const swap = { 1: "cf", 2: "cc", 3: "sp" };
  console.log("Please choose your preferred cp site".cyan);
  console.log("1. Codeforces\n2. CodeChef \n3. Spoj".cyan);
  var choice = readline.question();
  if (choice > 3 || choice < 0) {
    console.log("Please enter a valid choice".red);
    process.exit();
  }
  choice = swap[choice];

  const x = readline.question("Enter your username ".cyan);
  const username = choice + "/" + x;
  fs.writeFileSync("username.txt", username, (err) => {
    if (err) console.log(err);
  });
  console.log("Please wait while we acquire problems for you...".green);
  link(username);
}

async function feedMeQuestion(category) {
  var vals = await read("ques.json");
  if (category == "") {
    var c = Object.keys(vals);
    var index = Math.floor(Math.random() * c.length);
    category = c[index];
  } else {
    var catkeys = Object.keys(vals);
    category = catkeys[category - 1];
  }

  var x = vals[category];
  var keys = Object.keys(x);
  var index = Math.floor(Math.random() * keys.length);
  console.log(category.blue);
  console.log(keys[index].green);
  console.log(vals[category][keys[index]].grey);
}

function checkusername() {
  try {
    username = fs.readFileSync("username.txt", "utf8");
    console.log(username);
  } catch {
    console.log("Please provide a username using -l flag");
    process.exit();
  }
}

module.exports = {
  feedMeQuestion: feedMeQuestion,
  getter: getter,
  setusername: setusername,
  link: link,
  checkusername: checkusername,
  feedMeQuestion: feedMeQuestion,
  printCategories: printCategories,
};
