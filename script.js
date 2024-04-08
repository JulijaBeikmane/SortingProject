let izveletaisattels
let izlietotaspildes = 0;
let iespejas = 10;

function randomimages() {
  let images = document.querySelectorAll('#trashmf img');
  let random = Math.floor(Math.random() * images.length);
  
  images.forEach(function(img) {
      img.style.display = 'none';
  });
  
  images[random].style.display = 'block';
}

window.onload = randomimages;

function nakamafoto() {
    if ( izlietotaspildes < 10) {
      randomimages()
      izlietotaspildes++;
    } else {
        alert('Spēle beigusies!');
    }
}

function parbaudittvertnes(izveletaisattels) {
  let pareizatauka;
  switch (izveletaisattels) {
      case 'plastmasa':
          pareizatauka = 'plastmasa';
          break;
      case 'papirs':
          pareizatauka = 'papirs';
          break;
      case 'stikls':
          pareizatauka = 'stikls';
          break;
      default:
          return;
  }

let redzamaisattels = document.querySelector('#trashmf img[style="display: block;"]');
if (redzamaisattels && redzamaisattels.alt === pareizatauka) {
  nakamafoto();
} else {
  iespejas--;
  if (iespejas === 0) {
      alert('Jūsu iespēju skaits beidzies!');
      return;
  }
  alert('Nepareiza kaste. Vēl palikušas ' + iespejas + ' iespējas.');
}

}
document.getElementById('plastmasa').addEventListener('click', () => {
  parbaudittvertnes('plastmasa');
});

document.getElementById('papirs').addEventListener('click', () => {
  parbaudittvertnes('papirs');
});

document.getElementById('stikls').addEventListener('click', () => {
  parbaudittvertnes('stikls');
});
