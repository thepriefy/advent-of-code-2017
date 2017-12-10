var fs = require('fs');

fs.readFile('../input/input_04.txt', 'utf8', function(err, data) {
    var input_text = data.toString().split("\n");

    /* part 1 */
    var valid_count = 0;
    var input_arr = {};
    var passphrase_arr = [];

    for(var i=0; i<Object.keys(input_text).length; i++)
    {
        input_text[i] = input_text[i].replace("\r", "");
        input_arr[i] = input_text[i].split(" ");

        for (var j = 0; j < input_arr[i].length; j++)
        {
            if(passphrase_arr.indexOf(input_arr[i][j]) === -1)
            {
                passphrase_arr.push(input_arr[i][j]);
                valid_count++;
            }
        }
    }

    console.log(valid_count);
    // console.log('Part 1 Ans: ' + sum);

    /* part 2 */
    // console.log('Part 2 Ans: ' + sum);
});