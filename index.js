const defaultColors = [
  [172, 15, 15],
  [222, 119, 17],
  [215, 223, 18],
  [104, 222, 18],
  [17, 222, 109],
  [17, 196, 222],
  [17, 41, 223],
  [118, 18, 224],
  [223, 17, 181],
];

const allColors = [
  [172, 15, 15],
  [222, 119, 17],
  [215, 223, 18],
  [104, 222, 18],
  [17, 222, 109],
  [17, 196, 222],
  [17, 41, 223],
  [118, 18, 224],
  [223, 17, 181]
];

var squares = document.querySelectorAll(".square");
for (var i = 0; i < allColors.length; i++) {
  squares[i].style.background = "rgb(" + defaultColors[i] + ")";
}

var sortIndex = 0;
//reset button
document.querySelector("#reset").addEventListener("click", function () {
  var squares = document.querySelectorAll(".square");
  for (var i = 0; i < allColors.length; i++) {
    squares[i].style.background = "rgb(" + defaultColors[i] + ")";
    squares[i].textContent = "";
  }
});

//sort red
var toggle = true;
document.querySelector("#red").addEventListener("click", function () {
    sortIndex = 0;
    changeColors();
});

//sort green
document.querySelector("#green").addEventListener("click", function () {
    sortIndex = 1;
    changeColors();
});

//sort blue
document.querySelector("#blue").addEventListener("click", function () {
  sortIndex = 2;
  changeColors();
});

//methods
function changeColors() {
  if (toggle == true) {
    var sort = allColors.sort(sortdesc);
    var squares = document.querySelectorAll(".square");
    for (var i = 0; i < allColors.length; i++) {
      squares[i].style.background = "rgb(" + sort[i] + ")";
      squares[i].textContent = sort[i][sortIndex];
    }
    toggle = false;
    console.log(allColors);
  } else if (toggle == false) {
    var sort = allColors.sort(sortAsc);
    var squares = document.querySelectorAll(".square");
    for (var i = 0; i < allColors.length; i++) {
      squares[i].style.background = "rgb(" + sort[i] + ")";
      squares[i].textContent = sort[i][sortIndex];
    }
    toggle = true;
  }
}

function sortAsc(a, b) {
  var i = sortIndex;
  if (a[i] === b[i]) {
    return 0;
  } else {
    return a[i] < b[i] ? -1 : 1;
  }
}

function sortdesc(a, b) {
  var i = sortIndex;
  if (a[i] === b[i]) {
    return 0;
  } else {
    return a[i] > b[i] ? -1 : 1;
  }
}
