
let randomColor = () => {
  var colors = ['#B6CCAB', '#FFEEB5', '#D9ECEC', '#B9C8F3', '#FEF7E7', '#F0D9FF', '#F3F1F5', '#B5EAEA'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector('html').style.backgroundColor = random_color;
  return random_color;
}

randomColor();


// http://ahrengot.com/tutorials/greensock-javascript-animation

var $circle = $('.circle');

function moveCircle(e) {

  TweenLite.to($circle, 0, {
    css: {
      left: e.clientX,
      top: e.clientY
    }
  });
}

$(window).on('mousemove', moveCircle);

let invert = () => {
  let count = 0;
  let html = document.querySelector("html");
  let body = document.querySelector("body");
  console.log(html);
  document.getElementById("portfolio").addEventListener("click", () => {
    if (count % 2 == 0) {
      html.style.setProperty("background-color", "black");
      body.style.setProperty("-webkit-filter", "invert(100%)");
    } else {
      html.style.setProperty("background-color", randomColor());
      body.style.removeProperty("-webkit-filter");
    }
    count++;
  });
}

invert();
