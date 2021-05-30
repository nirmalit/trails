const timer=new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("after 3 sec")
  },2000)
})

const waiter=async()=>{
  let a="";
  await timer.then(res=>a=res)
  console.log(a);
  console.log("END");
}
waiter()