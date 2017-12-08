var fs = require('fs');
var input = "";
var sum = 0;
var i = 0;

fs.readFile('../input/input_01.txt', 'utf8', function(err, data) {
    input = data;

    /* part 1 */
    for(i=0; i<input.length; i++)
    {
        if (i===0 && input[0]===input[input.length-1]){
            sum = sum + parseInt(input[i]);
        }
        if (input[i] === input[i-1]){
            sum = sum + parseInt(input[i]);
        }
    }

    console.log('Part 1 Ans: ' + sum);

    /* part 2 */
    sum = 0;
    var input_1 = input.substr(0, input.length/2);
    var input_2 = input.substr(input.length/2, input.length-1);

    for(i=0; i<input_1.length; i++){
        if(input_1[i] === input_2[i]){
            sum = sum + parseInt(input_1[i])*2;
        }
    }

    console.log('Part 2 Ans: ' + sum);
});