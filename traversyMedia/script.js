// create event listenner
document.getElementById('button1').addEventListener('click', loadText);

function loadText(){
    // create XHR object 
    var xhr= new XMLHttpRequest();
    // open  - type , url/file, async
    xhr.open('GET', 'sample.txt', true);
    console.log('READYSTATE', xhr.readyState);
    // optinal - used for loaders
    xhr.onprogress= function (){
        console.log('READYSTATE:', xhr.readyState);
    }

    xhr.onload=function (){
        if(this.status==200){
            // console.log(this.responseText);
            document.getElementById('text').innerHTML=this.responseText;
        }else if(this.status==404){
            document.getElementById('text').innerHTML='Not Found';
        }
    }
    xhr.onerror=function (){
        console.log('Request Error...');
    }
    xhr.send();
    console.log(xhr);
}
