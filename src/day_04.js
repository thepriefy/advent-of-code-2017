var fs = require('fs');

fs.readFile('../input/input_04.txt', 'utf8', function (err, data) {
    var input_text = data.toString().split("\n");

    /* part 1 */
    var valid_count = 0;
    var input_arr = {};
    var passphrase_arr = [];
    var is_valid = true;

    for (var i = 0; i < Object.keys(input_text).length; i++) {
        is_valid = true;
        input_text[i] = input_text[i].replace("\r", "");

        input_arr[i] = input_text[i].split(" ");
        passphrase_arr = [];

        for (var j = 0; j < input_arr[i].length; j++) {
            if (passphrase_arr.indexOf(input_arr[i][j]) === -1) {
                passphrase_arr.push(input_arr[i][j]);
            }
            else {
                is_valid = false;
            }
        }
        if (is_valid) {
            valid_count = valid_count + 1;
        }
    }

    console.log('Part 1 Ans: ' + valid_count);

    /* part 2 */
    // console.log('Part 2 Ans: ' + sum);
});