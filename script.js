let history = [];

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
    const display = document.getElementById('display');
    display.value += char;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        if (display.value !== '') {
            history.push(`${display.value} = ${result}`);
            updateHistory();
        }
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';  // Clear existing history
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function showHistory() {
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('history').style.display = 'block';
}

function hideHistory() {
    document.getElementById('calculator').style.display = 'block';
    document.getElementById('history').style.display = 'none';
}

// Add event listeners to make keyboard input work with the calculator
document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        appendCharacter(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendCharacter(key);
    }
});
