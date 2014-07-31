function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function checkform(){
	var str = window.location.pathname;
	var isbaha = httpGet(window.location.origin + str.replace("/use.php", "") + "/API/isbaha.php?name=" + document.getElementById("Name").value);
	if(isbaha == "1"){
        var btn = $('#verify');
        btn.button('傳送中...');
      	return true;
	}else{
		flash('#Name',8,10,100);
		return false;
	}
}

function isEmail() {
	if (document.getElementById("email").value.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/)!= -1){
		return true;
	}else{
		flash('#email',8,10,100);
		return false;
	}
}

function sub(){
var name = document.getElementById('Name').value;
$.ajax({
  type: 'POST',
  url: "sendverify.php",
  data: { Name: name },
  success: function(data) {
                      $("#msg").html(data);
                  },
  async:false
});
$(".f1").stop(true,false).animate({left:'-=500px',opacity: 0});
$(".f2").stop(true,false).animate({right:'0px',opacity: 1});
}

function sub2(){
var name = document.getElementById('name').value;
var hash = document.getElementById('hash').value;
var email = document.getElementById('email').value;
$.ajax({
  type: 'POST',
  url: "sendmailverify.php",
  data: { name: name , hash: hash , email: email},
  success: function(data) {
                      $("#msg").html(data);
                  },
  async:false
});
$(".f1").stop(true,false).animate({left:'-=500px',opacity: 0});
$(".f2").stop(true,false).animate({right:'0px',opacity: 1});
}

$('#verify').click(function () {
    var btn = $(this)
    btn.button('傳送中...')
    $.ajax(...).always(function () {
      btn.button('reset')
    });
  });

