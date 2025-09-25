//Promises 


const examplePromise = new Promise((resolve, reject) => {
    const num = 8;

    if (num > 7)
        resolve('Can be pushed')
    else
        reject('Oops')


});

console.log(examplePromise)
