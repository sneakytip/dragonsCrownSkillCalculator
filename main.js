const characterClassNames = ["Fighter","Amazon","Dwarf","Elf","Sorceress","Wizard"];
const maxSkillPoints = 155;

let playerSelectionPrevious = '';
let currentSkillPoints = maxSkillPoints;

///////////////////////////////////////////////
// HTML skill tables are dynamically populated
///////////////////////////////////////////////
function populateSkillTable(source, target) {
	let targetTable = document.getElementById(target);
	let headerRow = document.createElement("tr");
	let headerCell = document.createElement("th");
	let headerText = document.createTextNode(source.label.toString());
	
	headerCell.appendChild(headerText);
	headerRow.appendChild(headerCell);
	targetTable.appendChild(headerRow);
}

function updateSkills() {
	const tablesContainer = document.getElementById('tables-container');
	const elemClassList = document.getElementById("characters-list");
	let selectionCurr = elemClassList.value;
	
	if (selectionCurr !== playerSelectionPrevious) {
		let skillsClass = getSkillType(selectionCurr);
		let skillsCommon = getSkillType("common");
		
		playerSelectionPrevious = selectionCurr;
		currentSkillPoints = maxSkillPoints;
		populateSkillTable(skillsCommon, "common-skills-table");
		populateSkillTable(skillsClass, "class-skills-table");
		
		if (tablesContainer.style.display !== "block") {
			tablesContainer.style.display = "block";
		}
		
		console.log(skillsCommon);
		console.info(skillsClass);
	}
}

////////////////////////////////////////////////
// Instruction section expand/collapse features
////////////////////////////////////////////////

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