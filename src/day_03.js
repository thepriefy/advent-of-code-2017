var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);

/* puzzle input: 289326 */
prompts.question("Input a number: ", function (input) {
    calMatrix(parseInt(input));
    process.exit();
});

function calMatrix(num) {
    var num_sqrt = Math.sqrt(num);

    var num_sqrt_floor = 0;
    var num_sqrt_ceil = 0;

    if (num_sqrt % 1 === 0) {
        num_sqrt_ceil = Math.ceil(num_sqrt);
        num_sqrt_floor = num_sqrt_ceil - 1;
    }
    else {
        num_sqrt_floor = Math.floor(num_sqrt);
        num_sqrt_ceil = Math.ceil(num_sqrt);
    }
    var num_sqrt_floor_pow = Math.pow(num_sqrt_floor, 2);
    var num_sqrt_ceil_pow = Math.pow(num_sqrt_ceil, 2);


    var x_val = 0;
    var y_val = 0;
    var is_even = true;

    if (num_sqrt_ceil % 2 === 0) {
        x_val = num_sqrt_ceil / 2;
        y_val = num_sqrt_ceil / 2;
        is_even = true;
    }
    else {
        x_val = (1 - num_sqrt_ceil) / 2;
        y_val = (1 - num_sqrt_ceil) / 2;
        is_even = false;
    }

    var mid = (num_sqrt_floor_pow + 1) + ((num_sqrt_ceil_pow - (num_sqrt_floor_pow + 1)) / 2);

    if (num < mid) {
        if (is_even) {
            y_val = y_val - (mid - num);
        }
        else {
            y_val = y_val + (mid - num);
        }
    }
    else if (num > mid) {
        if (is_even) {
            x_val = x_val - (num - mid);
        }
        else {
            x_val = x_val + (num - mid);
        }
    }

    // console.log(num + " ( " + x_val + " , " + y_val + " )");

    var distance = Math.abs(x_val) + Math.abs(y_val);
    console.log('Part 1 Ans: ' + distance);
}