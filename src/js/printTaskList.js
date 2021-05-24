const createCheckbox = (id, state) => {
    const div = document.createElement('div')
    const input = document.createElement('input')
    const label = document.createElement('label')
    div.classList = 'form-check text-center'
    input.type = 'checkbox'
    input.id = id
    input.name = 'finally'
    label.classList = 'form-check-label'
    label.for = 'finally'
    div.appendChild(input)
    div.appendChild(label)
    if (state) {
        input.checked = true
    }
    return div
}

const createDeleteBtn = (id) => {
    const td = document.createElement('td')
    const button = document.createElement('button')
    button.type = 'button'
    button.classList = 'btn btn-sm btn-danger'
    button.id = id
    button.name = 'delete'
    button.textContent = 'Delete'
    td.appendChild(button)
    return td
}

const createUrgencyEmoji = (urgency) => {
    const td = document.createElement('td')
    td.classList = 'text-center'
    if (urgency == 1) {
        td.innerHTML = '&#128293;'
    } else if (urgency == 2) {
        td.innerHTML = `&#x1F3AD;`
    } else if (urgency == 3) {
        td.innerHTML = `&#127752;`
    }
    return td
}

const createDate = (date) => {
    const td = document.createElement('td')
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toLocaleString('default', { day: '2-digit' });
    console.log(date)
    td.textContent = `${month} ${day}`
    td.classList = 'text-capitalize text-center'
    return td
}

const clear = () => {
    while (taskListContainer.firstChild) {
        taskListContainer.removeChild(taskListContainer.firstChild);
    }
}

const print = (taskList) => {
    clear()
    let fragment = document.createDocumentFragment()
    for (var i = 0; i < taskList.length; i++) {
        const id = taskList[i].id
        const tr = document.createElement('tr')
        const deleteBtn = createDeleteBtn(id)
        tr.id = id
        for (const property in taskList[i]) {
            if (property == 'state') {
                const td = document.createElement('td')
                const state = taskList[i][property]
                if (state) {
                    tr.classList = 'text-muted'
                }
                td.appendChild(createCheckbox(id, state))
                tr.appendChild(td)
            } else if (property == 'urgency') {
                const urgency = taskList[i][property]
                tr.appendChild(createUrgencyEmoji(urgency))
            } else if (property == 'date') {
                const date = taskList[i][property]
                tr.appendChild(createDate(date))
            }
            else if (property == 'id') { }
            else {
                const td = document.createElement('td')
                td.textContent = taskList[i][property]
                tr.appendChild(td)
            }
        }

        tr.appendChild(deleteBtn)
        fragment.appendChild(tr)
    }
    taskListContainer.appendChild(fragment)
}

module.exports = { print }