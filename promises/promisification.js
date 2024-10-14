function promsify( callback_api ){

    return function promisified( ...args ){

        return new Promise((res, rej)=>{

            const new_args = [
                ...args,
                (err, result)=> {
                    if(err) rej(err);
                    res(result)
                }
            ]

            callback_api(...new_args)

        })
        
        
    }
}