let taskList = []

const getTasks = () => {
    return taskList
}

const changeTaskState = (id) => {
    let index = taskList.findIndex(function (o) {
        return o.id === id;
    })
    if (index !== -1) {
        taskList[index].state = !taskList[index].state
    }
}

const addTask = (task) => {
    taskList.push(task)
    console.log('Task List:')
    console.log(taskList)
}

const removeTask = (id) => {
    let index = taskList.findIndex(function (o) {
        return o.id === id;
    })
    if (index !== -1) {
        taskList.splice(index, 1)
    }

}

module.exports = { addTask, removeTask, getTasks, changeTaskState }