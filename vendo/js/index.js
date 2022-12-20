/**
 * SWIPER
 */
var swiper = new Swiper(".collection-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        998:{
            slidesPerView: 3,
        },
    },
});

/**
 * Clock countdown
 */

const countdow  = () => {
    const endDate = new Date('December 31 , 2099 23:59:59').getTime();
    const now = new Date().getTime();
    const difference = endDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    
    let timeDays = Math.floor(difference / days);
    let timeHours = Math.floor((difference % days) / hours); 
    let timeMinutes = Math.floor((difference % hours) / minutes);
    let timeSeconds = Math.floor((difference % minutes) / seconds);

    timeHours = timeHours < 10 ? '0' + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? '0' + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? '0' + timeSeconds : timeSeconds;

    document.getElementById('hours').innerHTML = timeHours;
    document.getElementById('minutes').innerHTML = timeMinutes;
    document.getElementById('seconds').innerHTML = timeSeconds;
}

setInterval(countdow, 1000);