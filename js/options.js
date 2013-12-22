// Saves options to localStorage.
function save_options() {
  var selectHost = document.getElementById("gitlabHost");
  var gitlabHost = selectHost.value;
  console.log(gitlabHost);
  localStorage["gitlabHost"] = gitlabHost;

  var selectPrivateKey = document.getElementById("privateKeyv");
  var privatekey = selectPrivateKey.value;
  console.log(privatekey);
  localStorage["privatekey"] = privatekey;


  //connect
  var userReq = new XMLHttpRequest()
  userReq.open("GET", return_api_url('users'), false);
  userReq.send(null);
  localStorage["developers"] = userReq.responseText;
  console.log(userReq.responseText);

  


  if(userReq.status == 200)
  {    
   document.getElementById("connect").className = "btn btn-default btn-block J_sync btn-success";
  }
  else
  {
    document.getElementById("connect").className = "btn btn-default btn-block J_sync btn-danger";
	console.log("Cannot connect - check your credentials");
  }

}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var gitlabHost = localStorage["gitlabHost"]; 
  var privatekey = localStorage["privatekey"]; 

  if(gitlabHost != undefined)
  {
  	document.getElementById("gitlabHost").value = gitlabHost;
  	document.getElementById("privateKeyv").value = privatekey;
  }
  document.querySelector('#connect').addEventListener('click', save_options);
}

function return_api_url(route)
{
	return  localStorage["gitlabHost"] + '/api/v3/' + route + '?private_token=' + localStorage["privatekey"];
}

document.addEventListener('DOMContentLoaded', restore_options);
