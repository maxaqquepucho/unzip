
const fs = require('fs-extra')
const AdmZip = require('adm-zip');
let zip = new AdmZip("./archivo.zip");

fs.mkdirp('./scorm').then( () => {
    zip.extractAllTo(/*target path*/"./scorm/", /*overwrite*/true);
    console.log('descomprimiendo')
    for (let i = 0; i < 10; i++) {
        console.log(i)
        
    }

}).catch( err => console.log(err))

