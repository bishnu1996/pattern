let n = 5;
let i = 1;
while(i<=n){
    let space = 1;
    while(space <= n-i){
        process.stdout.write(" ")
        space = space + 1;
    }
    let j = 1;
    while(j<=i){
        process.stdout.write(String(i))
        j = j + 1;
    }
    console.log()
    i = i + 1;
}