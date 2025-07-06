let count = 1;

function deletetodo(index) {
    const element = document.getElementById("todo-" + index);
    document.getElementById("todoparent").removeChild(element);
}

function addtodo() {
    const ele = document.querySelector("input").value;

    const inputdiv = document.createElement("div");
    inputdiv.id = "todo-" + count;

    const task = document.createElement("h4");
    task.innerText = ele;

    const deletebutton = document.createElement("button");
    deletebutton.innerText = "Delete";
    deletebutton.setAttribute("onclick", `deletetodo(${count})`);

    inputdiv.appendChild(task);
    inputdiv.appendChild(deletebutton);

    document.getElementById("todoparent").appendChild(inputdiv);

    document.querySelector("input").value = "";

    count++;
}
