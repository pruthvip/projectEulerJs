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

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = BigInt(readLine());
        n = n - 1n;

        const a3 = (n / 3n);
        const a5 = (n / 5n);
        const a15 = (n / 15n);

        const aa = (
            (3n * (a3 * (a3 + 1n) / 2n))
            + (5n * (a5 * (a5 + 1n) / 2n))
            - (15n * (a15 * (a15 + 1n) / 2n)))

        console.log(aa.toString())
    }
}
