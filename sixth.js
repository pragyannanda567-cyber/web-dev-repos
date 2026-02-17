function orderfood(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console,console.log('Food Orderd');
            resolve('Food Orderd')
        }, 1000);
    })
}

function prepareFood(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('Food Prepared')
            resolve('Food Prepared')
        }, 1000);

    })
}

function DeliverFood(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('Food Delivered')
            resolve('Food Delivered')
        }, 1000);

    })
}


async function order(){
    const data= await orderfood()
    console.log
    await prepareFood()
    await DeliverFood()
}


console.log(order())

