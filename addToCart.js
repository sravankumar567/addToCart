const inputElement=document.getElementById("inputElement");
const userTodo=document.getElementById("listElement");
function hello(){
    let userInput=inputElement.value;
    let order=document.createElement("li");
    order.textContent=userInput;
    inputElement.value="";
    userTodo.appendChild(order);
}
