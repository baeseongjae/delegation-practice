const data = [
  {
    id: 1,
    src: 'visual1.jpg',
    alt: '모던한 테이블과 화분의 조화를 표현한 공간',
  },
  {
    id: 2,
    src: 'visual2.jpg',
    alt: '강렬한 의자의 색상과 따뜻한 느낌의 공간',
  },
  {
    id: 3,
    src: 'visual3.jpg',
    alt: '호텔 라운지 느낌의 편안한 의자가 있는 공간',
  },
  {
    id: 4,
    src: 'visual4.jpg',
    alt: '물방을 모양의 독특한 디자인의 의자들을 나열한 공간',
  },
];


/* const list = document.querySelectorAll('.navigation > li')
list.forEach((item)=>{
  item.addEventListener('click',()=>{
  })
})
 */

// 이벤트 위임 x 

// const list = $('.navigation > li');
/* 
$('.navigation > li').click(function (e) {
  e.preventDefault();
  let index = $(this).index();
  $(this).addClass()
  
  $('.navigation > li').removeClass('is-active');
  $(this).addClass('is-active')
  // .delay(2000).fadeOut();
  $('.visual img').attr({
    'src':`./assets/part01/${data[index].src}`,
    'alt':data[index].alt
  })
  // $('.visual img').attr('src',`./assets/part01/${data[index].src}`)
  // $('.visual img').attr('alt',data[index].alt)
});
 */

// 0 1 2 3 




// 1 2 3 4

let indexing = 0;


                    // ajax 
let template = `
<div data-index="${indexing}"><img src="./assets/part01/visual${indexing}.jpg" alt="모던한 테이블과 화분의 조화를 표현한 공간" /></div>
`



$('.navigation').on('click','li',function(e){
  
  e.preventDefault();

  
  let index = $(this).attr('data-index');
  
  

  $('.navigation > li').removeClass('is-active');
  $(this).addClass('is-active');

  $('.visual img').attr({
    'src':`./assets/part01/${data[index-1].src}`,
    'alt':data[index-1].alt
  })


});
