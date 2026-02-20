async function getData(){
    try{
        const response = await fetch('https://dummyjson.com/products')
        console.log(response.ok)
        if(response.ok===false)throw new Error('Data not found')
        const data=await response.json()
        console.log(data)    
    }catch(error){
        console.log('Data not found')
    }
    
}

getData()