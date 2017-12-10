var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);

/* puzzle input: 289326 */
prompts.question("Input a number: ", function (input) {
    var input_int = parseInt(input);
    /* part 1 */
    var pos = calMatrix(input_int);
    var distance = Math.abs(pos['x']) + Math.abs(pos['y']);
    console.log('Part 1 Ans: ' + distance);

    /* part 2 */
    var matrix = {};
    var val = 0;
    var tmp_x = 0;
    var tmp_y = 0;

    for (var i = 1; i <= input_int; i++)
    {
        val = 0;
        if (i === 1)
        {
            val = 1;
            pos = {
                "x" : 0,
                "y" : 0
            }
        }
        else {
            pos = calMatrix(i);
            /* top */
            tmp_x = parseInt(pos["x"]) + 1;
            tmp_x = tmp_x.toString();
            if(matrix[tmp_x] !== undefined && matrix[tmp_x][pos["y"]] !== undefined)
            {
                val = val + matrix[tmp_x][pos["y"]];
            }

            /* top-right */
            tmp_x = parseInt(pos["x"]) + 1;
            tmp_x = tmp_x.toString();
            tmp_y = parseInt(pos["y"]) + 1;
            tmp_y = tmp_y.toString();
            if(matrix[tmp_x] !== undefined && matrix[tmp_x][tmp_y] !== undefined)
            {
                val = val + matrix[tmp_x][tmp_y];
            }

            /* right */
            tmp_y = parseInt(pos["y"]) + 1;
            tmp_y = tmp_y.toString();
            if(matrix[pos["x"]] !== undefined && matrix[pos["x"]][tmp_y] !== undefined)
            {
                val = val + matrix[pos["x"]][tmp_y];
            }

            /* bottom-right */
            tmp_x = parseInt(pos["x"]) + 1;
            tmp_x = tmp_x.toString();
            tmp_y = parseInt(pos["y"]) - 1;
            tmp_y = tmp_y.toString();
            if(matrix[tmp_x] !== undefined && matrix[tmp_x][tmp_y] !== undefined)
            {
                val = val + matrix[tmp_x][tmp_y];
            }

            /* bottom */
            tmp_x = parseInt(pos["x"]) - 1;
            tmp_x = tmp_x.toString();
            if(matrix[tmp_x] !== undefined && matrix[tmp_x][pos["y"]] !== undefined)
            {
                val = val + matrix[tmp_x][pos["y"]];
            }

            /* bottom-left */
            tmp_x = parseInt(pos["x"]) - 1;
            tmp_x = tmp_x.toString();
            tmp_y = parseInt(pos["y"]) - 1;
            tmp_y = tmp_y.toString();
            if(matrix[tmp_x] !== undefined && matrix[tmp_x][tmp_y] !== undefined)
            {
                val = val + matrix[tmp_x][tmp_y];
            }

            /* left */
            tmp_y = parseInt(pos["y"]) - 1;
            tmp_y = tmp_y.toString();
            if(matrix[pos["x"]] !== undefined && matrix[pos["x"]][tmp_y] !== undefined)
            {
                val = val + matrix[pos["x"]][tmp_y];
            }

            /* top-left */
            tmp_x = parseInt(pos["x"]) - 1;
            tmp_x = tmp_x.toString();
            tmp_y = parseInt(pos["y"]) + 1;
            tmp_y = tmp_y.toString();
            if(matrix[tmp_x] !== undefined && matrix[tmp_x][tmp_y] !== undefined)
            {
                val = val + matrix[tmp_x][tmp_y];
            }

            // val = val + i;
        }

        if(matrix[pos["x"]] === undefined) {
            matrix[pos["x"]] = [];
        }

        matrix[pos["x"]][pos["y"]] = val;

        // console.log("( " + pos["x"] + " , " + pos["y"] + " ) = " + val);

        if(val > input_int)
        {
            console.log('Part 2 Ans: ' + val);
            break;
        }
    }

    process.exit();
});

function calMatrix(num) {
    /* part 1 */
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

    var result = {
        x: x_val,
        y : y_val
    };

    return result;
}