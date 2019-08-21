// lien de l'api json  

// https://learnwebcode.github.io/json-example/animals-1.json
// compteur de page
var pageCounter=1;
// pointeur vers btn
var animalContainer=document.getElementById('animal-info');
var btn=document.getElementById('btn');
// function de click btn
btn.addEventListener('click', function(){
    // charge de new XML
    var ourRequest= new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');

    ourRequest.onload=function(){

        if(ourRequest.status >=200 && ourRequest.status <400){
            // transform le json en object
            var ourData=JSON.parse(ourRequest.responseText);
            console.log(ourData);
            renderHTML(ourData);
            
        }else{
            console.log("We connected to the server, but it returned an error .");
        }
        
    };
    // function errror
    ourRequest.onerror=function(){
        console.log("Connexion Error");
    };
    // envoi de request 
    ourRequest.send();
    // incrementation du compteur
    pageCounter++;
    if(pageCounter > 3){
        btn.style.display="none";
    }
});


// function de rendu html 
function renderHTML(data){
    var htmlString='';
    for(i=0; i<data.length; i++){

        htmlString +="<p>"+data[i].name+" is a "+data[i].species+" that likes to eat:  ";

        for(ii=0; ii<data[i].foods.likes.length; ii++){
            
            if(ii==0){

                htmlString +=data[i].foods.likes[ii];
            }else{
                htmlString +=" and "+data[i].foods.likes[ii];
            }
        }

        htmlString +="and dislikes";

        for(ii=0; ii<data[i].foods.dislikes.length; ii++){
            
            if(ii==0){

                htmlString +=data[i].foods.dislikes[ii];
            }else{
                htmlString +=" and "+data[i].foods.dislikes[ii];
            }
        }

        htmlString +="</p>";

    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}