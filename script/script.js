document.querySelector("#push").onclick = function(){
if(document.querySelector("#newtask input").value.length==0){
    alert("Please enter a Task")
}
else{
    document.querySelector("#tasks").innerHTML +=`
    <div class="tasks">
    <span id="taskname" >
       ${document.querySelector("#newtask input").value}
        </span>
       <button class="delete">
       <i class="fa-solid fa-trash-can" ></i>

    </div>
    `
    document.querySelector("#newtask input").value ="";
    var current_tasks = document.querySelectorAll(".delete");
    console.log(current_tasks.length);
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    
    
}
}




 