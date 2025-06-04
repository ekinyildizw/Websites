document.querySelectorAll('.devamini-oku').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const kart = link.closest('.kart');
    kart.classList.add('dondurulmus');
  });
});

document.querySelectorAll('.geri-don').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const kart = link.closest('.kart');
    kart.classList.remove('dondurulmus');
  });
});

