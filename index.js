function addFormHandler() {
  document.getElementById('create-task-form').addEventListener('submit',
  function(event) {
    event.preventDefault();
    createNewTask(event)
  })
} 
let taskId = 0;

function createNewTask(event) {
  taskId += 1;
  document.getElementById('tasks').innerHTML += `
  <li id = ${taskId}>
  ${event.target["new-task-description"].value} 
  <button data-id=${taskId} onClick=deleteTask(event)>X</button>
  
  <select id="mySelect" onchange="priority(taskId)">
    <option value = "low">Low priority</option>
    <option value = "medium">Medium priority</option>
    <option value = "high">High priority</option>
  </select>
  
  </li>
  `
  event.target.reset()
}

function deleteTask(event) {
  console.log(event.target.dataset.id);
  document.getElementById(`${event.target.dataset.id}`).remove();
}
//if select option high change color of text to red
function priority(taskId) {
  console.log(document.getElementById(taskId));
  console.log(document.getElementById("mySelect").value);
  let key = document.getElementById("mySelect").value
  switch (key) {
    case "low":
      document.getElementById(taskId).style.color = 'green'
      break;
    case "medium":
      document.getElementById(taskId).style.color = 'orange'
      break;
    case "high":
      document.getElementById(taskId).style.color = 'red'
      break;
  }
}

addFormHandler()