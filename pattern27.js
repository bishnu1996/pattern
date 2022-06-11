let n = 5;
let i = 1;
while(i<=n){
    let j = 1;
    while(j<=n-i+1){
        process.stdout.write("*");
        j = j + 1;
    }
    i = i + 1;
    console.log();
}