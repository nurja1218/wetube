import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
let count = 0;

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const latestDeleteBtn = async (event, comment) => {
  const btnId = String(event.target.id);
  const span = event.target.parentElement;
  const text = comment;
  const li = span.parentElement;
  commentList.removeChild(li);
  const data = [btnId, text];
  const url = "latest/comment";
  const response = await axios({
    url: `/api/${url}/delete`,
    method: "POST",
    data: {
      data
    }
  });
  if (response.status === 200) {
    decreaseNumber();
  }
};

const addComment = (comment, response, count) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerHTML = "Delete ❌";
  button.id = String(count);
  button.addEventListener("click", function() {
    latestDeleteBtn(event, comment);
  });
  span.innerHTML = comment;
  span.className = "jsComment";
  span.appendChild(button);
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async comment => {
  count += 1;
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    addComment(comment, response, count);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("#jsAddCommentBtn");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
