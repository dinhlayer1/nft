/**
 * AOS
 */

AOS.init();

/**
 * Open navbar
 */
const openNav = () => {
    $('.nav-mobile').addClass('active');
    $('.overlay').addClass('active');
}
const closeNav = () => {
    $('.nav-mobile').removeClass('active');
    $('.overlay').removeClass('active');
}
$('.nav-open').click(function (e) { 
    openNav();
});

$('.nav-close').click(function (e) { 
    closeNav();
});

$('.overlay').click(function (e) {  
    closeNav();
});

/**
 * open modal
 */

const openModal = () => {
    $('#sign-in').addClass('active');
    $('.wallet').addClass('active');
    $('.bg-overlay').addClass('active');
    $('#banner').addClass('active');
    $('#main').addClass('active');
    $('#footer0').addClass('active');
    $('#hero').addClass('active');
    $('#orbitian').addClass('active');
}

const closeModal  = () => {
    $('#sign-in').removeClass('active');
    $('.wallet').removeClass('active');
    $('.bg-overlay').removeClass('active');
    $('#banner').removeClass('active');
    $('#main').removeClass('active');
    $('#footer0').removeClass('active');
    $('#header').removeClass('active');
    $('#hero').removeClass('active');
    $('#orbitian').removeClass('active');
}
$('#open-modal').click(function (e) { 
    openModal();
    $('.wallet').removeClass('active');
});

$('#open-wallet').click(function(e) {
    openModal();
    $('#sign-in').removeClass('active');
});

$('#open-wallet-mobile').click(function (e) { 
    closeNav();
    openModal();
    $('#sign-in').removeClass('active');
    $('#header').addClass('active')
}); 

$('#open-modal-mobile').click(function (e) { 
    closeNav();
    openModal();
    $('.wallet').removeClass('active');
    $('#header').addClass('active')
});

$('.sign-close').click(function (e) { 
    closeModal();
});

$('.bg-overlay').click(function (e) { 
    closeModal();
});








