window.onload = function () {
  const burger = document.getElementById('burger');
  const navList = document.getElementById('nav-list');

  burger.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}

function addLinesToContainer(linesArray, container) {
  linesArray.forEach((line, index) => {
      const lineElement = document.createElement('div');
      lineElement.className = 'line-table';

      const lineNumber = document.createElement('div');
      lineNumber.className = 'line-table-number';
      lineNumber.textContent = index + 1;
      const lineText = document.createElement('div');
      lineText.className = 'line-table-text';
      lineText.textContent = line;

      lineElement.appendChild(lineNumber);
      lineElement.appendChild(lineText);
      container.appendChild(lineElement);
  });
}