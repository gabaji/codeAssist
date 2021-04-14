#!/usr/bin/env node

const q = require("./question");
const fs = require("fs");
const colors = require("colors");
const { headersToString } = require("selenium-webdriver/http");

var args = process.argv;

if (args.length == 2) {
  console.log("Please provide an argument. Refer ReadMe for instructions".red);
  process.exit();
}

const inp = args[2];

// let username = "something";

if (inp == "-l" || inp == "--login") {
  q.setusername();
}

if (inp == "-o" || inp == "--options") {
  console.log(
    "-l for login. \n-r for random question. \n-lc for list category. \n-c [category number] for question from that category"
  );
}

if (inp == "--random" || inp == "-r") {
  q.feedMeQuestion("");
}

if (inp == "-lc" || inp == "--listcategories") {
  q.printCategories();
}

if (inp == "--category" || inp == "-c") {
  if (args.length < 4) {
    console.log("Please provdie a category. Use -lc flag to list category".red);
  }
  q.feedMeQuestion(args[3]);
}

// console.log("Please give valid arguments. Do cpss -o for options".red);
