const titre= document.getElementById('logo');
const num= document.querySelector('.active');
titre.addEventListener('mouseover', je);
titre.addEventListener('mousedown', tu);
num.addEventListener('click', il);
num.addEventListener('mouseover', elle);
function je(){
    this.innerHTML='La programmation, cest ma passion !';
    this.style.color='yellow';
}
function tu(){
    this.innerHTML='ADIKO DEV';
    this.style.color='white';
}
function il(){
    this.innerHTML='00225 0143866962';
}
function elle(){
    this.innerHTML='contact';
}
