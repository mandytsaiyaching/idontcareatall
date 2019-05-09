var count = 0;
function countClicks(number) {
  count = Math.round(count)+1;//= count+1;//count++;
  var display = document.querySelector("#display");
  display.textContent = count;
}

var button = document.getElementById("counter");//#
button.addEventListener("click", countClicks);
//button.addEventListener("click",undefine);


