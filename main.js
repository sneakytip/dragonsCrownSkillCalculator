/* * * * * * * * * * *
 * Global Constants  *
 * * * * * * * * * * */
const characterClassNames = ["Fighter","Amazon","Dwarf","Elf","Sorceress","Wizard"];
const maxSkillPoints = 155;

// Naming conventions
const skillRowDataId = "data-row-id";
const skillDataCellId = "data-cell-id";
const skillDataElementId = "data-elem-id";
const skillIdSuffx = "-name-desc";
const skillEffectIdSuffx = "-effects";
const skillConditionsIdSuffx = "-conditions";
const skillElemIdSuffixCost = "-cost";
const skillElemIdSuffixPlayer = "-player";
const skillElemIdSuffixCategory = "-category";
const skillEffectsCurrentIdSuffix = "-current";
const skillEffectsNextIdSuffix = "-next";

const skillDataIdType = "data-skill-type";
const skillDataIdCategory = "data-skill-category";
const skillDataIdSkill = "data-skill-name";
const skillDataIdTierLevel = "data-skill-tier";

/* * * * * * * *
 * Global Vars *
 * * * * * * * */
let playerSelectionPrevious = '';
let currentSkillPoints = maxSkillPoints;
let classSkillTiers = [];
let commonSkillTiers = [];

/* * * * * * *
 * Functions *
 * * * * * * */
function processSkillTierPropertiesForOutput(property, value, categoryLabel) {
	switch(property) {
		case "effect":
			return "Next: " + value;
			break;
		case "cost":
			if (value > 0) {
				return "Skill point cost: " + value + " point(s)";
			}
			else return "Error: skill must cost at least 1 point."
			break;
		
		case "player":
			if (value > 0) {
				return "Player LV must be at least LV " + value + ".";
			}
			else return "";
			break;
		case "category":
			if (value > 0 && (categoryLabel != undefined || categoryLabel != null)) {
				return "The " + categoryLabel + " category skill must be LV " + value + ".";
			}
			else return "";

		default:
		return "Property value not matched. Check input.";
	}
}

function populateSkillTierData(targetCell, targetDescElem, type, category, skillName, tierLevel) {
	let currentTier = getSkillTier(type, category, skillName, tierLevel);
	let targetRow = document.getElementById(targetRowId);
	let effectsElemCurrent = targetRow.querySelectorAll('[' + skillDataElementId + '=' + CSS.escape(skillName + skillEffectsCurrentIdSuffix) + ']');
	
	// update current skill level effects and purchase conditions
	if (currentTier !== {} | currentTier !== null) {
		let newEffectElem = document.createElement("p");
		
		newEffectElem.appendChild(document.createTextNode(currentTier.effect));
		effectsElemCurrent.parentElement.replaceChild(newEffectElem, effectsElemCurrent);
	}
	else {
		
	}
		
	// update next skill level effects and purchase conditions
	if (nextTier !== {} | nextTier !== null) {
		
	}
	else {
		
	}
}

function updateSkillLevel(tierLevel) {
	let cellParent = this.parentElement;
	let skillRow = cellParent.parentElement;
	let skillRowChildren = skillRow.children;
	let descElemCurrent = '';
	let descElemNext = '';
	let type = cellParent.getAttribute(skillDataIdType);
	let category = cellParent.getAttribute(skillDataIdCategory);
	let skill = cellParent.getAttribute(skillDataIdSkill);
	let tierLevelNext = Number(tierLevel + 1);
	
	console.log(skillRowChildren);
	console.log();
/* 	populateSkillTierData(cellParent, type, category, skill, tierLevel);
	populateSkillTierData(cellParent, type, category, skill, tierLevel); */
}

