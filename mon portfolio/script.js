document.addEventListener('DOMContentLoaded',function()
{
const form = document.querySelector('form');
form.addEventListener('submit',function (event){
event.preventDefault();//empeche l envoi du formulaire par defaut
alert('merci de m avoir contacter,'+document.getElementByld('na me').value +'!je vous repondrais bientot.')
form.reset();//reinitialise le formulaire
})
})