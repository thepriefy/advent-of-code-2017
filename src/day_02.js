var fs = require('fs');
var i = 0;
var j = 0;
var k = 0;

fs.readFile('../input/input_02.txt', function(err, data) {
    var input_text = data.toString().split("\n");

    /* part 1 */
    var input_arr = {};
    var input_max = {};
    var input_min = {};
    var input_checksum = 0;

    for(i=0; i<Object.keys(input_text).length; i++)
    {
        input_arr[i] = input_text[i].split("	");
        input_max[i] = 0;
        input_min[i] = 0;

        for(j=0; j<input_arr[i].length; j++)
        {
            if(j === 0)
            {
                input_max[i] = parseInt(input_arr[i][j]);
                input_min[i] = parseInt(input_arr[i][j]);
            }
            else
            {
                if(parseInt(input_arr[i][j]) > input_max[i])
                {
                    input_max[i] = parseInt(input_arr[i][j]);
                }
                if(parseInt(input_arr[i][j]) < input_min[i])
                {
                    input_min[i] = parseInt(input_arr[i][j]);
                }
            }
        }

        input_checksum = input_checksum + (input_max[i] - input_min[i]);
    }

    console.log('Part 1 Ans: ' + input_checksum);

    /* part 2 */
    input_arr = {};
    input_checksum = 0;

    for(i=0; i<Object.keys(input_text).length; i++)
    {
        input_arr[i] = input_text[i].split("	");

        for(j=0; j<input_arr[i].length; j++)
        {
            for(k=0; k<input_arr[i].length; k++)
            {
                if(j!==k && (parseInt(input_arr[i][j])%parseInt(input_arr[i][k])) === 0)
                {
                    input_checksum = input_checksum + (parseInt(input_arr[i][j])/parseInt(input_arr[i][k]));
                }
            }
        }
    }

    console.log('Part 2 Ans: ' + input_checksum);
});


