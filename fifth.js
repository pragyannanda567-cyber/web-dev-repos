console.log('First Line')
setTimeout(()=> {
    console.log('Inside Timeout')
},0)
const p=new Promise((resolve, reject)=>{
    resolve()
})
p.then(()=>{
    console.log('Inside Promise')
}).catch(()=>{
    console.log('Inside Catch')
}  )

const p2=new Promise((resolve, reject)=>{
    reject()
})

const p3=new Promise((resolve,reject)=>{
    resolve()
})

p2.then(()=>{
    console.log('Inside Promise')
}).catch(()=>{
    console.log('Inside Catch')
}  )

p3.then(()=>{
    console.log('Inside Promise')
}).catch(()=>{
    console.log('Inside Catch')
} )