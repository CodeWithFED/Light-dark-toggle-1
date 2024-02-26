let btn = document.querySelector('.toggler');
let theme = 'dark';
btn.addEventListener('click', () => {
    let bg = document.body.classList.toggle('bg--light');
    let animation_2 = document.body.classList.toggle('animation_2');
    let animation = btn.classList.toggle('animation_1');
    if (theme == 'dark') {
        btn.innerText = 'light_mode';
        theme = 'light';
    }
    else {
        btn.innerText = 'dark_mode'
        theme = 'dark'
    }

})