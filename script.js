function openMainNav() {
  let x = document.getElementById('mainNav');

  switch (x.style.display) {
    case 'block':
      x.style.display = 'none';
      break;
    default:
      x.style.display = 'block';
  }
}