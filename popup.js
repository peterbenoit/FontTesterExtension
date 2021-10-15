function loadFirst() {
    chrome.tabs.executeScript({
        file: 'first.js'
    });
}

function loadSecond() {
    chrome.tabs.executeScript({
        file: 'second.js'
    });
}

function loadThird() {
    chrome.tabs.executeScript({
        file: 'third.js'
    });
}

function loadFourth() {
    chrome.tabs.executeScript({
        file: 'fourth.js'
    });
}


document.getElementById('first').addEventListener('click', function () {
    loadFirst();
});

document.getElementById('second').addEventListener('click', function () {
    loadSecond();
});

document.getElementById('third').addEventListener('click', function () {
    loadThird();
});

document.getElementById('fourth').addEventListener('click', function () {
    loadFourth();
});