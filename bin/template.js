'use strict';

const necessary = require('necessary');

const { fileSystemUtilities } = necessary,
      { readFile } = fileSystemUtilities;

class template {
  static parseFile(filePath, args) {
    const content = readFile(filePath),
          parsedContent = template.parseContent(content, args);

    return parsedContent;
  }

  static parseContent(content, args) {
    const lines = content.split('\n'),
          parsedLines = template.parseLines(lines, args),
          parsedContent = parsedLines.join('\n');

    return parsedContent;
  }

  static parseLines(lines, args) {
    const parsedLines = lines.map(function(line) {
      const parsedLine = template.parseLine(line, args);

      return parsedLine;
    });

    return parsedLines;
  }

  static parseLine(line, args) {
    const parsedLine = line.replace(/\[\[(.+?)\]\]/g, function(match, token) {
      const parsedToken = template.parseToken(token, args);

      return parsedToken;
    });

    return parsedLine;
  }

  static parseToken(token, args) {
    let parsedToken = '';

    if (args.hasOwnProperty(token)) {
      parsedToken = args[token];
    }

    return parsedToken;
  }
}

module.exports = template;
