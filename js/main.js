document.addEventListener('DOMContentLoaded', function(){
    
    // Burger 
    
    let burgerButton = document.querySelector('.burger-button');
    let burgerMenu = document.querySelector('.burger-menu');
    let dropItem = document.querySelector('.header__list .header-mobile__item')
    
    burgerButton.addEventListener('click', function(){
        this.classList.toggle('active');
        burgerMenu.classList.toggle("active");
    });
    
    document.querySelector('main').addEventListener('click', function(e){
        burgerButton.classList.remove('active');
        burgerMenu.classList.remove("active");
    });
    
    dropItem.addEventListener('click', function(e){
        burgerButton.classList.remove('active');
        burgerMenu.classList.remove("active");
    });
    
    
    // /Burger
    
    // Header mobile 
    
    
    let headerMore = document.querySelectorAll('.header .drop-item');
    let headerAllItem = document.querySelectorAll('.header-sub__list');

    headerMore.forEach((item) => {
        item.addEventListener('click', function(ev){
            if(item.classList.contains("active")) {
                item.classList.remove('active');
            }else {
                headerMore.forEach((item) => {
                    item.classList.remove('active');
                });
                
                item.classList.add('active');
            }
        });
    });
    
    document.addEventListener('click', function(e){
        let item = e.target;

        if(!item.closest('.drop-item')) {
            headerMore.forEach((item) => {
                item.classList.remove('active');
            });
        }
    });
    
    // SLider
    
    let arrows = document.querySelectorAll(".js-arrows");
    
     function initialSlider() {
        for(var i = 0;arrows.length > i; i++) {
            let slider = arrows[i].closest(".slider");
            let arrowNext = arrows[i].querySelector('.next');
            let arrowPrev = arrows[i].querySelector('.prev');
            let allItems = slider.querySelectorAll('.js-slider-item').length;
            
            if(allItems < 2) {
                arrowNext.classList.add("disabled");
            }
            
            arrowNext.addEventListener('click', function() {
                let itemShow = slider.querySelector('.js-slider-item.show');
                
                if(slider.querySelector('.js-slider-item.show').nextElementSibling == null) {
                    return;
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
                
                if(slider.querySelector('.js-slider-item.show').previousElementSibling == null) {
                    return;
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
    
    // Catalog open
    
    let catalogButton = document.querySelectorAll(".catalog__button");
    let catalogItem = document.querySelectorAll(".catalog__wrapper-item");
    
    catalogButton.forEach((item) => {
        item.addEventListener('click', function(){
            catalogItem.forEach((item) => {
                item.classList.remove('active');
            });
            
            item.closest(".catalog__wrapper-item").classList.add("active");
        });
    });
    
    // /Catalog open
    
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
    
    if(partnerButtonPrev !== null) {
    
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
    }
    
    // /Our partner slider
    
    // Popup
    
    let mainButton = document.querySelectorAll('.js-button');
    let overlay = document.querySelector('.overlay');
    let htmlOverflow = document.querySelector('html');
    
    for(var i = 0; mainButton.length > i; i++) {
        if(mainButton[i] !== null) {
            
            mainButton[i].addEventListener('click', function(){
                let getData = this.getAttribute('data-target');
                let popup = document.querySelector('.popup[data-target = ' + getData + ']');
                popup.classList.add('active');
                overlay.classList.add('active');
                htmlOverflow.classList.add('overflow')
            });
        }
    }
    
    document.addEventListener('click', function(e){
        let elem = e.target;
        
        if(elem.closest('.js-close')){
            let popupActive = document.querySelector('.popup.active');
            if(popupActive) {
                popupActive.classList.remove('active');
                overlay.classList.remove('active');
                htmlOverflow.classList.remove('overflow');
            }
        }
    });
    
    if(overlay != null) {
        overlay.addEventListener('click', function(){
            let popupActive = document.querySelector('.popup.active');
            popupActive.classList.remove('active');
            overlay.classList.remove('active');
            htmlOverflow.classList.remove('overflow');
        });
    }
   
    // /Popup
    
    // More info
        
    function showMoreInfo() {
            
        let info = document.querySelectorAll('.js-item .content p');
        let content = document.querySelectorAll('.js-item .content');
        let moreButton = document.querySelectorAll('.js-item .more_info');
        
        if(info) {
            for(var i = 0; info.length > i; i++) {
                if(info[i].offsetHeight > content[i].offsetHeight) {
                    moreButton[i].classList.add('show');
                }else {
                    moreButton[i].classList.remove('show');
                }
            }
        }
    }
        
    showMoreInfo();
    
    window.addEventListener('resize', function(){
        showMoreInfo();
    });
    
    let moreInfoItem = document.querySelectorAll('.js-more-info');
    
    for(var i = 0; moreInfoItem.length > i; i++) {
        moreInfoItem[i].addEventListener('click', function(){
            let item = this.closest(".js-item");
            let reviewContent = item.querySelector('.content p').innerHTML;
            let reviewName = item.querySelector('.name').innerHTML;
            
            let popupReview = document.querySelector('.popup-more');
            
            popupReview.querySelector('.popup-more p').innerHTML = '' + reviewContent + '';
            popupReview.querySelector('.name').innerHTML = '' + reviewName + '';
        });
    }
    
    // /More info
    
    // Drop list
    
    var dropList = document.querySelectorAll('.catalog-select__item');
    
    document.addEventListener('click', function(e){
        let element = e.target;
        
        if(element.closest('.catalog__button-select')){
            let isActive = element.closest('.catalog-select__item').classList.contains('active')? true: false;
            
            dropList.forEach(item => {item.classList.remove('active')});
            
            if(isActive)
                element.closest('.catalog-select__item').classList.remove('active');
            else
                element.closest('.catalog-select__item').classList.add('active');
        }
        
        
        
        if(element.closest('.catalog-input__wrapper')){
            //let value = element.closest('.catalog-drop__item').querySelector('.text').innerHTML;
           // let droplist = element.closest('.catalog-select__item');
            //let catalogButtonText = droplist.querySelector('.catalog__button-select .text').innerHTML;
            element.closest('.catalog-input__wrapper').classList.add('active');
            
            //catalogButtonText = catalogButtonText.replace('' + value + '',"");
            
            //console.log(catalogButtonText);
            
            //newValue = newValue + value  + ", ";
            
            // past value
            //droplist.querySelector('.catalog__button-select .text').innerHTML = newValue;
            
        }
    });
    
    document.querySelector('body').addEventListener('click', function(event){
        if(!event.target.closest('.catalog-select__item')) {
            document.querySelectorAll('.catalog-select__item').forEach(function(item){
                item.classList.remove('active');
            }); 
        }
    });
    
    // Drop list
    
    // Catalog open
    
    let catalogButtonItem = document.querySelectorAll(".catalog__button");
    let catalogWrapperItem = document.querySelectorAll(".catalog__wrapper-item");
    
    catalogButtonItem.forEach((item) => {
        item.addEventListener('click', function(){
            catalogWrapperItem.forEach((item) => {
                item.classList.remove('active');
            });
            
            item.closest(".catalog__wrapper-item").classList.add("active");
        });
    });
    
    // /Catalog open
    
      // Product calc
     
     let allCalcElem = document.querySelectorAll('.js-calc');
     
     
    allCalcElem.forEach(function(item){
        let calcInput = item.querySelector('.product-calc .input');
        let calcDecorInput = item.querySelector('.product-calc__decor-input');
        let calcMinus = item.querySelector('.product-calc .delete');
        let calcPlus = item.querySelector('.product-calc .add');
        
        calcPlus.addEventListener('click', function(){
            calcInput.value = +calcInput.value + 1;
            calcDecorInput.innerHTML = calcInput.value;
        });
        
        calcMinus.addEventListener('click', function(){
            if(calcInput.value < 2) {
                return
            }
            
            calcInput.value = +calcInput.value - 1;
            calcDecorInput.innerHTML = calcInput.value;
        });
    });
    
    let calcButton = document.querySelector('.product-card');
    
    if(calcButton) {
        calcButton.addEventListener('click', function(){
            let valueInput = document.querySelector(".product-calc input").value;
            let inputPopup = document.querySelector(".popup .input-calc");
            
            inputPopup.value = valueInput;
        });
    }
    
     // /Product calc
});