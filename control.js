const prenon = document.getElementById("firstname");
const nom= document.getElementById("lastname");
const email= document.getElementById("email");
const pw= document.getElementById("password");
const confirmPw= document.getElementById("confirmPassword");
const genre= document.getElementById("gender");
const pays= document.getElementById("country");
let btn=document.getElementById("btn");
btn.addEventListener("click",verif)
function verif(){
    clearErrors();
    let hasError=false;
    //verification du prénom_
    if (prenon.value.trim()===""){
        showError(prenon,"Erreur:prenon requis.");
        hasError=true;}

    //verification du prénom_
    if (nom.value.trim()){
        showError(nom,"Erreur:nom requis.");
        hasError=true;}

    //verification de l'email
    const emailPattern
    if(!emailPattern.test(email.value.trim())){
        showError(email,"Erreur:email requis.");
        hasError=true;
    }

    //verification du mot de passe
    if (pw.value.trim()){
        showError(pw,"Erreur:mot de passe requis.");
        hasError=true;}
    
    //verification confirmation de mot de passe
    if (confirmPw.value.trim()){
        showError(confirmPw,"Erreur:confirmation requis.");
        hasError=true;}
    else if (pw.value !==confirmPw.value){
        showError(confirmPw,"Erreur:les mots de passe ne correspondent pas");
        hasError=true;}

    //Affichage d'un message de succés si aucune erreur n'est trouver
    if (!hasError){
        alert("Inscription réussie");
    }
}
    //Fonction pour afficher un message d'erreur
    function showError(inputfield,message){
        const errorMessage=document.createElement("p");
        errorMessage.style.color="red";//Definir la couleur rouge
        errorMessage.textContent=message;//Ajouter le message d'erreur
        inputfield.parentNode.insertBefore(errorMessage,inputfield.nextSibling);//Inserer le message aprés le champ
    }
    

    //Fonction pour effacer le message d'erreur précedents
    function clearErrors(){
        const errorMessages=document.querySelectorAll("p");
        errorMessages.forEach((msg) msg.remove());
    }

