var glob = require("glob");
var fs = require("fs");

glob("images/**/*.gif", function (er, files) {
    console.log(files);

    fs.writeFile('gifslol.json', JSON.stringify(files, null, 2), function(err) {


    });
});