///////////////////////////////////////////////
// HTML skill tables are dynamically populated
///////////////////////////////////////////////
function populateSkillTable(source, target, headLabelId) {
	let targetTableBody = document.getElementById(target);
	let targetNewBody = document.createElement("tbody");
	let tableHeadLabel = document.getElementById(headLabelId);
	let tableHeadLabelText = document.createTextNode(source.label);
	
	tableHeadLabel.appendChild(tableHeadLabelText);
	
	source.categoryGroup.forEach((category) => {
		let categoryRowspan = 0;
		let categoryCell = document.createElement("td");
		let categoryCellText = document.createTextNode(category.label + " Skill");
		
		category.skillGroup.forEach((skill) => {
			let skillCellTextBodyName = document.createTextNode(skill.label.toString());
			let skillCellTextBodyDesc = document.createTextNode(skill.description.toString());
			let skillRow = document.createElement("tr");
			let skillCell = document.createElement("td");
			let skillEffectsCell = document.createElement("td");
			let skillLevelCell = document.createElement("td");
			let skillConditionsCell = document.createElement("td");
			let skillEffectsElemCurrent = document.createElement("p");
			let skillEffectsElemNextHead = document.createElement("p");
			let skillEffectsElemNextBody = document.createElement("p");
			let skillConditionsElemCost = document.createElement("p");
			let skillConditionsElemPlayerLevel = document.createElement("p");
			let skillConditionsElemCategoryLevel = document.createElement("p");
			let skillCellElemName = document.createElement("p");
			let skillCellElemDesc = document.createElement("p");
			let skillCellTextElemName = document.createTextNode(skill.label);
			let skillCellTextElemDesc = document.createTextNode(skill.description);
			let skillEffectsElemTextCurrent = document.createTextNode("");
			let skillEffectsElemTextNextHead = document.createTextNode("Next");
			let skillEffectsElemTextNextBody = document.createTextNode(skill.tierGroup[0].effect);
			let skillConditionsTextCost = document.createTextNode(processSkillTierPropertiesForOutput("cost",skill.tierGroup[0].cost));
			let skillConditionsTextPlayerLevel = document.createTextNode(processSkillTierPropertiesForOutput("player",skill.tierGroup[0].minLevelPlayer));
			let skillConditionsTextCategoryLevel = document.createTextNode(processSkillTierPropertiesForOutput("category",skill.tierGroup[0].minLevelCategory,category.label));
			let skillLevelInput = document.createElement("input");
			
			// attributes for purchase conditions cell
			skillConditionsCell.setAttribute(skillDataCellId, skill.name + skillConditionsIdSuffx);
			skillConditionsElemCost.setAttribute(skillDataElementId, skill.name + skillElemIdSuffixCost);
			skillConditionsElemPlayerLevel.setAttribute(skillDataElementId, skill.name + skillElemIdSuffixPlayer);
			skillConditionsElemCategoryLevel.setAttribute(skillDataElementId, skill.name + skillElemIdSuffixCategory);
			skillConditionsElemCost.appendChild(skillConditionsTextCost);
			skillConditionsElemPlayerLevel.appendChild(skillConditionsTextPlayerLevel);
			skillConditionsElemCategoryLevel.appendChild(skillConditionsTextCategoryLevel);
			skillConditionsCell.appendChild(skillConditionsElemCost);
			skillConditionsCell.appendChild(skillConditionsElemPlayerLevel);
			skillConditionsCell.appendChild(skillConditionsElemCategoryLevel);
			
			// attributes and children for tier level cell
			skillLevelInput.setAttribute("type","number");
			skillLevelInput.setAttribute("value","0");
			skillLevelInput.setAttribute("onKeyDown","return false");
			skillLevelInput.setAttribute("min","0");
			skillLevelInput.setAttribute("max",skill.tierGroup.length.toString());
			skillLevelInput.setAttribute("onchange","updateSkillLevel(this.getAttribute('value'))");
			skillLevelCell.setAttribute(skillDataIdType, source.name);
			skillLevelCell.setAttribute(skillDataIdCategory, category.name);
			skillLevelCell.setAttribute(skillDataIdSkill, skill.name);
			skillLevelCell.setAttribute(skillDataIdTierLevel, skillLevelInput.getAttribute("value"));
			skillLevelCell.appendChild(skillLevelInput);
			
			// attributes and children for effects cell
			skillEffectsCell.setAttribute(skillDataCellId, skill.name + skillEffectIdSuffx);
			skillEffectsElemNextHead.setAttribute("class","skills-text-element-next-header");
			skillEffectsElemCurrent.setAttribute(skillDataElementId, skill.name + skillEffectsCurrentIdSuffix);
			skillEffectsElemNextBody.setAttribute(skillDataElementId, skill.name + skillEffectsNextIdSuffix);
			skillEffectsElemNextHead.appendChild(skillEffectsElemTextNextHead);
			skillEffectsElemNextBody.appendChild(skillEffectsElemTextNextBody);
			skillEffectsElemCurrent.appendChild(skillEffectsElemTextCurrent);
			skillEffectsCell.appendChild(skillEffectsElemCurrent);
			skillEffectsCell.appendChild(skillEffectsElemNextHead);
			skillEffectsCell.appendChild(skillEffectsElemNextBody);
			
			// attributes and children for skill name and description cell
			skillCell.setAttribute(skillDataCellId, skill.name + skillIdSuffx);
			skillCellElemName.appendChild(skillCellTextElemName);
			skillCellElemDesc.appendChild(skillCellTextElemDesc);
			skillCell.appendChild(skillCellElemName);
			skillCell.appendChild(skillCellElemDesc);
			
			// build row
			skillRow.setAttribute("id", skill.name);
			
			if (categoryRowspan < 1) {
				categoryCell.appendChild(categoryCellText);
				skillRow.appendChild(categoryCell);
			}
			
			skillRow.appendChild(skillCell);
			skillRow.appendChild(skillEffectsCell);
			skillRow.appendChild(skillLevelCell);
			skillRow.appendChild(skillConditionsCell);
			
			categoryRowspan++;
			targetNewBody.appendChild(skillRow);
		});
		
		categoryCell.setAttribute("rowspan",categoryRowspan);
	});
	
	targetNewBody.setAttribute("id",target);
	targetTableBody.parentNode.replaceChild(targetNewBody, targetTableBody);
}

function resetTableBody(tableBodyId) {
	
}

function updateSkillsData() {
	const tablesContainer = document.getElementById('tables-container');
	const elemClassList = document.getElementById("characters-list");
	let selectionCurr = elemClassList.value;
	
	if (selectionCurr !== playerSelectionPrevious) {
		let tableCommon = document.getElementById("common-skills-table");
		let tableClass = document.getElementById("class-skills-table");
		let tableCommonBodyId = "common-skills-table-body";
		let tableClassBodyId = "class-skills-table-body";
		let skillsClass = getSkillType(selectionCurr);
		
		// check common skill table; don't rebuild when popped
		if (!tableCommon.getAttribute("data-table-populated")) {
			let skillsCommon = getSkillType("common");
			populateSkillTable(skillsCommon, tableCommonBodyId,"common-skills-table-label");
			tableCommon.setAttribute("data-table-populated", "");
			console.log(skillsCommon);
		}
		else {
			resetTableBody("common-skills-table-body");
		} 
		
		playerSelectionPrevious = selectionCurr;
		currentSkillPoints = maxSkillPoints;
		populateSkillTable(skillsClass, tableClassBodyId,"class-skills-table-label");
		tableClass.setAttribute("data-table-populated", "");
		
		if (tablesContainer.style.display !== "block") {
			tablesContainer.style.display = "block";
		}
		
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