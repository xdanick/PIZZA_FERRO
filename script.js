document.addEventListener('DOMContentLoaded', () => {
    const pizzaIcon = document.getElementById('pizza-icon');
    const drinksIcon = document.getElementById('drinks-icon');
    const dessertsIcon = document.getElementById('desserts-icon');
    const menuOverlay = document.getElementById('menuOverlay');
    const pizzaMenu = document.querySelector('.pizza-menu');
    const drinksMenu = document.querySelector('.drinks-menu');
    const dessertsMenu = document.querySelector('.desserts-menu');

    const openMenu = (menu) => {
        menuOverlay.style.display = 'flex';
        menuOverlay.classList.add('show');
        pizzaMenu.style.display = menu === 'pizza' ? 'grid' : 'none';
        drinksMenu.style.display = menu === 'drinks' ? 'grid' : 'none';
        dessertsMenu.style.display = menu === 'desserts' ? 'grid' : 'none';
    };

    const closeMenu = () => {
        menuOverlay.classList.remove('show');
        setTimeout(() => {
            menuOverlay.style.display = 'none';
        }, 500); // Время должно совпадать с длительностью анимации
    };

    pizzaIcon.addEventListener('click', () => {
        openMenu('pizza');
    });

    drinksIcon.addEventListener('click', () => {
        openMenu('drinks');
    });

    dessertsIcon.addEventListener('click', () => {
        openMenu('desserts');
    });

    document.querySelector('.closeButton').addEventListener('click', closeMenu);

    window.addEventListener('click', (event) => {
        if (event.target === menuOverlay) {
            closeMenu();
        }
    });
});

// animaition

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a'); // Все ссылки на странице

    // При клике на ссылку
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Отключаем стандартное поведение ссылки
            const href = link.getAttribute('href'); // Получаем ссылку

            // Анимируем исчезновение текущей страницы
            document.body.classList.add('fade-out');

            // После завершения анимации перезагружаем страницу
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Время анимации должно совпадать с CSS-переходом
        });
    });

    // Плавное появление страницы после загрузки
    document.body.classList.add('fade-in');
});


document.addEventListener("DOMContentLoaded", function () {
    const mascot = document.getElementById('mascot');
    const mascotMessage = document.getElementById('mascotMessage');
    
    // Маскот появляется с низу через 1 секунду
    setTimeout(function () {
        mascot.classList.add('show');
    }, 1000);

    // В зависимости от страницы меняем сообщение маскота
    const currentPage = window.location.pathname;
    if (currentPage.includes('menu.html')) {
        mascotMessage.innerText = 'Добро пожаловать в меню!';
    } else if (currentPage.includes('contact.html')) {
        mascotMessage.innerText = 'Свяжитесь с нами!';
    }

    // Через 5 секунд убираем маскота
    setTimeout(function () {
        mascot.classList.remove('show');
    }, ); // Маскот исчезает через 8 секунд
});


document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById('text');
    const message = 'Try our pizza'; 
    let index = 0;

    function typeWriter() {
        if (index < message.length) {
            textElement.innerHTML += message.charAt(index); 
            index++;
            setTimeout(typeWriter, 150); 
        }
    }

    setTimeout(typeWriter, 3000);
});

