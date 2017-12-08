var fs = require('fs');
var input = "";
var sum = 0;

fs.readFile('./input.txt', 'utf8', function(err, data) {
    input = data;

    var input_1 = input.substr(0, input.length/2);
    var input_2 = input.substr(input.length/2, input.length-1);

    for(var i=0; i<input_1.length; i++){
        if(input_1[i] === input_2[i]){
            sum = sum + parseInt(input_1[i])*2;
        }
    }

    console.log(sum);
});