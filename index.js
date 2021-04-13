#!/usr/bin/env node

const q = require("./question");
const fs = require("fs");
const colors = require("colors");

var args = process.argv;

if (args.length == 2) {
  console.log("Please provide an argument. Refer ReadMe for instructions".red);
  process.exit();
}

const inp = args[2];

// let username = "something";

if (inp == "-l") {
  q.setusername();
}

if (inp == "random" || inp == "-r") {
  q.feedMeQuestion("");
}

if (inp == "-lg") {
  q.printCategories();
}

if (inp == "genre" || inp == "-g") {
  if (args.length < 4) {
    console.log("Please provdie a genre. Use -lg flag to list genre".red);
    process.exit();
  }
  q.feedMeQuestion(args[3]);
}
