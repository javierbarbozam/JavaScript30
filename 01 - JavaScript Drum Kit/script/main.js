window.addEventListener('keydown', event => {
	const audio = document.querySelector(`audio[data-key="${event.code}"]`)
	if (audio) {
		audio.currentTime = 0;
		audio.play()
	}
})