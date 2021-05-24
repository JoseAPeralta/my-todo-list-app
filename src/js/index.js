const { v4: uuidv4 } = require('uuid');
const { validateName, validateDate } = require('./validate')
const { addTask, removeTask, getTasks, changeTaskState } = require('./data')
const { print } = require('./printTaskList')
const taskName = document.getElementById('taskName')
const taskEndDate = document.getElementById('taskEndDate')
const taskType = document.getElementById('taskType')
const addTaskBtn = document.getElementById('addTask')
const taskListContainer = document.getElementById('taskListContainer')

const getUrgency = () => {
    const urgency = document.querySelector('input[name="urgencyLevel"]:checked').value
    return urgency
}

const setDateInput = () => {
    const today = new Date()
    taskEndDate.valueAsDate = today;
    taskEndDate.min = today.toISOString().split("T")[0]
}

const validateForm = () => {
    const name = validateName(taskName.value)
    const myDate = validateDate(new Date(taskEndDate.value))
    if (!name.isValid) {
        return false
    }
    if (!myDate.isValid) {
        return false
    }
    return true
}

const task = () => ({
    id: uuidv4(),
    name: taskName.value,
    date: new Date(taskEndDate.value),
    urgency: getUrgency(),
    type: taskType.value,
    state: false
})

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (validateForm()) {
        addTask(task())
        print(getTasks())
        const dia = new Date()
        console.log(dia.getTime())
    }
})

taskListContainer.addEventListener('click', (e) => {
    const targetId = e.target.id
    if (targetId && e.target.name === 'finally') {
        changeTaskState(targetId)
        print(getTasks())
    }
    if (targetId && e.target.name === 'delete') {
        removeTask(targetId)
        print(getTasks())
    }
}
)

setDateInput()