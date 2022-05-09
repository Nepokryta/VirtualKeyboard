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
