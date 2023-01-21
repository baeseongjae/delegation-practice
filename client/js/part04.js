const contents = document.querySelector(".contents");
const inputField = document.getElementById("comment37");
const commentContainer = document.querySelector('.comment_container');


function handler(e){
  console.log(e.target.nodeName);

  let tar = e.target;

  while(!tar.getAttribute('data-name')){
    tar = tar.parentNode;
    
    if(tar.nodeName === 'BODY'){
      tar = null;
      return;
    }
  }

  if(tar.dataset.name === 'like'){
    console.log('like!');
    tar.classList.toggle('active');
  }

  if(tar.dataset.name === 'comment'){
    console.log('댓글달기');
    inputField.focus();
  }

  if(tar.dataset.name === 'send'){
    console.log(inputField.value);

    if(inputField.value === ''){
      console.log('입력해주세요.')
      return;
    }
  
    let template = `
      <div class="id">
      <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
          <div class="comment_field">
              <div class="text_container">
                  <div class="name"><a href="#">심선범</a></div>
                  <div class="text_field">${inputField.value}</div>
              </div>
          </div>
      </div>
      `

    commentContainer.insertAdjacentHTML('beforeend',template);
  }

}


contents.addEventListener('click',handler);












