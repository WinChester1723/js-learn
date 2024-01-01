function showContent(tab){
    const content = document.getElementById('content');
    if(tab === 'home'){
        content.innerHTML = "<h1>Добро пожаловать на главную страницу!</h1>";
    }else if(tab === 'about'){
        content.innerHTML = "<h1>Информация о нас.</h1>";
    }else if(tab === 'contact'){
        content.innerHTML = "<h1>Наши контакты.</h1>";
    }
}