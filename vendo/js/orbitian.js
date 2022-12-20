/**
 * Clock Count Down
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

    const hoursTd = document.getElementsByClassName('hours');
    const minutesTd = document.getElementsByClassName('minutes');
    const secondsTd = document.getElementsByClassName('seconds');
    for(const hour of hoursTd) {
        hour.innerHTML = timeHours;
    }
    for(const minute of minutesTd) {
        minute.innerHTML = timeMinutes;
    }
    for(const second of secondsTd) {
        second.innerHTML = timeSeconds;
    }
}

setInterval(countdow, 1000);

