let n = 5;
let i = 1;
while(i<n){
    let j = 1
    let count = 64 + n - i
    while(j<=i){
        process.stdout.write(String.fromCharCode(count))
        count = count + 1;
        j = j + 1;
    }
    i = i + 1;
    console.log()
       
}