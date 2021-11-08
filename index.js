
let randomColor = () => {
  var colors = ['#B6CCAB', '#FFEEB5', '#D9ECEC', '#B9C8F3', '#FEF7E7', '#F0D9FF', '#F3F1F5', '#B5EAEA'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector('html').style.backgroundColor = random_color;
}
 
randomColor();