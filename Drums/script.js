window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  const classStyle = document.querySelector(`.box[data-key="${e.keyCode}"]`);

  classStyle.addEventListener("transitionend", (e) => {
    classStyle.classList.remove("playing");
  });

  audio.currentTime = 0;
  audio.play();
  classStyle.classList.add("playing");
});
