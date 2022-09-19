

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let entier = entierAleatoire(1, 10);
  console.log("nombre du niveau facile : "+ entier);
  let entier1 = entierAleatoire(1, 100);
  console.log("nombre du niveau moyen : "+entier1);
  let entier2 = entierAleatoire(1, 1000);
  console.log("nombre du niveau difficile : "+entier2);
  
  
  let btn = document.querySelector(".btn");
  let grandpetit = document.querySelector(".espace");
  let chance = 0;
  
  function deviner() {
    let nbrSaisie = document.querySelector("input").value;
    let input = document.querySelector("input");
    console.log(nbrSaisie);
    let select = document.getElementById("niv");
    if (select.value == "valeur1")
    {
      if (nbrSaisie > entier) {
        grandpetit.innerText = " Plus Petit";
        chance = chance + 1;
        input.value = "";
      } else if (nbrSaisie == entier) {
        grandpetit.innerText = "Vous êtes fort !";
        alert(" Féilication , vous avez gagner !");
        input.value = "";
        //input.disabled = true;
        //btn.disabled = true;
        let display = document.getElementById("display");
        display.style.display = "none";
        document.getElementById("partie").style.display = "block";
      } else if (nbrSaisie < entier) {
        grandpetit.innerText = "Plus Grand";
        chance = chance + 1;
        input.value = "";
      }
      if (chance == 3) {
        alert("Oups , vous avez perdu !! ");
        input.value = "";
        //input.disabled = true;
        //btn.disabled = true;
        let display = document.getElementById("display");
        display.style.display = "none";
        document.getElementById("partie").style.display = "block";
      }
    }
    if (select.value == "valeur2")
    {
      if (nbrSaisie > entier1) {
        grandpetit.innerText = " Plus Petit";
        chance = chance + 1;
        input.value = "";
      } else if (nbrSaisie == entier1) {
        grandpetit.innerText = "Vous êtes fort !";
        alert(" Féilication , vous avez gagner !");
        input.value = "";
        //input.disabled = true;
        //btn.disabled = true;
        let display = document.getElementById("display");
        display.style.display = "none";
        document.getElementById("partie").style.display = "block";
      } else if (nbrSaisie < entier1) {
        grandpetit.innerText = "Plus Grand";
        chance = chance + 1;
        input.value = "";
      }
      if (chance == 3) {
        alert("Oups , vous avez perdu !! ");
        input.value = "";
        //input.disabled = true;
        //btn.disabled = true;
        let display = document.getElementById("display");
        display.style.display = "none";
        document.getElementById("partie").style.display = "block";
      }
    }
    
    if (select.value == "valeur3")
    {
      if (nbrSaisie > entier2) {
        grandpetit.innerText = " Plus Petit";
        chance = chance + 1;
        input.value = "";
      } else if (nbrSaisie == entier2) {
        grandpetit.innerText = "Vous êtes fort !";
        alert(" Féilication , vous avez gagner !");
        input.value = "";
        //input.disabled = true;
        //btn.disabled = true;
        let display = document.getElementById("display");
        display.style.display = "none";
        document.getElementById("partie").style.display = "block";
      } else if (nbrSaisie < entier2) {
        grandpetit.innerText = "Plus Grand";
        chance = chance + 1;
        input.value = "";
      }
      if (chance == 3) {
        alert("Oups , vous avez perdu !! ");
        input.value = "";
        //input.disabled = true;
        //btn.disabled = true;
        let display = document.getElementById("display");
        display.style.display = "none";
        document.getElementById("partie").style.display = "block";
      }
    }
  }
  
  btn.addEventListener("click", deviner);
  
  let nbrSaisie = document.querySelector("input");
  nbrSaisie.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      deviner(event);
    }
  });
  
  function affichage() {
    display.style.display = "block";
    document.getElementById("partie").style.display = "none";
    window.location.reload();
  }
  
  partie.addEventListener("click", affichage);