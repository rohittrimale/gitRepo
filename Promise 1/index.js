function bookSearchPromise(){
    return new Promise((reslove,reject)=>{
  
      setTimeout(()=>{
       const bookSearch = Math.random() > 0.5;
       if (bookSearch) {
        reslove("Book found");
      } else {
        reject("Book Not Found");
      }
      },3000)
      
    })
  }
  
  bookSearchPromise().then((result)=>{
    console.log(result)
  }).catch((error)=>{
    console.log(error)
  })