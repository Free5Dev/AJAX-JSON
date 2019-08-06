var url="http://localhost/ajax/";
var getOptions={
    method: 'GET',
    async: true, 
    cache: false,
    success: successCallback
};

var successCallback= function (response){
    console.log(response);
}

$.get(url, successCallback);

$.ajax(url, getOptions);