/**
 * Tab menu & Load more
 */
 jQuery(document).ready(function($){

    var $container = $('.maketplace-row');
    $container.isotope({
        itemSelector: '.col-lg-4',
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.maketplace-filter ul li').click(function(){
        $('.maketplace-filter ul li.active').removeClass('active');
        $(this).addClass('active');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
    });
    
            //****************************
            // Isotope Load more button
            //****************************
             
    var initShow = 6; //number of images loaded on init & onclick load more button
    var counter = initShow; //counter for load more button
    var iso = $container.data('isotope'); // get Isotope instance
    // console.log(iso.elemCount);
        
    loadMore(initShow); //execute function onload
    
    function loadMore(toShow) {
        
        $container.find(".hidden").removeClass("hidden");
        
        var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
            // console.log(item.element);
        return item.element;
        });
        $(hiddenElems).addClass('hidden');
        $container.isotope('layout');
        
        //when no more to load, hide show more button
        if (hiddenElems.length == 0) {
        $(".load-more").hide();
        } 
        else {
        $(".load-more").show();
        };        
    }

    //append load more button
    $container.after('<div class="load-more"><a href="#" id="load-more">See More</a></div>');
            
    //when load more button clicked
     $(document).on("click", ".load-more", function(e) {
        e.preventDefault();
        
        if ($('#filters').data('clicked')) {
        //when filter button clicked, set initial value for counter
            counter = initShow;
            j$('#filters').data('clicked', false);
        } 
        else {
            counter = counter;
        };
        
        counter = counter + initShow;
        
        loadMore(counter);
    });
})

/**
 * Count item
 */

 $(document).ready(function () {
    $('.maketplace-filter ul li:nth-child(1) span').html($('.maketplace-row .col-lg-4').length)
    $('.maketplace-filter ul li:nth-child(2) span').html($('.maketplace-row .maketplace-nfts').length)
    $('.maketplace-filter ul li:nth-child(3) span').html($('.maketplace-row .maketplace-collections').length)
});