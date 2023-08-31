
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);

    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();

    
    const key = document.querySelector(`div[data-key="${e.code}"]`);
    key.classList.add('playing');

    const keys = document.querySelectorAll('.key');
    // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    setTimeout(() => {
        keys.forEach(key => key.classList.remove('playing'));
    }, 100);
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
    console.log(e)
}
