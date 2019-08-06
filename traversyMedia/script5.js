// ----------------------------------------------------------------ajax 2 local JSON----------------------------------------------------------
document.getElementById("buttonUser").addEventListener('click', loadUsers);


function loadUsers(){

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.php', true);

    xhr.onload=function(){
        if(this.status==200){
            var users=JSON.parse(this.responseText);
            // console.log(user.name);
            var outPut='';
            for(i in users){
                outPut += '<ul>'+
                '<li> ID:'+users[i].id+'</li>'+
                '<li> Name:'+users[i].name+'</li>'+
                '</ul>';
            }
            
            document.getElementById('user').innerHTML=outPut;
        }
    }
    xhr.send();
}