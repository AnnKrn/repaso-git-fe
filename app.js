function readFile() {
  if (events.files && this.files[0]) {
    var newImages = new FileReader();
    newImages.addEventListener("load", paintImage);
    newImages.readAsDataURL(this.files[0]);
  }
}
function paintImage(e) {
  var realTimeImage = document.getElementById("real-time-image");
  realTimeImage.src = e.target.result;
  // console.log(e.target);
}

// pintar comentio en publicaciones
function printComments (){
  var text = getTextPreview();
  var publishComment = text.parentNode.cloneNode(true);
  console.log(text.parentNode);
  commentedPost.insertBefore(publishComment, commentedPost.firstChild);
  area.value = " ";
  text.removeAttribute("style");
  text.innerText = " ";
  // document.getElementById("real-time-image").removeAttribute("src");
}
