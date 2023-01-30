let form = document.getElementById("addForm")
let itemlist = document.getElementById("items")
let filter = document.getElementById("filter")

 
form.addEventListener("submit",function(e){
    e.preventDefault()

let item = document.getElementById("item").value
let li =document.createElement("li")
li.appendChild(document.createTextNode(item))
let btn = document.createElement("button")
btn.appendChild(document.createTextNode("X"))
li.appendChild(btn)
btn.className="btn btn-danger btn-sm float-right delete"
li.className="list-group-item"
itemlist.appendChild(li)
document.getElementById('item').value=" "
})
  
itemlist.addEventListener("click",function(e){
   if(e.target.classList.contains("delete")){

if(confirm("are you sure ,want to delete task")){
 // console.log( e.target.parentElement)
  itemlist.removeChild(e.target.parentElement)  
}
   }else{
    alert("Task!!")
   }
})

filter.addEventListener("keypress",function(e){
let value = e.target.value.toLowerCase()
let li =document.getElementsByTagName("li")
console.log(li);
Array.from(li).forEach(function(item){
    if(item.firstChild.textContent.toLowerCase().indexOf(value)!==-1){
item.style.display ="block"
    }else{
        item.style.display ="none"
    }
})

})