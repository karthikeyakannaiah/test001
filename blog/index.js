/*$(document).ready(function(){

	$("#div2").hide();
	//$("#div1").hide();
	$("#me").click(function(){
		$("#div2").show(1000);
		$("#div1").hide();
	});
	
});
&times;
*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  /*document.getElementById("me").style.marginRight = "0px";
  document.getElementById("me").style.Transition = "margin-left .5s";*/
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
function about() {
	document.getElementById("abt").style.display = "block";
	closeNav();
}
function cloabt() {
	document.getElementById("abt").style.display = "none";
}
function interest() {
	document.getElementById("int").style.display = "block";
	closeNav();
}
function cloint() {
	document.getElementById("int").style.display = "none";
}



	/*if (sessionStorage.clickcount) {
	  sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
	} else {
	  sessionStorage.clickcount = 1;
	}
	document.getElementById("int").innerHTML = "You have clicked the button " +
	sessionStorage.clickcount + " time(s) in this session.";
	if(){
		document.getElementById("div2").style.color ="blue";}
	else{

	}*/
$(document).ready(function(){
  $("input").click(function(){
    //$("div2").css("color", "yellow");, #intp, #abtp
    //document.getElementById("div2").style.color ="blue";
    $("#intp, #abtp, #he01, #div2 ").css("color", "white");
    $("#navb").css("color", "white");
    $(".closebtn").css("color", "white");
    $("body").css("background-color", "black");
    $(".sidenav a:hover").css("color", "white");
    $("#mySidenav , .dropbtn").css("background-color", "yellow");
    document.getElementById("dkm").style.display = "none";
    closeNav();
    //document.getElementById("mySidenav").style.backgroundcolor ="blue";
    //document.getElementById("div2").style.color ="blue";
    //document.getElementById("div2").style.color ="blue";
    //document.getElementById("div2").style.color ="blue";
 	});
});
/*$(document).ready(function(){
  $("#ckbtn").click(function(){
    $("#intp, #abtp, #he01, #div2 ").css("color", "black");
    $("#navb").css("color", "white");
    $(".closebtn").css("color", "black");
    $("body").css("background-color", "white");
    $("#mySidenav").css("background-color", "white");
    $("#wkm").css("display", "inline-block");
    //document.getElementById("wkm").style.display = "inline-block";
 	});
});*/
