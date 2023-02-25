//for opening the form
const plus = document.querySelector(".btn");
const popUpForm = document.getElementById("form");
const data = {};
const listOfTasks = document.getElementById("listOfTasks");
let i = 0;
let arr = [];
if (!localStorage.getItem("list")) {
  console.log("local storage created");
  localStorage.setItem("list", JSON.stringify(arr));
  // createTodo();
}

plus.addEventListener("click", () => {
  const popUpForm = document.getElementsByClassName("PopUpForm");

  // popUpForm.style.display = "none";
  console.log(popUpForm);
  if (popUpForm && popUpForm.length) {
    popUpForm[0].classList.toggle("show");
  }
  document.getElementById("TaskTitle").focus();
});

//form validation
const form = document.getElementById("form");
const taskTitle = document.getElementById("TaskTitle");
const dueDate = document.getElementById("dueDate");
const desInput = document.getElementById("desInput");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});

let formValidation = () => {
  if (taskTitle.value === "" || dueDate.value === "" || desInput.value === "") {
    msg.innerHTML == "Please fill all the blanks";
    // alert("Please fill all the blanks");
    console.log("failure");
  } else {
    msg.innerHTML = "";

    console.log("From form validation");
    //getting data from form
    acceptData();
  }
};

let acceptData = () => {
  data["task"] = taskTitle.value;
  data["date"] = dueDate.value;
  data["des"] = desInput.value;
  // console.log(data);

  arr = JSON.parse(localStorage.getItem("list"));
  arr.push(data);
  localStorage.setItem("list", JSON.stringify(arr));
  // console.log(arr);
  //now displaying the data
  displayContent();
  createTodo();
};

let displayContent = () => {
  const listOfItems = JSON.parse(localStorage.getItem("list"));
  console.log(listOfItems);
  // console.log(listOfItems);
  listOfTasks.innerHTML = "";

  listOfItems.forEach((element) => {
    listOfTasks.innerHTML += `
        <div id = "content">
            <p><b>Task:</b>${element.task}</p>
            <p><b>Description:</b>${element.des}</p>
            <p><b>Due Date</b>${element.date}</p>
            <span class = "options">
                <box-icon onclick = "editTask(this)" type='solid' name='edit' id="editList" ></box-icon>
                <box-icon onclick = "deleteTask(this)" name='x'></box-icon>
            </span>
        </div>
    `;
  });
};

displayContent();

let createTodo = () => {
  // const listOfItems = JSON.parse(localStorage.getItem("list"));
  // console.log(listOfItems);
  // // console.log(listOfItems);
  // listOfTasks.innerHTML = "";

  // listOfItems.forEach((element) => {
  //   listOfTasks.innerHTML += `
  //       <div id = "content">
  //           <p><b>Task:</b>${element.task}</p>
  //           <p><b>Description:</b>${element.des}</p>
  //           <p><b>Due Date</b>${element.date}</p>
  //           <span class = "options">
  //               <box-icon onclick = "editTask(this)" type='solid' name='edit' id="editList" ></box-icon>
  //               <box-icon onclick = "deleteTask(this)" name='x'></box-icon>
  //           </span>
  //       </div>
  //   `;
  listOfTasks.style.display = "block";
  taskTitle.value = "";
  dueDate.value = "";
  desInput.value = "";

  console.log("Yes iam");

  const popUpForm = document.getElementsByClassName("PopUpForm");
  if (popUpForm && popUpForm.length) {
    popUpForm[0].classList.toggle("show");
  }
  // });

  // console.log(data);
};

//editing the list
let editTask = (e) => {
  deleteTask();
  const popUpForm = document.getElementsByClassName("PopUpForm");
  console.log(popUpForm);
  if (popUpForm && popUpForm.length) {
    popUpForm[0].classList.toggle("show");
  }
  // input.value = e.parentElement.previousElementSibling.innerHTML;
  // e.parentElement.preventDefault.remove();
};

let deleteTask = () => {
  // e.preventDefault();
  console.log(arr[i]);
  localStorage.removeItem("0");
  // console.log(`list[${i}]`);
  i = i + 1;
  console.log("Hello from deleteTask");
  const content = document.getElementById("content");
  content.remove();
};

//for closing the form
const close = document.getElementById("close");
close.addEventListener("click", () => {
  const popUpForm = document.getElementsByClassName("PopUpForm");
  console.log(popUpForm);
  if (popUpForm && popUpForm.length) {
    popUpForm[0].classList.toggle("show");
  }
});

// window.localStorage.clear();
