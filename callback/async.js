console.log("first call");
process.nextTick(()=> console.log("Second call"));
console.log("Third call")