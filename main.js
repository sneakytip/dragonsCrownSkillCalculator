/* * * * * * * * * * *
 * Global Constants  *
 * * * * * * * * * * */
const characterClassNames = ["Fighter","Amazon","Dwarf","Elf","Sorceress","Wizard"];
const maxSkillPoints = 155;

// Naming conventions //
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
// More naming conventions //
const skillDataIdType = "data-skill-type";
const skillDataIdCategory = "data-skill-category";
const skillDataIdCategoryLabel = "data-skill-category-label";
const skillDataIdSkill = "data-skill-name";
const skillDataIdTierLevel = "data-skill-tier";
const skillDataIdCategoryLevel = "data-skill-category-level";

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
/**
 * Format parameters for UI display.
 * @param {string} Text to match the desired format case.
 * @param {string} A value that is preserved in formatting.
 * @param {string} Null by default; a text label value that is preserved in formatting.
 * @return {string}
 **/
function processSkillTierPropertiesForOutput(property, value, categoryLabel = null) {
	switch(property) {
		case "effect":
			return "Next: " + value;
			break;
		case "cost":
			if (value > 0) {
				return "Skill point cost: " + value + " point(s)";
			}
			else return "";
			break;
		case "player":
			if (value > 0) {
				return "Player LV must be at least LV " + value + ".";
			}
			else return "";
			break;
		case "category":
			if (value > 0 && categoryLabel) {
				return "The " + categoryLabel + " category skill must be LV " + value + ".";
			}
			else return "";
			break;
		default:
		return "";
	}
}

function resetTableBody(tableBodyId) {
	
}

/**
 * Update the input element displaying total points.
 * @param {num} A number value to determine subtracted change.
 * @param {num} A number value to determine additive change.
 * @param {num} A number value for level change.
 **/
function updateTotalCurrentSkillPoints(payment,refund, numberChange) {
	let pointsElem = document.getElementById("current-total-points");
	
	if (numberChange > 0) pointsElem.setAttribute("value", Number(pointsElem.getAttribute("value")) - payment);
	else pointsElem.setAttribute("value", Number(pointsElem.getAttribute("value")) + refund);
}

/**
 * Reset the input element displaying total points.
 **/
function resetTotalCurrentSkillPoints() {
	document.getElementById("current-total-points").setAttribute("value",maxSkillPoints);
}

/**
 * Update the input element displaying effect info.
 * @param {element} The UI element displaying a user's current point investment info.
 * @param {element} The UI element displaying a user's next investment info.
 * @param {string} The text value to be used for the current info element's inner text.
 * @param {string} The text value to be used for the next info element's inner text.
 **/
function populateSkillEffects(elemCurrent, elemNext, textCurrent, textNext) {
	elemCurrent.innerText = textCurrent;
	elemNext.innerText = textNext;
}

/**
 * Update the UI elements showing skill conditions.
 * @param {element} The element containing current condition text.
 * @param {array[node]} Array of text nodes containing the new condition text.
 * @param {attribute} The text value of an element's category label.
 **/
function populateSkillConditions(elemConditionsCurrent, elemConditionsNew, categoryLabel) {
	let conditionVarNames = ["cost","player","category"];
	
	for (let i = 0; i < elemConditionsCurrent.length; i++) {
		if(conditionVarNames[i] === "category") elemConditionsCurrent[i].innerText = processSkillTierPropertiesForOutput(conditionVarNames[i],elemConditionsNew[i], categoryLabel);
		else elemConditionsCurrent[i].innerText = processSkillTierPropertiesForOutput(conditionVarNames[i],elemConditionsNew[i]);
	}
}

/**
 * Update the first input element nested within a parent element. 
 * @param {element} The parent element.
 * @param {number} An external value change.
 **/
function updateCategoryLevel(parentElem, numberChange) {
	let childElem = parentElem.getElementsByTagName("input")[0];
	let levelNext = Number(childElem.getAttribute("value")) + numberChange;
	
	childElem.setAttribute("value", levelNext);
}

