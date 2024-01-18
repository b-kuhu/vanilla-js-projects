document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');




    accordionItems.forEach(item => {
        const header = item.querySelector('.question');

        header.addEventListener('click', function () {
            const content = item.querySelector('.answer');
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
            const button = this.querySelector('.accordion-button');
            imgSrc = (content.style.display === 'block') ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
            button.src = imgSrc;
                // Collapse other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.accordion-content').style.display = 'none';
                    otherItem.querySelector('.accordion-button').src = './assets/images/icon-plus.svg';
                }
            });
        });
    });
});
