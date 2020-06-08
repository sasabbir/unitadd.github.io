document.write("Hello world");
function init_all(){
myFunction();	
}
	var a = Math.floor(Math.random() * 5);
	var x = Math.floor(Math.random() * 10);
	var y = Math.floor(Math.random() * 10);
	var xx = x.toString()+""+y;
	var xy = Number(xx)
	var z = Math.floor(Math.random() * 10);

function myFunction(){
	
	document.getElementById("first_digit").src =  "assets/images/captcha/"+a+x+".png";
	document.getElementById("second_digit").src =  "assets/images/captcha/"+a+y+".png";
	document.getElementById("adder").src =  "assets/images/captcha/"+a+z+".png";
	document.getElementById("sign").src =  "assets/images/captcha/"+a+"sign.png";
	document.getElementById("equal").src =  "assets/images/captcha/"+a+"equal.png";
	document.getElementById("demo").innerHTML =  "Var 1:" + a + ";<br>Var 2:" + x + ";<br>Var 3:" + y +" ;<br>Var 3:" + z;
	
	


	}

	function check_captcha(){
	var n = document.getElementById("result").value;
		if(xy+z==n){
		

		document.getElementsByTagName("style")[0].innerHTML="#captcha_button{display:inline-block;}";
		document.getElementsByTagName("style")[0].innerHTML="#captcha_area{display:none;}";
	}
	else{

		document.getElementsByTagName("style")[0].innerHTML="#captcha_button{display:none !important;;}";	
	}
	}