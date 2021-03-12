const toggleContents = function(e) {
  const vector = e.target;
  const content = vector.nextElementSibling;
  if(content) {
    content.classList.toggle("hidden");
    vector.classList.toggle("downside");
  }
  
};

document.addEventListener("DOMContentLoaded", (e) => {
  console.log('hola')

  const vectors = document.getElementsByClassName("vector");
  for (const vector of vectors) {
    vector.addEventListener("click", toggleContents);
  }
});
