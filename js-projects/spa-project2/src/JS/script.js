const tabContent = {
  home: "<h1>Добро пожаловать на главную страницу!</h1>",
  about: "<h1>Информация о нас.</h1>",
  contact: "<h1>Наши контакты.</h1>",
};

function showContent(tab) {
  const content = document.getElementById("content");
  content.innerHTML = tabContent[tab] || "<h1>Контент не найден.</h1>";
}

function clearHis(){
  const content = document.getElementById("content")
  content.innerHTML = '';
}