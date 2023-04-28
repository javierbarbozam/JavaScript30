window.addEventListener('keydown', event => {
  const audio = document.querySelector(`audio[data-key="${event.code}"]`)
  // Plays if there is a code linked to an audio element
  if (audio) {
    audio.currentTime = 0; // makes the audio restart every time the key is pressed
    audio.play()
    keyStyle(event.code)
  }
})

const keyStyle = (value) => {
  const keys = document.querySelectorAll('.key-item')
  // Style the pressed key
  keys.forEach(key => {
    if (value === key.attributes[0].value){
      key.classList.add('key-item--play');
      key.addEventListener('transitionend', removeTransition)
    }
  })
}

function removeTransition () {
  this.classList.remove('key-item--play')
}