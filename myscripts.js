function logar(){
    contactForm.addEventListener("submit", function(logar));
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    console.log('entrei');
    if(login =='admin' && senha =='admin'){
        alert('Sucesso!');
        console.log(window.location.href);
        window.location.href = 'file:///C:/Users/User/Documents/S3%20informatica/Programa%C3%A7%C3%A3o%20WEB/webs/home1.html';
        console.log(window.location.href);
        return false;

    }else{
        alert('Usuário ou senha incorretos!');
    }
    }