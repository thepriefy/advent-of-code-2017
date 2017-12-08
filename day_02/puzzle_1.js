var fs = require('fs');

fs.readFile('./input.txt', function(err, data) {
    var input_text = data.toString().split("\n");

    var input_arr = {};
    var input_max = {};
    var input_min = {};
    var input_checksum = 0;

    for(var i=0; i<Object.keys(input_text).length; i++)
    {
        input_arr[i] = input_text[i].split("	");
        input_max[i] = 0;
        input_min[i] = 0;

        for(var j=0; j<input_arr[i].length; j++)
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

    console.log(input_checksum);
});


