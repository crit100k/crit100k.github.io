$(document).ready(function(){
    let prev = $(".slider__arrow-left"),
        next = $(".slider__arrow-rignt");
       

    $('#first').owlCarousel({
        loop:true,
        items:1,
        autoHeight:false,
        autoplay: false,
        autoplayTimeout: 8000,
        dots:true,
        smartSpeed:1000,
		autoplayHoverPause: true,
		onTranslated: function(event) {
			console.log(event.page);
		}
        // nav: true,
        // navText:["",""],
        // navClass: ["slider__arrow-left","slider__arrow-right"],
        // navContainerClass: "slider__controls"
    });

    next.on("click", ()=>{
        $('.owl-carousel').trigger("next.owl.carousel");
  });
    prev.on("click", ()=>{
        $('.owl-carousel').trigger("prev.owl.carousel");
  });

  function validateForms(form) {
	$(form).validate({
		rules: {
			name:"required",
			phone:"required"
		},
		messages: {
			name: "Пожалуйста, введите свое имя",
			phone: "Пожалуйста, введите свой номер телефона"
		  	}
	  	});	
  	};

	validateForms('#feed');
	validateForms('#enquire');
    validateForms('#callback');


  $("input[name=phone]").mask("+7 (999) 999-99-99",{placeholder:"_"});

//    отправка на сервер
	// $("form").submit(function(e) {
	// 	e.preventDefault();
	// 	$.ajax ({
	// 		type: "POST",
	// 		url: "mailer/smart.php",
	// 		data: $(this).serialize()
	// 	}).done(function () {
	// 		$(this).find("input").val("");

	// 		$('form').trigger('reset');
	// 	});
		
	// 	return false;
	// });  

// добавление в корзину


// $('.product-preview__label').on('click', '.product-preview__label_active)', function() {
// 	$(this)
// 	  .addClass('product-preview__label_active').siblings().removeClass('catalog__tab_active')
// 	  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
//   });
	$('.product-preview__label').on('click', function() {
		if (event.target.classList.contains('product-preview__label_active')) {
			event.target.classList.remove('product-preview__label_active');
		} else {
			event.target.classList.add('product-preview__label_active');
		}
	});
	




  // появление форм
	$('[data-modal="callback"]').on('click', function() {
		$('.overlay, #callback').fadeIn('slow');
	
	});

	$('[data-modal="enquire"]').on('click', function() {
		$('.overlay, #enquire').fadeIn('slow');
	});

//закрытие форм
	$('.feedback-form__close').on('click', function() {
		$('.overlay, #callback, #enquire').fadeOut('slow');
	});

// спойлер

  $( "#spoiler" ).click(function(){
	$( ".contentHide" ).slideToggle();
	let change = document.getElementById("spoiler");
	if (change.innerHTML == "Смотреть полностью")
	{
		change.innerHTML = "Скрыть";
	}
	else {
		change.innerHTML = "Смотреть полностью";
	};
  });

//   $(window).on('resize', function(){
// 	if($(window).width() <= 767) {
// 	$('#').addClass('owl-carousel');
// 	}
// 	 else {
// 	$('.hits__wrapper').removeClass('owl-carousel');
// 	}
// 	}).trigger('resize');

	$('#second').owlCarousel({
        loop:false,
		center: false,
        items:3,
        dots:false,
		dotClass: "hits-dot",
		dotsClass: "hits-dots",
        smartSpeed:1000,
		margin:10,
		responsive: {
			0:{
				items:1,
				dots:true,
				loop:true
			},
			575:{
				items:2,
				nav:false,
				dots:true
			},
			991:{
				items:2,
				nav:false,
				dots:true
			}
		}
    });
})          

