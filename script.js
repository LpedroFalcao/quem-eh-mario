const mario = document.querySelector('.Qmario')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {mario.classList.remove('jump')},500)
}

document.addEventListener('keydown',jump);