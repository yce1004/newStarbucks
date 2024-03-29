//돋보기 버튼
const searchEl = document.querySelector('.search');
const searchInput = document.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInput.focus();
});

//focus가 들어가면 class="focused"추가
searchInput.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInput.setAttribute('placeholder', '통합검색');
});

//focus가 나가면 class="focused"제거
searchInput.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInput.setAttribute('placeholder', '');
});


//main visual 이미지 순차적으로 등장---------------------------------------------
//gsap.to(요소, 지속시간초단위설정, 옵션)
const fadeEl = document.querySelectorAll('.visual .fade-in');
fadeEl.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1,{
    delay : (index + 1) * 0.7, //0.7 , 1.4, 2.1, 2.8
    opacity : 1
  })
});

//공지사항 : swiper
new Swiper(".notice-slide", {
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop : true,   // 슬라이드 반복 여부
  direction : 'vertical'
});

//프로모션 : swiper
new Swiper('.promotion-slide', {
  loop: true,
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  centeredSlides: true,
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
  },
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true, //클릭여부 설정
  },

  // Navigation arrows
  navigation: {
    nextEl: '.promotion .swiper-next', //이전버튼
    prevEl: '.promotion .swiper-prev', //다음버튼
  },

});

//promotion 토글 버튼
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //슬라이드 숨김
console.log(isHidePromotion);

//토그버튼을 클릭하면
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion; //슬라이드 숨김 값을 반대로 할당

  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
});

// AWARDS  : swiper
new Swiper('.awards .swiper', {
  loop: true,
  slidesPerView: 5, //한번에 보여줄 슬라이드 갯수
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
  },
  spaceBetween: 20,


  // Navigation arrows
  navigation: {
    nextEl: '.awards .swiper-next', //이전버튼
    prevEl: '.awards .swiper-prev', //다음버튼
  },

});

// ------------------------------------------------------------
// document : html 해석
// window :brower창으로 해석한다
/* window.addEventListener('scroll',function(){
  console.log('scrol!!!!!!!!!')
}) */
// lodash문법 : _.throttle(함수,시간밀리초)
//gsap.to(요소, 지속시간초단위설정, 옵션)


// 뱃지
// top버튼
const bageEl = document.querySelector('.badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500) {
    // 뱃지 숨기기
    gsap.to(bageEl , 0.6 , {
      opacity : 0,
      display : "none"
    });

    // top버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x : 0
    })
  }else{
        // 뱃지 보이기
        gsap.to(bageEl , 0.6 , {
          opacity : 1,
          display : "block"
        });
    
        // top버튼 보이기
        gsap.to(toTopEl, 0.2, {
          x : 100
        });
  }
},300))

// top버튼을 클릭하면 상단으로 이동
toTopEl.addEventListener('click',function(){
  gsap.to(window,0.7,{
    scrollTo : 0
  })
})


// scroll magic
const spyEl = document.querySelectorAll('section.scroll-spy');
spyEl.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement : spyEl, //보여잠 여부를 감지할 요소를 지정
    triggerHook: 0.6 ,
  })
  // show넣었다가 뺏다가
  // .setClassToggle(토글할요소,'넣었다가 뺄 class이름')
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
})