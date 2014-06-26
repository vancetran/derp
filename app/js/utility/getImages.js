var glob = require("glob");
var fs = require("fs");

var pattern = "images/**/*.{gif,jpg,jpeg,png}";

glob( pattern, { cwd: "../../" },function (er, files) {
    console.log(files);

    fs.writeFile('../../data/imgslol.json', JSON.stringify(files, null, 2), function(err) {

    });
});
