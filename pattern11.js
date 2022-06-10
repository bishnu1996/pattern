let n = 4;
let i = 1;
let count = 1;
while(i <= n){
    let j = 1;
    while(j <= i){
        process.stdout.write(String(count)+" ");
        count = count + 1;
        j = j + 1;
    }
    console.log()
    i = i + 1
}