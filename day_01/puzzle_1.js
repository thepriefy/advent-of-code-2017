var fs = require('fs');
var input = "";
var sum = 0;

fs.readFile('./input.txt', 'utf8', function(err, data) {
    input = data;

    for(var i=0; i<input.length; i++)
    {
        if (i===0 && input[0]===input[input.length-1]){
            sum = sum + parseInt(input[i]);
        }
        if (input[i] === input[i-1]){
            sum = sum + parseInt(input[i]);
        }
    }

    console.log(sum);
});