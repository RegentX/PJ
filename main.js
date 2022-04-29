
//const splash = //document.querySelector('.splash');
//document.addEventListener('DOMContentLoaded', (e)=>{
  //setTimeout(()=>{
    //splash.classList.add('display-none');
  //}, 7000);
//})
setTimeout(function(){
	document.getElementById('splash').style.display = 'none';
}, 7000);


$(document).ready(function(){ 				$(window).scroll(function(){
 		if ($(window).scrollTop() < 900 ){
 			$(".container").css("opacity", "2");

 			}

		if ($(window).scrollTop() > 900 ){
			$(".container").css({"opacity": "0.8","z-index": "3"});
			}
		});
});

$('.scrollto a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 6000,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
});

function readMore(){
	var content = document.getElementById("content");
	var btn = document.getElementById("collapsible");

	if (content.style.display === "none") {
		content.style.display = "inline";
		btn.innerHTML = "Cancel";
	}else{
		content.style.display = "none";
		btn.innerHTML = "Open another projects";
	}
}

function readMore2(){
	var content = document.getElementById("content2");
	var btn = document.getElementById("collapsible2");

	if (content.style.display === "none") {
		content.style.display = "inline";
		btn.innerHTML = "Cancel";
	}else{
		content.style.display = "none";
		btn.innerHTML = "Continue watching";
	}
}
// ниже функция обработчик по 1 кнопке раскрытия более 1 блока при повторном нажатии (tech)
//function readMore(){
	//var content = document.getElementById("content");
	//var btn = document.getElementById("collapsible");

	//if (content.style.display === "none" & content2.style.displat === "none") {
		//content.style.display = "inline";
		//btn.innerHTML = "Cancel";
	//}else if(content.style.display === "inline & content2.style.displat === "none"){

	//}else{
		//content.style.display = "none";
		//btn.innerHTML = "Open another projects";
	//}
//}
