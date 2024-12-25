process.stdin.on("readable", ()=>{

    let chunk;

    while((chunk = process.stdin.read()) !== null){
        console.log("new chunk ==>", chunk)
    }

})  
.on('end', () => console.log('End of stream'))