

function showTab(value){
	if (value==1){
		document.getElementById('Tab1').style.display="block";
		document.getElementById('Tab2').style.display="none";
		document.getElementById('Tab3').style.display="none";
}

	if (value==2){
		document.getElementById('Tab1').style.display="none";
		document.getElementById('Tab2').style.display="block";
		document.getElementById('Tab3').style.display="none";

}
	if (value==3){
		document.getElementById('Tab1').style.display="none";
		document.getElementById('Tab2').style.display="none";
		document.getElementById('Tab3').style.display="block";
		
		
	}
}