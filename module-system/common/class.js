class File {
    #path;
    constructor( path ){
        this.#path = path;
    }

    readFileSync(){}

    writeFileSync(){}

}

module.exports = File;