let count = document.querySelector("#counter");
let increment = document.querySelector("#incr");
let decrement = document.querySelector("#decr");

increment.addEventListener("click",function(){
  let value = parseInt(count.innerText);
  value = value + 1;
  count.innerText = value;
});

decrement.addEventListener("click",function(){
    let value = parseInt(count.innerText);
    value = value - 1;
    count.innerText = value;

});