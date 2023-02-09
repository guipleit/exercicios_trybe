import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
const getUsers = () => {
  return fetch(USERS_API)
    .then((response) => response.json())
}
let users
getUsers().then((dados) => dados)
 .then((dados) => {
   users = dados.users;
   fillUsersSelect(users)
 });
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

usersSelect.addEventListener('change', () => {
  clearPageData();

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  fetch(`https://dummyjson.com/posts/user/${usersSelect.value}`)
    .then((response) => response.json())
      .then((data) => {
        const { posts } = data
        fillPosts(posts)

        const [featuredPost] = posts;
      const COMMENTS_API = `https://dummyjson.com/posts/${featuredPost.id}/comments`;

      return fetch(COMMENTS_API);
    })
    .then((res) => res.json())
    .then((data) => {
      const { comments } = data;
      fillFeaturedPostComments(comments)
      }).catch((error) => fillErrorMessage(error))
  
});

