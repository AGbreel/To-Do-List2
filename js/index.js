var input = document.querySelector("input");
var push = document.querySelector("#push");
var tasks = document.querySelector("#tasks");

push.onclick = function () {
  if (input.value == "") {
    alert("Please Enter a Task");
  } else {
    addTask();

    // Delete Task
    var deleteTask = document.querySelectorAll("#delete");
    for (let i = 0; i < deleteTask.length; i++) {
      deleteTask[i].onclick = function () {
        this.parentElement.remove()
      };
    };

    var task = document.querySelectorAll(".task")
    for (let i = 0; i < task.length; i++) {
        task[i].onclick = function() {
            this.classList.toggle('completed')
        }
    }
  }
};

function addTask() {
  tasks.innerHTML += `
    <div class="task">
        <span>${input.value}</span>
        <button id="delete"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    `;
  clearInput();
}

function clearInput() {
  input.value = "";
}

