const p=new Promise( function(resolve,reject){
    setTimeout(()=>{
    let done=false;
    if(done){
        resolve({name:'alex',Age:34})
    }else{
        reject('Network Issue')
    }
},5000)
})


console.log(p)

p.then((data)=>(console.log('Resolved',data)
)).catch((err)=>{
  console.log('Rejected',err)
}).finally(()=>{
    console.log('Finally Block')
})

