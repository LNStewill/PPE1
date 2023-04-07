function hello() {
			// body...
			alert (" Bienvenue Chez DESTINATION CAMPING DESERT ")
		}

function basket() {
			alert ("Veuillez vous connecter pour accéder au pannier ")
		}


// Get the modal for connection
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


// Get the modal for inscription
var modal1 = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

//Pour le bouton de connection, sur le footer
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}