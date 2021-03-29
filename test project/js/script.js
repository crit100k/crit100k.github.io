$(document).ready(function(){
    let prev = $(".slider__arrow-left"),
        next = $(".slider__arrow-rignt");
       

    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1,
        autoHeight:false,
        autoplay: false,
        autoplayTimeout: 5000,
        dots:false,
        smartSpeed:1000
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

	validateForms('form#feed');


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

})          