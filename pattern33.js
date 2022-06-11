let n = 5;
let i = 1;
while(i<=n){
    let j = 1;
    while(j<=n-i+1){
        process.stdout.write(String(j))
        j = j + 1;
    }
    j = 1;
    while(j<=(i-1)*2){
        process.stdout.write("*");
        j = j + 1;
    }
    j = n-i+1;
    while(j>=1){
        process.stdout.write(String(j))
        j = j - 1
    }
    console.log()
    i = i + 1;
}