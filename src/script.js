let key = document.querySelectorAll('.key');
let spaceKey = document.querySelectorAll('.space');
let shift_left = document.querySelectorAll('.shift_left');
let shift_right = document.querySelectorAll('.shift_right');
let caps_lock_key = document.querySelectorAll('.caps_lock');
let body = document.querySelector('body');
let text_input = document.querySelectorAll('.text');

for(let i = 0; i < key.length; i++) {
    key[i].setAttribute('keyname', key[i].innerText);
    key[i].setAttribute('loverCaseName', key[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(e){ 
    for(let i = 0; i < key.length; i++) {
        if(e.keys == key[i].getAttribute('keyname') || e.keys == key[i].getAttribute('lowerCaseName')) {
            key[i].classList.add('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
        }
        if(e.code == 'CapsLock') {
            caps_lock_key.classList.toggle('active')
        }
    }
})


window.addEventListener('keyup', function(e) {
    for(let i = 0; i < key.length; i++) {
        if(e.keys == key[i].getAttribute('keyname') || e.keys == key[i].getAttribute('lowerCaseName')) {
            key[i].classList.remove('active')
            key[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shift_right[i].classList.remove('active')
            shift_right[i].classList.remove('remove')
        }
        if(e.code == 'ShiftRight') {
            shift_left[i].classList.remove('active')
            shift_left[i].classList.remove('remove')
        }
        setTimeout(() => {
            key[i].classList.remove('remove')
        },200)
    }
})


