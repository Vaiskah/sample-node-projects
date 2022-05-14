const fs = require('fs')


const getText = (path)=>{
  return new Promise((resolve, reject)=>{
    fs.readFile(path, 'utf-8', (err, data)=>{
      if(err){
        reject(err)
      }
      else{
        resolve(data)
      }
    })
  })
}
getText('./folder/result-async.txt').then((message)=>{
  console.log(message)
}).catch((err)=>{
  console.log(err);
})