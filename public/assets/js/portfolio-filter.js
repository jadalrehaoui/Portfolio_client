'use strict';


//
// var previousClickedMenuLink = $('.portfolio-menu__link--active');
// var portfolioItems = $('.portfolio-cards').children();
// var targetTag = $('.portfolio-menu__link--active').data('portfolio-target-tag');
// portfolioItems.each(function (index, value){
//   var item = $(value);
//   if(item.data('portfolio-tag') == targetTag){
//     item.fadeIn({duration: 500});
//   } else{
//     item.hide();
//   }
// })


var previousClickedMenuLink = undefined;
//Filter project cards
$('.portfolio-menu').on('click', 'a', function(event){
    event.preventDefault();

    if (previousClickedMenuLink) {
        previousClickedMenuLink.removeClass('portfolio-menu__link--active');
        console.log("removed class");
    }

    var link = $(event.target);
    link.addClass('portfolio-menu__link--active');
    previousClickedMenuLink = link;

    var targetTag = $(event.target).data('portfolio-target-tag');
    var portfolioItems = $('.portfolio-cards').children();

    if (targetTag === 'all') {
        portfolioItems.fadeIn({duration: 500});
    } else {
        portfolioItems.hide();
    }

    portfolioItems.each(function(index, value){
        var item = $(value);
        if (item.data('portfolio-tag') === targetTag) {
            item.fadeIn({duration: 500});
        }
    });
});
