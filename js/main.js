// // 찜 클릭 시 하트 채워지는 기능 (빈 하트 -> 찬 하트 이미지 변경)

// // 하트 변수

// function chkHeart() {
//   let heart = document.getElementsByClassName("heart");

//   // 같은 클래스명을 공유하는 요소들의 개수
//   let heartLength = heart.length;
//   console.log(heartLength);

//   // 같은 클래스명을 공유하는 요소들에게 한 번에 이벤트 추가
//   for (let i = 0; i < heartLength; i++) {
//     heart[i].addEventListener("click", function () {
//         console.log("클릭");
//       // 꽉 찬 하트일 때
//       if (heart[i].getAttribute("src") == "./img/books-heart-1.png") {
//         // 경로 가져오기
//         heart[i].setAttribute("src", "./img/books-heart-2.png");
//         console.log(heart[i].getAttribute("src"));
//       }
//       // 빈 하트일 때
//       else if (heart[i].getAttribute("src") == "./img/books-heart-2.png") {
//         heart[i].setAttribute("src", "./img/books-heart-1.png");
//         console.log(heart[i].getAttribute("src"));
//       }
//     });
//   }
// }

// 서점별 베스트 셀러 버튼
let btn = document.getElementsByClassName("store-btn");

function handleClick(event) {
  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < btn.length; i++) {
      btn[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", handleClick);
  }
}

init();

// 배너 페이징 버튼
let bannerBtn = document.getElementsByClassName("paging-banner");

function bannerSlide() {
  let item = document.createElement("paging");
  let current = i;
  let remain = 3;
  item.innerHTML = `<div>
    <div class="prev"> < </div>
    <p>${current} / ${remain}</p>
    <div class="next"> > </div>
  </div>`;

  document.appendChild(item);
}

bannerSlide();
