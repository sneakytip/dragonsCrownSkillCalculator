const characterClassNames = ["Fighter","Amazon","Dwarf","Elf","Sorceress","Wizard"];

function updateSkills() {
	const elemClassList = document.getElementById("characters-list");
	let selectionCurr = elemClassList.value;
	let skillsClassName = selectionCurr;
	let skillsClass = getSkillType(skillsClassName);
	let skillsCommon = getSkillType("common");
	
	console.log(skillsCommon);
	console.info(skillsClass);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", prepCollapse);
} else {
  prepCollapse();
}

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