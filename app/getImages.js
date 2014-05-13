var glob = require("glob");
var fs = require("fs");

glob("app/images/**/*.{gif,jpg,jpeg}", function (er, files) {
    console.log(files);

    fs.writeFile('app/data/imgslol.json', JSON.stringify(files, null, 2), function(err) {

    });
});