//let value = sddss
//Cookies.set('name', 'value', { expires: 30 })
//
//
//
//
//function addCookies(){
//	console.log(document.getElementById("text"))
//}

document.addEventListener('DOMContentLoaded', function() {
   
   document.querySelector('#submit').disabled = true;  
   
   document.querySelector('#task').onkeyup = () => {
    if (document.querySelector('#task').value.length > 0){
     document.querySelector('#submit').disabled = false;
    } else {
     document.querySelector('#submit').disabled = true;
    }
    
   }
   
   
   document.querySelector('form').onsubmit = () => {
    const task = document.querySelector('#task').value;
    
    const li = document.createElement('li');
    li.innerHTML = task;
//	Cookies.set('name', task, { expires: 30 })
	   document.cookie = 'name' + "=" + encodeURIComponent(task);
    
    document.querySelector('#tasks').append(li);
    
    document.querySelector('#task').value = '';
    
    document.querySelector('#submit').disabled = true;
    
    
    //stop form from submiting
    return false; 
   }   
  });

function removeCookies(){
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
		document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
}
