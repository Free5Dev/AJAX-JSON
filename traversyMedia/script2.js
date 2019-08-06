// ----------------------------------------------------------------ajax 2 local JSON----------------------------------------------------------
document.getElementById("buttonUser").addEventListener('click', loadUser);
document.getElementById("buttonUsers").addEventListener('click', loadUsers);

function loadUser(){

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload=function(){
        if(this.status==200){
            var user=JSON.parse(this.responseText);
            // console.log(user.name);
            var outPut='';
            outPut += '<ul>'+
            '<li> ID:'+user.id+'</li>'+
            '<li> Name:'+user.name+'</li>'+
            '<li> Email:'+user.email+'</li>'+
            '</ul>';
            document.getElementById('user').innerHTML=outPut;
        }
    }
    xhr.send();
}

function loadUsers(){

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);

    xhr.onload=function(){
        if(this.status==200){
            var users=JSON.parse(this.responseText);
            // console.log(user.name);
            var outPut='';
            for(i in users){
                outPut += '<ul>'+
                '<li> ID:'+users[i].id+'</li>'+
                '<li> Name:'+users[i].name+'</li>'+
                '<li> Email:'+users[i].email+'</li>'+
                '</ul>';
            }
            
            document.getElementById('users').innerHTML=outPut;
        }
    }
    xhr.send();
}