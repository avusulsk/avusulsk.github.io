var shown = false;
function showhideEmail() {
	// body...
	if(shown){
		document.getElementById('email').innerHTML = "Show my email";
		shown = false;
	}else{
		var myemail = "<a href='mailto:avusulsk"+ "@" +"ucmail.uc.edu'>avusulsk" + "@" + "ucmail.uc.edu</a>";
		document.getElementById('email').innerHTML=myemail;
		shown=true;
	}
}