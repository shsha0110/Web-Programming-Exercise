// DOM 조작하기
const myParagraph = document.getElementById("my-paragraph");

myParagraph.innerHTML = "This is a new paragraph.";
myParagraph.style.color = "red";

// 이벤트 처리 방법
const myButton = document.getElementById("my-button");

let clickCount = 0;

myButton.addEventListener("click", function () {
  const actionStatus = document.getElementById("action-status");
  let clickStatus = document.createElement("div");
  clickCount++;
  clickStatus.innerHTML = `${clickCount}번째 Button clicked!`;
  actionStatus.appendChild(clickStatus);
});