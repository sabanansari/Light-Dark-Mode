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

// Dark Mode Styles
function switchMode(navBGColor,txtBoxBGColor,tiTextContent){
    nav.style.backgroundColor = navBGColor;
    textBox.style.backgroundColor = txtBoxBGColor;
    toggleIcon.children[0].textContent = tiTextContent;
    toggleIcon.children[1].classList.replace(toRemove,toAdd);
    imageMode();
}

//Light Dark Images

function imageMode(){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src =`img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        color = 'dark';
        toRemove='fa-sun';
        toAdd = 'fa-moon';
        switchMode('rgb(0 0 0 /50%)','rgb(255 255 255 /50%)','Dark Mode');
        
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        color = 'light';
        toRemove='fa-moon';
        toAdd = 'fa-sun';
        switchMode('rgb(255 255 255 /50%)','rgb(0 0 0 /50%)','Light Mode');
        
    }
}

// Event Listener
toggleSwitch.addEventListener('change',switchTheme);