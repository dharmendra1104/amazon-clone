let toggle = document.getElementById('toggle');
let sign = document.querySelector('.sign');

toggle.addEventListener('click', () => {
    sign.classList.toggle('hide');
    toggle.querySelector('i').classList.toggle('rotate'); 
});
