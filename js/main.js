// Меню бургер
$(document).ready(function() {
	$('.nav__icon').click(function(event) {
		$('.nav__icon,.nav__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$('.nav__body').click(function(){
    $('.nav__icon, .nav__body').removeClass('active');
    $('body').removeClass('lock');
});

//about__slider
$(document).ready(function(){
	$('.about__slider-content').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows:false,
    dots:true,
    autoplay: false,
    speed:450,
    infinite: false,
    autoplaySpeed: 5000,
		responsive:[
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
		]
	});
});

//Появление элементов при прокрутке
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}



//попапы

$('.open-popup').click(function(e) {
  e.preventDefault();
  $('.popup-bg').fadeIn(800);
  $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
  $('.popup-bg').fadeOut(800);
  $('html').removeClass('no-scroll');
});

$('.popup-bg').click(function (e) {
  if (!$(e.target).closest(".popup").length) {
    $('.popup-bg').fadeOut(600);
  }
});

//Спойлеры

$(document).ready(function() {
	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')){
			$('.block__title').not($(this)).removeClass('active');
			$('.block__content').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});





//медленный скролл
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


//button to top
$(document).ready(function(){
  $(window).scroll(function(){
      if($(window).scrollTop()>300){
    $('.scroll-top').fadeIn(250);
}
else{
    $('.scroll-top').fadeOut(250);
}
  });
  $('.scroll-top').click(function(){
$('html,body').animate(
    {scrollTop:0},400
);
  });
});



//Плавающая шапка
window.addEventListener("scroll", function(){
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 190);
});


//Дата в форме
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#date").value = today;

