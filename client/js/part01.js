// ★이벤트 위임!

const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]


// 1.네비게이션에게 이벤트를 건다.
// 2.핸들러를 연결한다.
// 3.이벤트 객체에서 타겟을 찾는다.

const navigation = getNode('.navigation');
const visualImage = getNode('.visual img');

// 내가 선택한 li에게 is-active 클래스를 넣어주세요.
// 내가 선택하지 않은 li에게 is-active 클래스 지워주세요.

// 선택한 대상의 data-index값을 가져와주세요.

// 비주얼 안에 있는 이미지를 가져온다.
// 이미지의 src 속성에 접근한다.
// src의 값을 index로 바꾼다.

function handler(e){
  let target = e.target.closest('li');
  let targetA = e.target.closest('a');
  if(!target || !targetA) return;

  let list = Array.from(navigation.children);
  let index = attr(target,'data-index');

  list.forEach((item)=> {removeClass(item,'is-active');})
  // = let arr = [...list];
  // = Array.from(list);
  // = Array.prototype.slice.call(list);
  
  // console.log(target.getAttribute('data-index'));

  attr(visualImage,'src',`./assets/part01/visual${index}.jpg`);

  attr(visualImage,'alt', data[index-1].alt);
  
  addClass(target,'is-active');
}

navigation.addEventListener('click',handler);