function updateSkillLevel(inputElement) {
	let skillRowId = inputElement.getAttribute(skillDataIdSkill);
	let skillType = inputElement.getAttribute(skillDataIdType);
	let skillCategory = inputElement.getAttribute(skillDataIdCategory);
	let skillLevelMax = Number(inputElement.getAttribute("max"));
	let skillRow = document.getElementById(skillRowId);
	let categoryCell = document.getElementById(skillCategory);
	let cellDescriptions = {};
	let cellConditions = {};
	let tierLevelPrev = Number(inputElement.getAttribute("value"));
	let tierLevel = Number(inputElement.value);
	let tierLevelNext = tierLevel + 1;
	let tierLevelChange = tierLevel - tierLevelPrev;
	let elemEffectCurrent = {};
	let elemEffectNext = {};
	let tierCurrent = {};
	let tierNext = {};
	let elemConditionsCurrent = [,,];
	let elemConditionsNew = [,,];
	
	inputElement.setAttribute("value", tierLevel);
	
	// Search for the relevant elements to target for UI display updates
	for (const child of skillRow.children) {
		if (child.getAttribute(skillDataCellId) === skillRowId + skillEffectIdSuffx) {
			cellDescriptions = child;
		}
		else if (child.getAttribute(skillDataCellId) === skillRowId + skillConditionsIdSuffx) {
			cellConditions = child;
		}
	}
	
	// Skill effects
	for (const child of cellDescriptions.children) {
		if (child.getAttribute(skillDataElementId) === skillRowId + skillEffectsCurrentIdSuffix) {
			elemEffectCurrent = child;
		}
		else if (child.getAttribute(skillDataElementId) === skillRowId + skillEffectsNextIdSuffix) {
			elemEffectNext = child;
		}
	}
	
	// Purchase conditions
	for (const child of cellConditions.children) {
		if (child.getAttribute(skillDataElementId) === skillRowId + skillElemIdSuffixCost) {
			elemConditionsCurrent[0] = child;
		}
		else if (child.getAttribute(skillDataElementId) === skillRowId + skillElemIdSuffixPlayer) {
			elemConditionsCurrent[1] = child;
		}
		else if (child.getAttribute(skillDataElementId) === skillRowId + skillElemIdSuffixCategory) {
			elemConditionsCurrent[2] = child;
		}
	}
	
	if (tierLevel > 0) {
		tierCurrent = getSkillTier(skillType,skillCategory,skillRowId,tierLevel);
	}
	else {
		tierCurrent.effect = "";
	}
	
	if (tierLevelNext > skillLevelMax) {
		tierNext.cost = "";
		tierNext.minLevelPlayer = "";
		tierNext.minLevelCategory = "";
		tierNext.effect = "--";
	}
	else {
		tierNext = getSkillTier(skillType,skillCategory,skillRowId,tierLevelNext);
	}
	elemConditionsNew = [tierNext.cost, tierNext.minLevelPlayer, tierNext.minLevelCategory];
	
	// Update the target elements
	populateSkillConditions(elemConditionsCurrent, elemConditionsNew, inputElement.getAttribute(skillDataIdCategoryLabel));
	populateSkillEffects(elemEffectCurrent, elemEffectNext, tierCurrent.effect, tierNext.effect);
	updateCategoryLevel(categoryCell,tierLevelChange);
	updateTotalCurrentSkillPoints(Number(tierCurrent.cost),Number(tierNext.cost),tierLevelChange);
}

/**
 * Dynamic HTML element-child tree builder.
 * @param {element} elemParent The HTML parent element.
 * @param {array[elements]} childElemArray An array of elements/nodes which will be put into the cell.
 * Elements/nodes are appended from array starting from first index.
 * @return {element} HTML element.
 **/
