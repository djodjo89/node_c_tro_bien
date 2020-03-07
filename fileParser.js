const fs = require('fs');

function removeDoubleQuotes(str) {
    return str.substring(1, str.length -1);
}

function getCharacterByName(nameToFind, fileContent) {
    let lineNumber = 1 - 1; // We don't care about first and last lines
    let characterFound = false;
    const lines = fileContent.split('\n');
    let characterInformation = {};

    while (lineNumber < lines.length && !characterFound) {
        let lineInformation = lines[lineNumber].split(';');
        let currentName = removeDoubleQuotes(lineInformation[0]);

        // Remove double quotes with substring
        if (currentName === nameToFind) {
            characterFound = true;
            let age = lineInformation[1];
            let address = removeDoubleQuotes(lineInformation[2]);

            characterInformation.name = currentName;
            characterInformation.age = age;
            characterInformation.address = address;
        }
        lineNumber++;
    }

    if (!characterFound) throw Error('There is no character with this name');
    return characterInformation;
}

function parse (firstName, callback) {
    fs.readFile('information.csv', function(err, data) {
       if (err) throw err;
       callback(getCharacterByName(firstName, data.toString()));
    });
}

module.exports = parse;
