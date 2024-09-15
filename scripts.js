document.addEventListener("DOMContentLoaded", function () {
    const mascot = document.getElementById('mascot');
    const mascotMessage = document.getElementById('mascotMessage');
    
    // Маскот появляется с низу через 1 секунду
    setTimeout(function () {
        mascot.classList.add('show');
    }, 1000);

    document.getElementById('text').classList.add('visible');
        
});

document.addEventListener("DOMContentLoaded", function () {
const textElement = document.getElementById('text');
const textElement1 = document.getElementById('text1');
const message = 'IF YOU HAVE SOME PROBLEMS'; 
const message_one = 'OR WANNA TO ORDER JUST CALL US';
let index = 0;
let index1 = 0;  // Отдельный индекс для второго текста

// Функция для первой строки
function typeWriter() {
    if (index < message.length) {
        textElement.innerHTML += message.charAt(index); 
        index++;
        setTimeout(typeWriter, 150); 
    }
}

// Функция для второй строки
function typeWriter1() {
    if (index1 < message_one.length) {
        textElement1.innerHTML += message_one.charAt(index1); 
        index1++;
        setTimeout(typeWriter1, 150); 
    }
}

// Запуск анимации с задержкой
setTimeout(typeWriter, 3000);
setTimeout(typeWriter1, 6900);
});

