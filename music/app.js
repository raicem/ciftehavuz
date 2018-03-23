const boxes = document.querySelectorAll(".box");

console.log(boxes);

var firstSong = new Howl({
  src: ["music/test.mp3"]
});

var secondSong = new Howl({
  src: ["music/test2.mp3"]
});

boxes.forEach(function(item) {
  item.addEventListener("mouseover", function(e) {
    var hoveredId = e.target.getAttribute("data-target");
    if (hoveredId == 0) {
      window.playing = firstSong.play();
    } else if (hoveredId == 1) {
      window.playing = secondSong.play();
    }
  });

  item.addEventListener("mouseleave", function(e) {
    var hoveredId = e.target.getAttribute("data-target");
    if (hoveredId == 0) {
      firstSong.stop(window.playing);
    } else if (hoveredId == 1) {
      secondSong.stop(window.playing);
    }
  });
});
