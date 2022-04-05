const tasks = document.querySelectorAll('.task-block')
stats = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0,
    "12": 0,
    "13": 0,
    "14": 0,
    "15": 0,
    "16": 0,
    "17": 0,
    "18": 0
}

if (localStorage.getItem('stats') === null) {
    localStorage.setItem('stats', JSON.stringify(stats))
} else {
    stats = JSON.parse(localStorage.getItem('stats'))
}


tasks.forEach(task => {
    const taskNumber = task.children[0].dataset.taskId
    const counter = task.children[1]
    const buttons = task.children[2].children
    counter.innerText = stats[taskNumber]
    congratsColor(parseInt(counter.innerText), counter)
    for (let button of buttons) {
        button.addEventListener('click', () => {
            if (button.innerText == '+') {
                counter.innerText = parseInt(counter.innerText) + 1
            } else {
               if (parseInt(counter.innerText) > 0) {
                   counter.innerText = parseInt(counter.innerText) - 1
               }
            }
            stats[taskNumber] = counter.innerText
            localStorage.setItem('stats', JSON.stringify(stats))
            congratsColor(parseInt(counter.innerText), counter)
        })
    }
});

function congratsColor(stat, counter) {
    if (stat >= 100) {
        counter.style.color = '#63ad2d'
    } else {
        counter.style.color = '#000000'
    }
}