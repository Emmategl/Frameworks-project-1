function updatePrice(container, n) {
    //container -> each one of the $('.cd-gallery').children('li')
    //n -> index of the selected item in the .cd-item-wrapper
    var priceTag = container.find('.cd-price'),
        selectedItem = container.find('.cd-item-wrapper li').eq(n);
    if( selectedItem.data('sale') ) { 
       // if item is on sale - cross old price and add new one
       priceTag.addClass('on-sale');
       var newPriceTag = ( priceTag.next('.cd-new-price').length > 0 ) ? priceTag.next('.cd-new-price') : $('<em class="cd-new-price"></em>').insertAfter(priceTag);
       newPriceTag.text(selectedItem.data('price'));
       setTimeout(function(){ newPriceTag.addClass('is-visible'); }, 100);
    } else {
       // if item is not on sale - remove cross on old price and sale price
       priceTag.removeClass('on-sale').next('.cd-new-price').removeClass('is-visible').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          priceTag.next('.cd-new-price').remove();
       });
    }
 }