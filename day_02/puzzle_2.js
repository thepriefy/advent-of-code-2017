var fs = require('fs');

fs.readFile('./input.txt', function(err, data) {
    var input_text = data.toString().split("\n");
    var input_arr = {};
    var input_checksum = 0;

    for(var i=0; i<Object.keys(input_text).length; i++)
    {
        input_arr[i] = input_text[i].split("	");

        for(var j=0; j<input_arr[i].length; j++)
        {
            for(var k=0; k<input_arr[i].length; k++)
            {
                if(j!==k && (parseInt(input_arr[i][j])%parseInt(input_arr[i][k])) === 0)
                {
                    input_checksum = input_checksum + (parseInt(input_arr[i][j])/parseInt(input_arr[i][k]));
                }
            }
        }
    }

    console.log(input_checksum);
});