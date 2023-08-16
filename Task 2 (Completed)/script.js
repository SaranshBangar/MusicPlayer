document.addEventListener("DOMContentLoaded", () => 
{
    const audio = new Audio();
    const songSelector = document.getElementById("song-selector");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const skipBackBtn = document.getElementById("skip-back-btn");
    const skipBtn = document.getElementById("skip-btn");
    const songDurationLabel = document.getElementById("song-duration-label");
  
    let isPlaying = false;
  
    function togglePlayPause() 
    {
      if (isPlaying) 
      {
        audio.pause();
        playPauseBtn.textContent = "Play";
      } 
      else 
      {
        audio.play();
        playPauseBtn.textContent = "Pause";
      }
      isPlaying = !isPlaying;
    }
  
    function skipBack() 
    {
      audio.currentTime -= 10;
    }
  
    function skip() 
    {
      audio.currentTime += 10;
    }
  
    function updateTimer() 
    {
      const minutes = Math.floor(audio.currentTime / 60);
      const seconds = Math.floor(audio.currentTime % 60);
      songDurationLabel.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
  
    playPauseBtn.addEventListener("click", togglePlayPause);
  
    skipBackBtn.addEventListener("click", skipBack);
  
    skipBtn.addEventListener("click", skip);
  
    songSelector.addEventListener("change", () => 
    {
      audio.src = songSelector.value;
      audio.currentTime = 0;
      togglePlayPause();
    });
  
    audio.addEventListener("timeupdate", updateTimer);
  
    audio.addEventListener("ended", () => 
    {
      playPauseBtn.textContent = "Play";
      isPlaying = false;
    });
});
  