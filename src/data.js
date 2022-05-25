let users = [
  {
    username: "Admin",
    password: "12345"
  }
];

let news = [
  {
    title: "newsitem1 title",
    text: "newsitem1 text"
  },
  {
    title: "newsitem2 title",
    text: "newsitem2 text"
  },
  {
    title: "newsitem3 title",
    text: "newsitem3 text"
  },
];

export function getUsers(){
  return users;
}

export function getNews(){
  return news;
}
