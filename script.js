const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
let color='';
let toRemove = '';
let toAdd = '';
let isLight = true;

// Dark Mode Styles
function switchMode(isLight){

    color = isLight ? 'light' : 'dark';
    toRemove = isLight ? 'fa-moon' : 'fa-sun';
    toAdd = isLight ? 'fa-sun' : 'fa-moon';
    document.documentElement.setAttribute('data-theme',color);
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 /50%)' : 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 /50%)' : 'rgb(255 255 255 /50%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
    toggleIcon.children[1].classList.replace(toRemove,toAdd);
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src =`img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
    localStorage.setItem('theme',color);
}

//Light Dark Images



// Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
         isLight = false;
        switchMode(isLight);
       
    }
    else{
        isLight = true;
        switchMode(isLight);
    }
}

// Event Listener
toggleSwitch.addEventListener('change',switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);

    if(currentTheme==='dark'){
        toggleSwitch.checked = true;
        isLight = false;  
    }
    else{
        toggleSwitch.checked = false;
        isLight = true;
    }
    switchMode(isLight);
}