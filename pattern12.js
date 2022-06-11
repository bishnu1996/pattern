let n = 5;
let i = 1;
while(i<=n){
    let j = 1;
    let row = i; 
    while(j<=i){
        process.stdout.write(String(row)+" ");
        row = row + 1;
        j = j + 1;
    }
    console.log()
    i = i + 1;
}