import axios from "axios";

const commentWithBtn = document.querySelectorAll(".jsComment");
const commentList = document.querySelector("#jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const removeComment = (commentId, currentElement) => {
  // target의 부모요소는 parentNode가 아닌 parentElement!!!
  const span = currentElement.parentElement;
  const li = span.parentElement;
  commentList.removeChild(li);
  decreaseNumber();
};

const handleClick = async event => {
  const currentElement = event.target;
  const commentId = event.target.id;
  const response = await axios({
    url: `/api/${commentId}/comment/delete`,
    method: "POST",
    data: {
      commentId
    }
  });
  if (response.status === 200) {
    removeComment(commentId, currentElement);
  }
};

const handleEvent = () => {
  commentWithBtn.forEach(function(deleteBtn) {
    deleteBtn.childNodes[1].addEventListener("click", handleClick);
  });
  // 반복 생성되는 요소(버튼)에 이벤트를 걸때는 함수를 각각의 모든 요소에
  // 이벤트함수를 만들어줘야한다(반드시 반복)
  // init()함수에서 click이벤트를 만들어주면 가장최신 요소에만
  // 이벤트함수가 생겨서 다른 버튼은 클릭해도 이벤트가 발생 X
};

function init() {
  handleEvent();
}

if (commentWithBtn) {
  init();
}
