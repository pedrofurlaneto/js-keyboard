const keys = document.getElementsByClassName('key');

function playNote(event) {
    let audioKeyCode = getKeyCode(event);
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    if(key == null) {
        return;
    }

    addPlayingClass(key);
    playAudio(audioKeyCode);
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function removePlayingClass(event) {
    event.target.classList.remove('playing')
}

function getKeyCode(event) {
    let keyCode;

    const keyboardPressed = event.type === 'keydown'
    if(keyboardPressed) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function eventRegister() {
    //mouse
    console.log(keys[1])

    for(key of keys) {
        key.addEventListener('click', playNote)
        key.addEventListener('transitionend', removePlayingClass)
    }

    //keyboard
    window.addEventListener('keydown', playNote)
}

window.addEventListener("load", eventRegister)
