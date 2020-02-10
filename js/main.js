document.addEventListener('DOMContentLoaded', function(){
    
    
    // SLider
    
    let arrows = document.querySelectorAll(".js-arrows");
    
     function initialSlider() {
        for(var i = 0;arrows.length > i; i++) {
            let slider = arrows[i].closest(".slider");
            let arrowNext = arrows[i].querySelector('.next');
            let arrowPrev = arrows[i].querySelector('.prev');
            
            arrowNext.addEventListener('click', function() {
                let itemShow = slider.querySelector('.js-slider-item.show');
                let dotActive = slider.querySelector('.main-slider-dot.active');
                
                
                if(slider.querySelector('.js-slider-item.show').nextElementSibling == null) {
                    return;
                }
                
                if(dotActive != null) {
                    dotActive.nextElementSibling.classList.add('active');
                    dotActive.classList.remove('active');
                }
                
                arrowPrev.classList.remove('disabled');
                
                itemShow.nextElementSibling.classList.add('show');
                itemShow.classList.remove('show');
                
                if(slider.querySelector('.js-slider-item.show').nextElementSibling == null) {
                    arrowNext.classList.add('disabled');
                }
            });
            
            arrowPrev.addEventListener('click', function() {
                let itemShow = slider.querySelector('.js-slider-item.show');
                let dotActive = slider.querySelector('.main-slider-dot.active');
                
                if(slider.querySelector('.js-slider-item.show').previousElementSibling == null) {
                    return;
                }
                
                if(dotActive != null) {
                    dotActive.previousElementSibling.classList.add('active');
                    dotActive.classList.remove('active');
                }
                
                 
                arrowNext.classList.remove('disabled');
                
                itemShow.previousElementSibling.classList.add('show');
                itemShow.classList.remove('show');
                
                if(slider.querySelector('.js-slider-item.show').previousElementSibling == null) {
                    arrowPrev.classList.add('disabled');
                }
            });

            var startPointX;
            var startPointY;
            slider.addEventListener("touchstart", function(event) {
                startPointX = event.changedTouches[0].screenX;
                startPointY = event.changedTouches[0].screenY;
            }, false);
            slider.addEventListener("touchend", function(event){
                var endPointX = event.changedTouches[0].screenX;
                var endPointY = event.changedTouches[0].screenY;
                
                if(startPointX - endPointX > 40) {
                    arrowNext.click();
                } else if(endPointX - startPointX > 40) {
                    arrowPrev.click();
                }
            }, false);
        }
    }
    
    initialSlider();
    
    document.addEventListener('click', function(e){
        let elem = e.target;
        
        if(elem.closest('.js-dot')) {
            document.querySelectorAll('.js-dot').forEach(function(item){
                item.classList.remove('active');
            });
            
            let productItem = document.querySelectorAll('.main-slider__item')
            productItem.forEach(function(item){
                item.classList.remove('show');
            });
            
            let buttonPrev = document.querySelector('.main-slider-buttons__wrapper .prev');
            let buttonNext = document.querySelector('.main-slider-buttons__wrapper .next');
            
            buttonPrev.classList.remove('disabled');
            let index = elem.getAttribute('data-index');
            
            if(index == 1) {
                buttonPrev.classList.add('disabled');
                buttonNext.classList.remove('disabled');
            }
            
            if(index == productItem.length) {
                buttonNext.classList.add('disabled');
                buttonPrev.classList.remove('disabled');
            }
            
            document.querySelector('.main-slider__item[data-index= "'+ index + '"]').classList.add('show');
            elem.classList.add('active');
        }
    });
    
    // /SLider
    
    // Infinity slider 

    var arrowsInfinity = document.querySelectorAll('.js-arrow-infinity')

    function initialSliderInfinity() {
        for(var i = 0;arrowsInfinity.length > i; i++) {
            let slider = arrowsInfinity[i].closest(".slider-infinity");
            let arrowNext = arrowsInfinity[i].querySelector('.next');
            let arrowPrev = arrowsInfinity[i].querySelector('.prev');
            let sliderList = slider.querySelector('.js-slider-list');
            
            arrowNext.addEventListener('click', function() {
                let itemShow = slider.querySelector('.js-slider-item-infinity.show');
                
                itemShow.nextElementSibling.classList.add('show');
                itemShow.classList.remove('show');
                
                setTimeout(function(){
                    let newElem = itemShow;
                    itemShow.remove();
                    sliderList.append(newElem);
                },750);
                
            });
            
            arrowPrev.addEventListener('click', function() {
                let itemShow = slider.querySelector('.js-slider-item-infinity.show');
                let lastElem = sliderList.lastElementChild;
                
                sliderList.prepend(lastElem);
                
                setTimeout(function(){
                    itemShow.previousElementSibling.classList.add('show');
                    itemShow.classList.remove('show');
                },20);
            });
            
            var startPointX;
            var startPointY;
            slider.addEventListener("touchstart", function(event) {
                startPointX = event.changedTouches[0].screenX;
                startPointY = event.changedTouches[0].screenY;
            }, false);
            slider.addEventListener("touchend", function(event){
                var endPointX = event.changedTouches[0].screenX;
                var endPointY = event.changedTouches[0].screenY;
                
                if(startPointX - endPointX > 40) {
                    arrowNext.click();
                } else if(endPointX - startPointX > 40) {
                    arrowPrev.click();
                }
            }, false);
        }
    }
    initialSliderInfinity();
    
    // Show more info
    
    
    let moreInfo = document.querySelectorAll('.js-more');
    let allItem = document.querySelectorAll('.js-more-item');
    
    moreInfo.forEach((item) => {
        item.addEventListener('click', function(ev){
            if(item.closest('.js-more-item').classList.contains("active")) {
                item.closest('.js-more-item').classList.remove('active');
            }else {
                allItem.forEach((item) => {
                    item.classList.remove('active');
                });
                
                item.closest('.js-more-item').classList.add('active');
            }
        });
    });
    
    // /Show more info
    
    // Scroll block
    
    let wrapperScroll = document.querySelectorAll('.product-more__wrapper .wrapper');
    let listScroll = document.querySelectorAll('.product-more__list');
    
    for(var i = 0;wrapperScroll.length > i; i++) {
        if(wrapperScroll[i].offsetHeight < listScroll[i].offsetHeight) {
            wrapperScroll[i].closest('.product-more__wrapper').classList.add('active');
        }
    }
    
    // /Scroll block
    
    // Our partner slider
    
    let partnerButtonPrev = document.querySelector('.our-partners__button .prev');
    let partnerButtonNext = document.querySelector('.our-partners__button .next');
    let partnerList = document.querySelector(".our-partners__list");
    let partnerItem = document.querySelectorAll(".our-partners__item").length;
    let itemMargin = 0;
    let itemStep = 0;
    
    if(window.innerWidth > 768) {
        itemMargin = 30;
        itemStep = 7;
    }else {
        itemMargin = 20;
        itemStep = 3;
    }
    
    partnerButtonPrev.addEventListener('click', function(){
        let widthItem = this.closest('.our-partners__wrapper').querySelector('.our-partners__item').offsetWidth;
        
        partnerList.scrollLeft -= widthItem + itemMargin;
        
        partnerButtonNext.classList.remove('disabled');
        
        if(partnerList.scrollLeft <= widthItem + itemMargin) {
            this.classList.add('disabled');
        }
        
    });

    partnerButtonNext.addEventListener('click', function(){
        let widthItem = this.closest('.our-partners__wrapper').querySelector('.our-partners__item').offsetWidth;
        
        if(partnerList.scrollLeft == (partnerItem - itemStep) * (widthItem + itemMargin)) {
            this.classList.add('disabled');
        }
        
        partnerButtonPrev.classList.remove('disabled');
        
        partnerList.scrollLeft += widthItem + itemMargin;
        
        
    });
});