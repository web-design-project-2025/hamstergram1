let users = [];
let posts = [];
const contentElement = document.getElementById("content");

async function loadData() {
  const userResponse = await fetch("data/users.json");
  const userJSON = await userResponse.json();
  users = userJSON.users;
  console.log(userJSON);

  const postResponse = await fetch("data/posts.json");
  const postJSON = await postResponse.json();
  posts = postJSON.posts;

  renderContent();
}

function createPostElement(post, user) {
  const postElement = document.createElement("article");
  postElement.classList.add("post");

  const imageElement = document.createElement("img");
  imageElement.src = post.image;
  postElement.appendChild(imageElement);

  return postElement;
}

function renderContent() {
  contentElement.innerHTML = "";

  for (let post of posts) {
    const user = getUserByID(post.user_id);
    const postElement = createPostElement(post, user);
    contentElement.appendChild(postElement);
  }
}

loadData();
