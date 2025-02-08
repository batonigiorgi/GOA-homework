document.querySelectorAll('.first, .second, .third').forEach((container) => {
    const image = container.querySelector('.film-image');
    const info = container.querySelector('.film-info');

    container.addEventListener('mouseover', () => {
        image.style.transform = 'translateX(350px)';
        image.style.transition = 'transform 0.5s ease';
        info.style.opacity = '1';
        info.style.transition = 'opacity 0.5s ease';
    });

    container.addEventListener('mouseout', () => {
        image.style.transform = 'translateX(0)';
        info.style.opacity = '0';
    });
});
