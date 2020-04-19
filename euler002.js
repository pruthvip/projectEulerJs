process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function getSum(n) {
    let sum = 10n;
    let a = 8n;
    let b = 13n;
    let prev = b;

    while (b < n) {
        if (b % 2n === 0n) {
            sum += b;
        }

        prev = b;
        b = b + a;
        a = prev; 
    }

    return sum.toString();
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = BigInt(readLine());
        console.log(getSum(n));
    }

}
