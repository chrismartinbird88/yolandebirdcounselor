// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

//tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('mouseover', () => {
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active')

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if(box.getAttribute('id') === target){
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        })
    })
})

// anxiety modal
const anxietyButton = document.querySelector('#anxiety');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

anxietyButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

// ptsd modal
const ptsdButton = document.querySelector('#ptsd');
const modalBg2 = document.querySelector('.modal-background2');
const modal2 = document.querySelector('.ptsdModal');

ptsdButton.addEventListener('click', () => {
    modal2.classList.add('is-active');
});

modalBg2.addEventListener('click', () => {
    modal2.classList.remove('is-active');
});

// stress modal
const stressButton = document.querySelector('#stress');
const modalBg3 = document.querySelector('.modal-background3');
const modal3 = document.querySelector('.stressModal');

stressButton.addEventListener('click', () => {
    modal3.classList.add('is-active');
});

modalBg3.addEventListener('click', () => {
    modal3.classList.remove('is-active');
});

// relationship-issues modal
const relationshipButton = document.querySelector('#relationship');
const modalBg4 = document.querySelector('.modal-background4');
const modal4 = document.querySelector('.relationshipModal');

relationshipButton.addEventListener('click', () => {
    modal4.classList.add('is-active');
});

modalBg4.addEventListener('click', () => {
    modal4.classList.remove('is-active');
});

// trauma modal
const traumaButton = document.querySelector('#trauma');
const modalBg5 = document.querySelector('.modal-background5');
const modal5 = document.querySelector('.traumaModal');

traumaButton.addEventListener('click', () => {
    modal5.classList.add('is-active');
});

modalBg5.addEventListener('click', () => {
    modal5.classList.remove('is-active');
});

// trauma modal
const depressionButton = document.querySelector('#depression');
const modalBg6 = document.querySelector('.modal-background6');
const modal6 = document.querySelector('.depressionModal');

depressionButton.addEventListener('click', () => {
    modal6.classList.add('is-active');
});

modalBg6.addEventListener('click', () => {
    modal6.classList.remove('is-active');
});