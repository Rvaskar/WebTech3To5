<div id="element" class="class1">Element</div>
{/* <button onclick="toggleClass()">Toggle Class</button> */}
function toggleClass() {
    let element = document.getElementById('element');
    if (element.classList.contains('class1')) {
      element.classList.remove('class1');
      element.classList.add('class2');
    } else {
      element.classList.remove('class2');
      element.classList.add('class1');
    }
  }
  