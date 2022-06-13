import "./style.css";

const Project = (name) => {
  const projectTasks = [];

  return { name, projectTasks };
};

const Task = (name, dueDate, priority, description, completed = false) => ({
  name, dueDate, priority, description, completed,
});

const toDoList = (() => {
  const indexOfProject = (projectName) => {
    const projectsListNames = [];
    for (let i = 0; i < projectsList.length; i++) {
      projectsListNames.push(projectsList[i].name);
    }
    const index = projectsListNames.indexOf(projectName);
    return index;
  };

  const addTaskToProject = () => {
    const taskName = document.getElementById("title-input").value;
    const dueDate = document.getElementById("due-date").value;
    const taskPriority = document.querySelector("input[name=\"priority\"]:checked").value;
    const taskDescription = document.getElementById("description").value;
    const taskProject = document.getElementById("select-project");
    const taskProjectValue = taskProject.options[taskProject.selectedIndex].value;
    if (taskName == "" || dueDate == "") {
      alert("You need to enter a task name and due date!");
      return;
    }
    const newTask = Task(taskName, dueDate, taskPriority, taskDescription);
    const projectIndex = indexOfProject(taskProjectValue);
    projectsList[projectIndex].projectTasks.push(newTask);
    updateStorage();
  };

  const addProjectToList = () => {
    const projectName = document.getElementById("project-name").value;
    if (projectName != "") {
      const newProject = Project(projectName);
      projectsList.push(newProject);
      updateStorage();
      manageDOM.addProjectToSelector(newProject);
    } else {
      alert("You need to enter a project name!");
    }
  };

  const sortByPriorityLTH = (project) => {
    project.projectTasks.sort((a, b) => {
      const priorityA = a.priority;
      const priorityB = b.priority;
      return compare(priorityA, priorityB);
    });
  };

  const sortByPriorityHTL = (project) => {
    project.projectTasks.sort((a, b) => {
      const priorityA = a.priority;
      const priorityB = b.priority;
      return compare(priorityB, priorityA);
    });
  };

  const sortByDateLTH = (project) => {
    project.projectTasks.sort((a, b) => {
      const dateA = a.dueDate;
      const dateB = b.dueDate;
      return compare(dateA, dateB);
    });
  };

  const sortByDateHTL = (project) => {
    project.projectTasks.sort((a, b) => {
      const dateA = a.dueDate;
      const dateB = b.dueDate;
      return compare(dateB, dateA);
    });
  };

  const sortTasks = (project) => {
    const sortSelector = document.getElementById("sort-selector");
    const sortValue = sortSelector.options[sortSelector.selectedIndex].value;
    switch (sortValue) {
      case "1":
        sortByDateLTH(project);
        break;
      case "2":
        sortByDateHTL(project);
        break;
      case "3":
        sortByPriorityLTH(project);
        break;
      case "4":
        sortByPriorityHTL(project);
        break;
    }
  };

  const compare = (a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };

  const deleteTask = (e, i) => {
    const projectName = findCurrentProjectName();
    const index = indexOfProject(projectName);
    projectsList[index].projectTasks.splice(i, 1);
    e.target.parentNode.parentNode.remove();
    updateStorage();
  };

  const deleteProject = () => {
    const project = findCurrentProjectName();
    const index = indexOfProject(project);
    projectsList.splice(index, 1);
    updateStorage();
  };

  const findCurrentProjectName = () => {
    const selector = document.getElementById("projects");
    const projectName = selector.options[selector.selectedIndex].value;
    return projectName;
  };

  const checkTask = (i) => {
    const project = findCurrentProjectName();
    const index = indexOfProject(project);
    const currentTask = projectsList[index].projectTasks[i];
    if (currentTask.completed == true) {
      currentTask.completed = false;
    } else {
      currentTask.completed = true;
    }
    updateStorage();
  };

  const updateStorage = () => {
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
  };

  const deleteCompleted = () => {
    const project = findCurrentProjectName();
    const index = indexOfProject(project);
    const currentProject = projectsList[index];
    const tasksArray = currentProject.projectTasks;
    console.log(currentProject);
    for (let i = 0; i < tasksArray.length; i++) {
      if (tasksArray[i].completed == true) {
        tasksArray.splice(i, 1);
        i--;
      }
    }
    console.log(currentProject.projectTasks);
    updateStorage();
  };

  return {
    addTaskToProject, addProjectToList, indexOfProject, sortByPriorityHTL, sortByPriorityLTH, sortTasks, deleteTask, deleteProject, checkTask, deleteCompleted,
  };
})();

