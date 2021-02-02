document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  const submit = form.getElementsByTagName("input")[1];

  submit.addEventListener('click', function(event){
    event.preventDefault();
    
    const ul = document.getElementById("tasks");
    const li = document.createElement('li');
    const input = form.getElementsByTagName("input")[0]
    
    li.innerHTML = `<p>${input.value}</p><button data-description = ${input.value}>Delete Task</button>`;
    ul.appendChild(li);
    input.value = ""
    // console.log(removeTask)

    const removeTask = document.getElementsByTagName("button");
  
    for (let i = 0; i < removeTask.length; i++){
      removeTask[i].addEventListener('click', function(event){
        // console.log("Hello")
        event.preventDefault();
        console.log(event.currentTarget.parentNode)
        event.currentTarget.parentNode.remove();
      })
    }

  })

      // var btn = document.getElementsByClassName('remove')

      // for (var i = 0; i < btn.length; i++) {
      //   btn[i].addEventListener('click', function(e) {
      //     e.currentTarget.parentNode.remove();
      //     this.closest('.single').remove() // in modern browsers in complex dom structure
      //     this.parentNode.remove(); //this refers to the current target element 
      //     e.target.parentNode.parentNode.removeChild(e.target.parentNode);
      //   }, false);
      // }

});