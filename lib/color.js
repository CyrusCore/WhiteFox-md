const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const FazdLog = (text, color) => {
	return !color ? chalk.cyan('[WhiteFox] ') + chalk.yellow(text) : chalk.cyan('[WhiteFox] ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  FazdLog
}