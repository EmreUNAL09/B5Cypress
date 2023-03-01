/** Cypress is promise aware so if you return a promise from inside of commands like . then() , 
 * Cypress will not continue until those promises resolve.
 */

function getNumber(curreny){
    return new Promise((resolve,reject)=>{
        if(typeof curreny !="number"){
            reject(new Error('currency is not number'))
        }else{
            resolve(curreny)
        }
    })
}

getNumber(1000).then((val)=>{
    console.log('val',val)
})