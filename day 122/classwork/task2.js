let task = new Promise((resolve,reject)=>{
    reject("failed")
})
task.catch((res)=>console.log(res))