const manageDOM = (() => {
  const displayNewTaskModal = () => {
    disableAddButtons();

    const content = document.getElementById("tasks-content");

    const modal = document.createElement("div");
    content.appendChild(modal);
    modal.classList.add("task-modal");
    modal.setAttribute("id", "task-modal");

    const closeTaskModal = document.createElement("button");
    closeTaskModal.setAttribute("id", "close-task-modal");
    closeTaskModal.setAttribute("type", "button");
    modal.appendChild(closeTaskModal);
    closeTaskModal.textContent = "X";

    const form = document.createElement("form");
    modal.appendChild(form);
    form.classList.add("task-form");
    form.setAttribute("onsubmit", "return false");
    form.setAttribute("id", "task-form");

    const titleLabel = document.createElement("label");
    form.appendChild(titleLabel);
    titleLabel.setAttribute("for", "title-input");
    titleLabel.textContent = "Title:";

    const titleInput = document.createElement("input");
    form.appendChild(titleInput);
    titleInput.focus();
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title-input");
    titleInput.required = true;

    const dueDateLabel = document.createElement("label");
    form.appendChild(dueDateLabel);
    dueDateLabel.setAttribute("for", "due-date");
    dueDateLabel.textContent = "Due Date:";

    const dueDate = document.createElement("input");
    form.appendChild(dueDate);
    dueDate.setAttribute("id", "due-date");
    dueDate.setAttribute("type", "date");
    dueDate.required = true;

    const priorityFieldset = document.createElement("fieldset");
    form.appendChild(priorityFieldset);
    priorityFieldset.classList.add("priority-fieldset");

    const priorityLegend = document.createElement("legend");
    priorityFieldset.appendChild(priorityLegend);
    priorityLegend.textContent = "Priority:";

    const priorityDiv = document.createElement("div");
    priorityFieldset.appendChild(priorityDiv);

    const lowPriorityLabel = document.createElement("label");
    priorityDiv.appendChild(lowPriorityLabel);
    lowPriorityLabel.setAttribute("for", "low-priority");
    lowPriorityLabel.textContent = "Low";

    const lowPriority = document.createElement("input");
    priorityDiv.appendChild(lowPriority);
    lowPriority.setAttribute("type", "radio");
    lowPriority.setAttribute("id", "low-priority");
    lowPriority.setAttribute("value", "1");
    lowPriority.setAttribute("name", "priority");
    lowPriority.checked = true;

    const mediumPriorityLabel = document.createElement("label");
    priorityDiv.appendChild(mediumPriorityLabel);
    mediumPriorityLabel.setAttribute("for", "medium-priority");
    mediumPriorityLabel.textContent = "Medium";

    const mediumPriority = document.createElement("input");
    priorityDiv.appendChild(mediumPriority);
    mediumPriority.setAttribute("type", "radio");
    mediumPriority.setAttribute("id", "medium-priority");
    mediumPriority.setAttribute("value", "2");
    mediumPriority.setAttribute("name", "priority");

    const highPriorityLabel = document.createElement("label");
    priorityDiv.appendChild(highPriorityLabel);
    highPriorityLabel.setAttribute("for", "high-priority");
    highPriorityLabel.textContent = "High";

    const highPriority = document.createElement("input");
    priorityDiv.appendChild(highPriority);
    highPriority.setAttribute("type", "radio");
    highPriority.setAttribute("id", "high-priority");
    highPriority.setAttribute("value", "3");
    highPriority.setAttribute("name", "priority");

    const selectProjectLabel = document.createElement("label");
    form.appendChild(selectProjectLabel);
    selectProjectLabel.setAttribute("for", "select-project");
    selectProjectLabel.textContent = "Select Project:";

    const selectProject = document.createElement("select");
    selectProject.setAttribute("id", "select-project");
    form.appendChild(selectProject);
    addProjectOptions(selectProject);
    selectProject.setAttribute("name", "projects");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description:";
    form.appendChild(descriptionLabel);

    const description = document.createElement("textarea");
    form.appendChild(description);
    description.setAttribute("id", "description");

    const spacediv = document.createElement("div");
    form.appendChild(spacediv);
    spacediv.classList.add("space-div");

    const submitTaskBtn = document.createElement("button");
    form.appendChild(submitTaskBtn);
    submitTaskBtn.setAttribute("id", "submit-task");
    submitTaskBtn.setAttribute("type", "button");
    submitTaskBtn.textContent = "Create Task";
  };

  const displayNewProjectModal = () => {
    disableAddButtons();

    const content = document.getElementById("tasks-content");

    const modal = document.createElement("div");
    content.appendChild(modal);
    modal.classList.add("project-modal");
    modal.setAttribute("id", "project-modal");

    const projectForm = document.createElement("form");
    modal.appendChild(projectForm);
    projectForm.classList.add("project-form");
    projectForm.setAttribute("id", "project-form");
    projectForm.setAttribute("onsubmit", "return false");
    projectForm.setAttribute("action", "#");
    projectForm.setAttribute("method", "get");
    projectForm.removeAttribute("novalidate");

    const closeProjectModal = document.createElement("button");
    closeProjectModal.setAttribute("id", "close-project-modal");
    closeProjectModal.setAttribute("type", "button");
    projectForm.appendChild(closeProjectModal);
    closeProjectModal.textContent = "X";

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "project-name");
    nameLabel.textContent = "Project Name:";
    projectForm.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    projectForm.appendChild(nameInput);
    nameInput.focus();
    nameInput.setAttribute("id", "project-name");
    nameInput.setAttribute("type", "text");
    nameInput.required = true;

    const spacediv = document.createElement("div");
    projectForm.appendChild(spacediv);
    spacediv.classList.add("space-div");

    const submitProjectBtn = document.createElement("button");
    projectForm.appendChild(submitProjectBtn);
    submitProjectBtn.setAttribute("id", "submit-project");
    submitProjectBtn.setAttribute("type", "button");
    submitProjectBtn.textContent = "Create Project";
  };

  const emptyProjectModal = () => {
    const projectModal = document.getElementById("project-modal");
    projectModal.remove();
    enableAddButtons();
  };

  const emptyTaskModal = () => {
    const taskModal = document.getElementById("task-modal");
    taskModal.remove();
    enableAddButtons();
  };

  const disableAddButtons = () => {
    const addProjectBtn = document.getElementById("add-new-project");
    const addTaskBtn = document.getElementById("add-new-task");
    addProjectBtn.disabled = true;
    addTaskBtn.disabled = true;
  };

  const enableAddButtons = () => {
    const addProjectBtn = document.getElementById("add-new-project");
    const addTaskBtn = document.getElementById("add-new-task");
    addProjectBtn.disabled = false;
    if (projectsList.length != 0) {
      addTaskBtn.disabled = false;
    } else {
      addTaskBtn.disabled = true;
    }
  };

  const setEventListeners = () => {
    const addNewTaskBtn = document.getElementById("add-new-task");
    addNewTaskBtn.addEventListener("click", () => {
      displayNewTaskModal();
      const closeTaskModal = document.getElementById("close-task-modal");
      closeTaskModal.addEventListener("click", emptyTaskModal);
      const submitTask = document.getElementById("submit-task");
      submitTask.addEventListener("click", () => {
        const form = document.getElementById("task-form");
        toDoList.addTaskToProject();
        form.reset();
        emptyTaskModal();
        displayTasksOfProject();
      });
    });

    const addNewProjectBtn = document.getElementById("add-new-project");
    addNewProjectBtn.addEventListener("click", () => {
      displayNewProjectModal();
      const closeProjectModal = document.getElementById("close-project-modal");
      closeProjectModal.addEventListener("click", emptyProjectModal);
      const submitProject = document.getElementById("submit-project");
      submitProject.addEventListener("click", () => {
        const form = document.getElementById("project-form");
        toDoList.addProjectToList();
        form.reset();
        emptyProjectModal();
        displayTasksOfProject();
      });
    });

    const selectProjects = document.getElementById("projects");
    selectProjects.addEventListener("change", () => {
      displayTasksOfProject();
    });

    const sortSelector = document.getElementById("sort-selector");
    sortSelector.addEventListener("change", displayTasksOfProject);

    const delCompleted = document.getElementById("delete-completed");
    delCompleted.addEventListener("click", () => {
      toDoList.deleteCompleted();
      displayTasksOfProject();
    });
  };

  const setCheckboxListeners = () => {
    const checkBox = document.getElementsByClassName("checkbox");
    for (let i = 0; i < checkBox.length; i++) {
      checkBox[i].addEventListener("click", (e) => {
        toDoList.checkTask(i);
        const parent = e.target.parentNode;
        parent.classList.toggle("completed");
        displayTasksOfProject();
      });
    }
  };

  const setDelTaskBtnListeners = () => {
    const delTaskBtn = document.getElementsByClassName("delete-task");
    for (let i = 0; i < delTaskBtn.length; i++) {
      delTaskBtn[i].addEventListener("click", (e) => {
        toDoList.deleteTask(e, i);
        displayTasksOfProject();
      });
    }
  };

  const setDelProjectBtnListeners = () => {
    const delProjectBtn = document.getElementById("delete-project");
    delProjectBtn.addEventListener("click", () => {
      if (projectsList.length != 0) {
        toDoList.deleteProject();
        initializeProjectSelector();
        displayTasksOfProject();
      }
    });
  };

  const initializeProjectSelector = () => {
    const projectSelector = document.getElementById("projects");
    projectSelector.textContent = "";
    for (let i = 0; i < projectsList.length; i++) {
      const projectOption = document.createElement("option");
      projectSelector.appendChild(projectOption);
      projectOption.textContent = projectsList[i].name;
      projectOption.setAttribute("value", projectsList[i].name);
    }
  };

  const addProjectToSelector = (project) => {
    const projectSelector = document.getElementById("projects");
    const newProjectOption = document.createElement("option");
    projectSelector.appendChild(newProjectOption);
    newProjectOption.textContent = project.name;
    newProjectOption.setAttribute("value", project.name);
  };

  const addProjectOptions = (node) => {
    node.textContent = "";
    for (let i = 0; i < projectsList.length; i++) {
      const projectOption = document.createElement("option");
      node.appendChild(projectOption);
      projectOption.textContent = projectsList[i].name;
      projectOption.setAttribute("value", projectOption.textContent);
    }
  };

  const displayTasksOfProject = () => {
    const selector = document.getElementById("projects");
    const tasksContent = document.getElementById("task-list");
    tasksContent.textContent = "";
    enableAddButtons();
    if (selector.options.length == 0) {
      return;
    }
    const projectName = selector.options[selector.selectedIndex].value;
    const index = toDoList.indexOfProject(projectName);
    const project = projectsList[index];
    if (project) {
      toDoList.sortTasks(project);
    }
    if (project.projectTasks.length == 0) {
      tasksContent.textContent = "";
      return;
    }
    generateTaskList(project);
    makeCollapsibleContent();
    setDelProjectBtnListeners;
    setDelTaskBtnListeners();
    setCheckboxListeners();
  };

  const generateTaskList = (project) => {
    const tasksContent = document.getElementById("task-list");
    for (let i = 0; i < project.projectTasks.length; i++) {
      const taskUnit = document.createElement("task-unit");
      taskUnit.classList.add("task-unit");
      tasksContent.appendChild(taskUnit);

      const task = document.createElement("div");
      taskUnit.appendChild(task);
      task.classList.add("task");

      setTaskBorderColor(project.projectTasks[i], task);

      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      task.appendChild(checkBox);
      checkBox.classList.add("checkbox");

      const taskText = document.createElement("div");
      task.appendChild(taskText);
      taskText.classList.add("task-text");

      const taskName = document.createElement("div");
      taskText.appendChild(taskName);
      taskName.classList.add("task-name");
      taskName.textContent = `${project.projectTasks[i].name}`;
      if (project.projectTasks[i].completed == true) {
        checkBox.checked = true;
        taskName.style.textDecoration = "line-through";
      }

      const dueDate = document.createElement("div");
      dueDate.classList.add("due-date");
      taskText.appendChild(dueDate);
      dueDate.textContent = `${project.projectTasks[i].dueDate}`;

      const collapsibleBtn = document.createElement("button");
      task.appendChild(collapsibleBtn);
      collapsibleBtn.setAttribute("type", "button");
      collapsibleBtn.classList.add("collapse");

      const delBtn = document.createElement("button");
      delBtn.setAttribute("type", "button");
      delBtn.classList.add("delete-task");
      task.appendChild(delBtn);

      const collapsibleContent = document.createElement("div");
      taskUnit.appendChild(collapsibleContent);
      collapsibleContent.setAttribute("id", `collapse-content-${i}`);
      collapsibleContent.textContent = project.projectTasks[i].description;
      collapsibleContent.classList.add("collapse-content");
    }
  };

  const makeCollapsibleContent = () => {
    const collapsible = document.getElementsByClassName("collapse");
    for (let i = 0; i < collapsible.length; i++) {
      collapsible[i].addEventListener("click", () => {
        collapsible[i].classList.toggle("active");
        const content = document.getElementById(`collapse-content-${i}`);
        if (collapsible[i].classList.contains("active")) {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    }
  };

  const setTaskBorderColor = (task, element) => {
    if (task.priority == "1") {
      element.style.borderLeft = "7px solid green";
    } else if (task.priority == "2") {
      element.style.borderLeft = "7px solid orange";
    } else {
      element.style.borderLeft = "7px solid red";
    }
  };

  return {
    setEventListeners, addProjectToSelector, initializeProjectSelector, displayTasksOfProject, setDelProjectBtnListeners, setDelTaskBtnListeners, disableAddButtons,
  };
})();

let projectsList;
let serializedProjectsList;

if (!localStorage.getItem("projectsList")) {
  projectsList = [];
} else {
  serializedProjectsList = JSON.parse(localStorage.getItem("projectsList"));
  projectsList = deserializeProjectsList(serializedProjectsList);
}

manageDOM.initializeProjectSelector();
manageDOM.disableAddButtons();
manageDOM.displayTasksOfProject();
manageDOM.setEventListeners();
manageDOM.setDelProjectBtnListeners();
manageDOM.setDelTaskBtnListeners();

function deserializeProjectsList(string) {
  const newArray = [];
  for (let i = 0; i < string.length; i++) {
    const project = Project(string[i].name);
    project.projectTasks = deserializeTasksList(string[i].projectTasks);
    newArray.push(project);
  }
  return newArray;
}

function deserializeTasksList(string) {
  const newArray = [];
  for (let i = 0; i < string.length; i++) {
    const task = Task(string[i].name, string[i].dueDate, string[i].priority, string[i].description, string[i].completed);
    newArray.push(task);
  }
  return newArray;
}
