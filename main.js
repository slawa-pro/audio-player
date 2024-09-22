// Получаем все элементы меню
const menuLinks = document.querySelectorAll('.menu-link');
const menuImages = document.querySelectorAll('.slider-img'); // Изображения с классом 'slider-img'

// Добавляем обработчики клика для каждой ссылки
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке

        // Получаем имя изображения из атрибута data-img
        const imgSrc = link.getAttribute('data-img');

        // Скрываем все изображения
        menuImages.forEach(img => {
            img.style.display = 'none'; // Или img.classList.add('hidden') если есть класс hidden
        });

        // Показываем изображение, соответствующее выбранной ссылке
        const currentImg = document.querySelector(`#img${imgSrc.charAt(0)}`);
        if (currentImg) {
            currentImg.style.display = 'block'; // Или currentImg.classList.remove('hidden')
        }
    });
});

// Изначально скрываем все изображения
menuImages.forEach(img => {
    img.style.display = 'none';
});

// Показываем первое изображение по умолчанию
document.querySelector('#img1').style.display = 'block'; // По умолчанию показываем первое изображение




