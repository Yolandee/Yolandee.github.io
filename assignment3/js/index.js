/* Picture switch window */
var Num=1;
  function rotatePhoto()
  {
  if(++Num>2)
  Num=1;
  document.getElementById("banner").src="images/banner"+Num+".jpg";
  window.setTimeout("rotatePhoto()", 3000);
  }
  window.onload=function(){
 rotatePhoto()
}