const button = document.getElementById('mode-selector');
const title = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode';

function changeMode(){
    changeClasses();
    changeText();    
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    title.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if(body.classList.contains(darkModeClass)){
        title.innerText = darkMode + " ON";
        button.innerText = lightMode;
    } else {
        title.innerText = lightMode + " ON";
        button.innerText = darkMode;
    }
    
}

button.addEventListener('click', changeMode);

