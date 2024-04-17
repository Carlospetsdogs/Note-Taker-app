const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json' , 'utf8');
    }

    write(note) {
        return writeFileSync('db/db.json' JSON.stringify(note));
    }

    
}