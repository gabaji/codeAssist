# Code Assist

## Find problems from your terminal

Code assist is a command line tool which helps you find problems according to your prefrences right from your terminal.

## Features

- Supports AtCoder, Codeforces and CodeChef
- Sorts problems according to topics
- Saves a lot of time

## Installation

CodeAssist requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/gabaji/codeassist.git
cd codeassist
npm i
chmod -X index.js
npm link
```

# Plugins

As codeassist uses selenium, you need to have chromedriver in your path.

# Usage

## Login

[![asciicast](https://asciinema.org/a/a2WJgokIE5WVvjzMB38nfHPvh.svg)](https://asciinema.org/a/a2WJgokIE5WVvjzMB38nfHPvh)

## Random

[![asciicast](https://asciinema.org/a/tIlBWtZoTZhDBfYa3oSJDyHt4.svg)](https://asciinema.org/a/tIlBWtZoTZhDBfYa3oSJDyHt4)

## Using genre

[![asciicast](https://asciinema.org/a/SAeABiIb3xe43EdCi4aEhJRv5.svg)](https://asciinema.org/a/SAeABiIb3xe43EdCi4aEhJRv5)

## Available flags

| Flag                         | Description                                                |
| ---------------------------- | ---------------------------------------------------------- |
| -l or --login                | To login with your id and fetch problems                   |
| -r or --random               | To get a random unsolved question from a random topic      |
| -lg or --listgenre           | To list all the available topics which you can choose from |
| -g [topic number] or --genre | To get a random problem from the selected topic            |

Contributions are always welcomed! Thankyou for reading!
