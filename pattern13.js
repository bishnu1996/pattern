let n = 5;
let i = 1;
while(i<=n){
    let j = i; 
    while(j < i * 2){
        process.stdout.write(String(j)+" ");
        j = j + 1;
    }
    console.log()
    i = i + 1;
}