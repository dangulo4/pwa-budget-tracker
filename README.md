# pwa-budget-tracker

Add functionality to an existing Budget Tracker application to allow for offline access and functionality.

[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()

# Description

The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

Offline Functionality:

- Enter deposits offline

- Enter expenses offline

When brought back online:

- Offline entries should be added to tracker.

## User Story

AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling

## Business Context

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

## Acceptance Criteria

GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.

![pwa-budget-tracker](/public/icons/pwa-budget-tracker.gif)]

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Test](#Test)
- [Questions](#Questions)

## Installation

- The following installations are required:
- Use the [Mongoose](https://www.npmjs.com/package/mongoose) NPM package to connect to your Mongoose database and perform queries.

- This is a Node.js module available through the npm registry.
  Before installing, download and install Node.js. Node.js 0.6 or higher is required.
  Installation is done using the npm install command:
  \$ npm install mysql

- Installation is done using the npm install command:
  $ npm install express
  $ npm install mongoose
  \$ npm install morgan

## Usage

- mongoose
- morgan
- node express

## License

- This project is licensed under the MIT License - see the LICENSE.md file for details

## Contributing

- dangulo4

## Tests

- You can use any text editor. There are plugins for many editors (e.g. Atom, Emacs, Sublime Text, Vim, and Visual Studio Code) that allow you to preview Markdown while you are editing it

- Application should allow users to create and save workouts.

- Application should allow users to view previously saved workouts.

## Questions

- Please don't hesitate to open an issue or pull request. You can also send me a message on Github