function elementBuilderInnerElements(parentElem, childElemArray) {
	childElemArray.forEach((child) => {
		parentElem.appendChild(child);
	});
	
	return parentElem;
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
		let categoryElemLabel = document.createElement("p");
		let categoryElemLevelLabel = document.createElement("label");
		let categoryElemLevelOutput = document.createElement("input");
		let categoryTextLabel = document.createTextNode(category.label + " Skill");
		let categoryTextLevelLabel = document.createTextNode("Current LV: ");
		let categoryTextLevel = document.createTextNode(0);
		
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
			elementBuilderInnerElements(skillConditionsCell,[skillConditionsElemCost,skillConditionsElemPlayerLevel,skillConditionsElemCategoryLevel]);
			
			// attributes and children for tier level cell
			skillLevelInput.setAttribute("type","number");
			skillLevelInput.setAttribute("onKeyDown","return false");
			skillLevelInput.setAttribute("min","0");
			skillLevelInput.setAttribute("value","0");
			skillLevelInput.setAttribute("max",skill.tierGroup.length.toString());
			skillLevelInput.setAttribute(skillDataIdType, source.name);
			skillLevelInput.setAttribute(skillDataIdCategory, category.name);
			skillLevelInput.setAttribute(skillDataIdCategoryLabel, category.label);
			skillLevelInput.setAttribute(skillDataIdSkill, skill.name);
			skillLevelCell.appendChild(skillLevelInput);
			skillLevelCell.addEventListener("input",function(e) {
				updateSkillLevel(e.target);
			});
			
			// attributes and children for effects cell
			skillEffectsCell.setAttribute(skillDataCellId, skill.name + skillEffectIdSuffx);
			skillEffectsElemNextHead.setAttribute("class","skills-text-element-next-header");
			skillEffectsElemCurrent.setAttribute(skillDataElementId, skill.name + skillEffectsCurrentIdSuffix);
			skillEffectsElemNextBody.setAttribute(skillDataElementId, skill.name + skillEffectsNextIdSuffix);
			skillEffectsElemNextHead.appendChild(skillEffectsElemTextNextHead);
			skillEffectsElemNextBody.appendChild(skillEffectsElemTextNextBody);
			skillEffectsElemCurrent.appendChild(skillEffectsElemTextCurrent);
			elementBuilderInnerElements(skillEffectsCell,[skillEffectsElemCurrent,skillEffectsElemNextHead,skillEffectsElemNextBody]);
			
			// attributes and children for skill name and description cell
			skillCell.setAttribute(skillDataCellId, skill.name + skillIdSuffx);
			skillCellElemName.appendChild(skillCellTextElemName);
			skillCellElemDesc.appendChild(skillCellTextElemDesc);
			elementBuilderInnerElements(skillCell,[skillCellElemName,skillCellElemDesc]);
			
			// build row
			skillRow.setAttribute("id", skill.name);
			
			if (categoryRowspan < 1) {
				// category cell
				categoryCell.setAttribute("id", category.name);
				categoryElemLevelOutput.setAttribute("type","number");
				categoryElemLevelOutput.setAttribute("value","0");
				categoryElemLevelOutput.setAttribute("min","0");
				categoryElemLevelOutput.setAttribute("readonly","");
				categoryElemLevelOutput.setAttribute("class","table-input-non-interactable");
				categoryElemLevelOutput.appendChild(categoryTextLevel);
				elementBuilderInnerElements(categoryElemLevelLabel,[categoryTextLevelLabel,categoryElemLevelOutput]);
				categoryElemLabel.appendChild(categoryTextLabel);
				elementBuilderInnerElements(categoryCell, [categoryElemLabel,categoryElemLevelLabel,categoryElemLevelOutput]);
				skillRow.appendChild(categoryCell);
			}
			
			elementBuilderInnerElements(skillRow,[skillCell,skillEffectsCell,skillLevelCell,skillConditionsCell]);
			categoryRowspan++;
			targetNewBody.appendChild(skillRow);
		});
		
		categoryCell.setAttribute("rowspan",categoryRowspan);
	});
	
	targetNewBody.setAttribute("id",target);
	targetTableBody.parentNode.replaceChild(targetNewBody, targetTableBody);
}

/**
 * Initializes the tabe body content and data
 **/
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
		
		resetTotalCurrentSkillPoints();
		
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