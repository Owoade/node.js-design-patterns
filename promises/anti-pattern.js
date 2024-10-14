/* 
    One common antipattern when dealing with errors with async/await is returning 
    a Promise that rejects to the caller and expecting the error to be caught by the local 
    try...catch block of the function that is returning the Promise
*/

async function wrongErrorCatcher(){
    try {
        return errorThrower();
    }
    // this will never be triggered
    catch(e){
        console.log(`Error caught by the async function ${e.message}`)
    }
}

async function errorThrower(){
    return new Error('This is suppose to happen');
}

wrongErrorCatcher()
// this will be triggered
.catch((e)=> console.log(`error caught by caller ${e.message}`))