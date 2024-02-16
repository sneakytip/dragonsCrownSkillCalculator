/**
 * Define and style expand/collapse elements.
 **/
function prepCollapse() {
	let collapse = document.getElementsByClassName("collapsible");

	for (let i = 0; i < collapse.length; i++) {
	  collapse[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
		  content.style.maxHeight = null;
		} else {
		  content.style.maxHeight = content.scrollHeight + "px";
		} 
	  });
	}
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", prepCollapse);
} else {
  prepCollapse();
}

/**
 * Show modal for user confirmation.
 **/
function showModalConfirmReset() {
	let modal = document.getElementById("reset-modal");
	let cssModalObj = window.getComputedStyle(modal);
	let cssModalDisplay = cssModalObj.getPropertyValue("display");
	
	if (cssModalDisplay != "block") {
		modal.style.display = "block";
		window.addEventListener("click",function(e) {
			checkModalOnWindow(e.target)
		});
	}
}


/**
 * Hide modal.
 **/
function hideModalConfirmReset() {
	let modal = document.getElementById("reset-modal");
	
	if (modal.style.display !== "none") {
		modal.style.display = "none";	
	}
}

function checkModalOnWindow(target) {
	let modal = document.getElementById("reset-modal");
	
	if (target == modal) {
		hideModalConfirmReset();
	}
}