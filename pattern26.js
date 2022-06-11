let n = 5;
let i = n;
while(i>0){
    let j = 1;
    while(j<=i){
        process.stdout.write("*")
        j = j + 1
    }
    console.log()
    i = i - 1;
}