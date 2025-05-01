



window.onload = function() {
  const numButterflies = 20; // Número de mariposas
  const body = document.body;
  // URLs de los GIFs (reemplaza con las tuyas)
  const butterflyLeftToRight = [
    './assets/img/mariposas/mariposa.gif', // GIF 1 izquierda-derecha
    './assets/img/mariposas/mariposa3.gif' // GIF 2 izquierda-derecha
  ];
  const butterflyRightToLeft = [
    './assets/img/mariposas/mariposa2.gif', // GIF 1 derecha-izquierda
    './assets/img/mariposas/mariposa4.gif' // GIF 2 derecha-izquierda
  ];

  for (let i = 0; i < numButterflies; i++) {
    const butterfly = document.createElement('div');
    butterfly.classList.add('butterfly', i % 2 === 0 ? 'butterfly-even' : 'butterfly-odd');
    
    // Crear elemento img para el GIF
    const img = document.createElement('img');
    // Elegir aleatoriamente un GIF según la dirección
    img.src = i % 2 === 0 
      ? butterflyRightToLeft[Math.floor(Math.random() * butterflyRightToLeft.length)]
      : butterflyLeftToRight[Math.floor(Math.random() * butterflyLeftToRight.length)];
    img.alt = 'Mariposa';
    butterfly.appendChild(img);
    
    // Posición inicial aleatoria
    butterfly.style.left = Math.random() * window.innerWidth + 'px';
    butterfly.style.top = Math.random() * window.innerHeight + 'px';
    
    // Retraso aleatorio para la aparición
    butterfly.style.animationDelay = Math.random() * 2 + 's';
    
    body.appendChild(butterfly);
    
    // Remover la mariposa después de que termine su animación
    setTimeout(() => {
      butterfly.remove();
    }, 10000); // 10 segundos, ajusta según necesites
  }
};