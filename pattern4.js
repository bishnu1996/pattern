let n = 3;
let i = 1;
let count = 1;
while(i<=n){
    let j = 1;
    while(j <= n){
        process.stdout.write(String(count));
        count = count + 1;
        j = j + 1;
    }
    console.log()
    i = i + 1;
}