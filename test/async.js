async function helloAsync() {
  console.log("1111111111")
  return "helloAsync1111";
}

console.log(helloAsync())  // Promise {<resolved>: "helloAsync"}

helloAsync().then(v => {
  console.log(v);         // helloAsync
})