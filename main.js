/* * * * * * * * * * *
 * Global Constants
 * * * * * * * * * * */
const characterClassNames = ["Fighter","Amazon","Dwarf","Elf","Sorceress","Wizard"];
const maxSkillPoints = 155;
const resetModalInfoText = 'Do you wish to include "Deep Pockets" when resetting?';

// Naming conventions //
const skillIdSuffx = "-name-desc";
const skillEffectIdSuffx = "-effects";
const skillConditionsIdSuffx = "-conditions";
const skillElemIdSuffixCost = "-cost";
const skillElemIdSuffixPlayer = "-player";
const skillElemIdSuffixCategory = "-category";
const skillEffectsCurrentIdSuffix = "-current";
const skillEffectsNextIdSuffix = "-next";
// Id naming conventions //
const tableCommonBodyId = "common-skills-table-body";
// Data Id naming conventions //
const skillRowDataId = "data-row-id";
const skillDataCellId = "data-cell-id";
const skillDataElementId = "data-elem-id";
const skillDataIdType = "data-skill-type";
const skillDataIdCategory = "data-skill-category";
const skillDataIdCategoryLabel = "data-skill-category-label";
const skillDataIdSkill = "data-skill-name";
// CSS naming conventions //
const inputNonInteractive = "table-input-non-interactable";
const inputSkillLevel = "input-skill-level"
const skillLevelComponents = "input-subcomponent";
const tableContainerClass = "skills-table-container";

/* * * * * * * *
 * Global Vars
 * * * * * * * */
let playerSelectionPrevious = '';
let currentSkillPoints = maxSkillPoints;
let commonSkillTiers = [];

/* * * * * * * * * *
 * Main Functions
 * * * * * * * * * */
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

/**
 * Enable use of specified HTML button elements.
 *
 * WARNING : As of February 2024, removeAttribute() function is buggy on many browsers.
 * Many browsers do not support removal of boolean attributes without values. As such,
 * the code below is a workaround.
 *
 * REVISIT on browser compabitility updates.
 **/
function enableResetButtons() {
	let buttons = document.getElementsByClassName("reset-button");
	
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].setAttribute("disabled","false");
		buttons[i].removeAttribute("disabled");
	}
}

/**
 * Change in input element from element interaction.
 * @param {element} HTML element that triggered the originating event.
 * @param {number} Number value to change the input element value.
 **/
function changeNumberInput(target,value) {
	let elementParent = target.parentElement;
	let elementInput = elementParent.getElementsByTagName("input")[0];
	let newValue = Number(elementInput.getAttribute("value")) + value;
	
	elementInput.setAttribute("value",newValue);
}

/**
 * Calculate total cost of a current level tier.
 * @param {element} HTML element containing and displaying the skill information.
 **/
function calculateCostTotal(inputElement) {
	let skillType = inputElement.getAttribute(skillDataIdType);
	let skillCategory = inputElement.getAttribute(skillDataIdCategory);
	let skillName = inputElement.getAttribute(skillDataIdSkill);
	let runCost = 0;
	
	for (let i = 0; i < Number(inputElement.value); i++) {
		let tier = getSkillTier(skillType,skillCategory,skillName,(i + 1));
		
		runCost += Number(tier.cost);
	}
	
	return runCost;
}

/**
 * Update the input element displaying total points.
 * @param {num} A number value to determine subtracted change.
 * @param {num} A number value to determine additive change.
 * @param {num} A number value for level change.
 **/
function updateTotalCurrentSkillPoints(payment,refund, numberChange) {
	let totalPointsElement = document.getElementById("current-total-points");

	if (numberChange > 0) totalPointsElement.setAttribute("value", Number(totalPointsElement.getAttribute("value")) - payment);
	else totalPointsElement.setAttribute("value", Number(totalPointsElement.getAttribute("value")) + refund);
}

/**
 * Reset the input element displaying total points.
 * @param {num} Default value of 0. A number value used to offset the reset point value.
 **/
function resetTotalCurrentSkillPoints(offset = 0) {
	document.getElementById("current-total-points").setAttribute("value",maxSkillPoints-offset);
}

/**
 * Update the input element displaying effect info.
 * @param {element} The UI element displaying a user's current investment info.
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
 * @param {array[string]} Array of strings containing the new condition text.
 * @param {attribute} The text value of an element's category label.
 **/
function populateSkillConditions(targetElement, source, categoryLabel = "") {
	let conditionVarNames = ["cost","player","category"];
	
	for (let i = 0; i < targetElement.length; i++) {
		if(conditionVarNames[i] === "category") targetElement[i].innerText = processSkillTierPropertiesForOutput(conditionVarNames[i],source[i], categoryLabel);
		else targetElement[i].innerText = processSkillTierPropertiesForOutput(conditionVarNames[i],source[i]);
	}
}

/**
 * Update an input element. 
 * @param {element} The input element.
 * @param {number} An external value change.
 **/
function updateCategoryLevel(element, numberChange) {
	let levelNext = Number(element.getAttribute("value")) + numberChange;
	
	element.setAttribute("value", levelNext);
}

/**
 * Rollback a value update caused by user change on input element. 
 * @param {element} The input element.
 * @param {number} The desired value.
 **/
function rollbackInputValue(element, value) {
	element.value = value;
	element.setAttribute("value",value);
}

/**
 * Update target UI elements to provide user feedback on certain reached limits. 
 * @param {array[elements]} An array of elements.
 **/
function limitTrigger(targets) {
	targets.forEach((element) => {
		if (!element.classList.contains("limiter-triggered")) element.classList.add("limiter-triggered");
	});
}

/**
 * Update target UI elements to provide user feedback on reset of certain limits. 
 * @param {array[elements]} An array of elements.
 **/
function limitTriggerReset(targets) {
	targets.forEach((element) => {
		if (element.classList.contains("limiter-triggered")) element.classList.remove("limiter-triggered");
	});
}

/**
 * Return children specified by a data element id value. 
 * @param {element} The parent element.
 * @param {string} A string representation of the parent data id.
 * @param {string} A string representation of the child data id.
 * @param {string} A string representation of the child data id.
 * @param {string} A string representation of the child data id.
 * @return array of elements (max three elements in array).
 **/
function getFewerChildrenFromParentChildren(parentElem, parentDataId, childDataId1, childDataId2, childDataId3) {
	let targetChildren = new Array(3);
	let filteredChildren = [];
	
	for (const child of parentElem.children) {
		if (child.getAttribute(parentDataId) === childDataId1) {
			targetChildren[0] = child;
		}
		else if (child.getAttribute(parentDataId) === childDataId2) {
			targetChildren[1] = child;
		}
		else if (child.getAttribute(parentDataId) === childDataId3) {
			targetChildren[2] = child;
		}
	}
	
	// foreach filters empty array slots
	targetChildren.forEach((child) => {
		filteredChildren.push(child);
	});
	
	return filteredChildren;
}

/**
 * Change all attributes and UI elements associated with a skill level change event.
 * @param {element} The input element that fired the event.
 **/
function updateSkillLevel(target) {
	let valueChange = Number(target.getAttribute("value"));
	let inputParentCell = target.parentElement;
	let inputElement = inputParentCell.getElementsByTagName("input")[0];
	let skillLevelMin = Number(inputElement.getAttribute("min"));
	let skillLevelMax = Number(inputElement.getAttribute("max"));
	let inputValue = Number(inputElement.getAttribute("value"));
	
	if ((inputValue + valueChange) >= skillLevelMin && (inputValue + valueChange) <= skillLevelMax) {
		let totalPointsElement = document.getElementById("current-total-points");
		let skillRowId = inputElement.getAttribute(skillDataIdSkill);
		let skillType = inputElement.getAttribute(skillDataIdType);
		let skillCategory = inputElement.getAttribute(skillDataIdCategory);
		let skillRow = document.getElementById(skillRowId);
		let categoryLevelElem = document.getElementById(skillCategory).getElementsByTagName("input")[0];
		let skillPointsCurrent = Number(totalPointsElement.getAttribute("value"));
		let tierLevelPrev = Number(inputElement.getAttribute("value"));
		let tierLevel = tierLevelPrev + valueChange;
		let tierLevelNext = tierLevelPrev + valueChange + 1;
		let tierLevelChange = tierLevel - tierLevelPrev;
		let tierCurrent = {};
		let tierNext = {};
		let limiterAffectedElems = [totalPointsElement.parentElement,categoryLevelElem.parentElement];
		let runCost = 0;
		
		// Prepare relevant data references.
		tierCurrent = getSkillTier(skillType,skillCategory,skillRowId,tierLevel);
		tierNext = getSkillTier(skillType,skillCategory,skillRowId,tierLevelNext);
		
		// Run validity checks
		if ((tierLevelChange > 0 && skillPointsCurrent >= Number(tierCurrent.cost)) || tierLevelChange < 0) {
			if (tierLevelChange > 0 && Number(categoryLevelElem.getAttribute("value")) >= Number(tierCurrent.minLevelCategory) || tierLevelChange < 0) {
				// Target UI table cell elements
				let targetCells =
				getFewerChildrenFromParentChildren(
				skillRow,
				skillDataCellId,
				skillRowId + skillEffectIdSuffx,
				skillRowId + skillConditionsIdSuffx
				);
				// Skill effect elements
				let elemEffects = 
				getFewerChildrenFromParentChildren(
				targetCells[0],
				skillDataElementId,
				skillRowId + skillEffectsCurrentIdSuffix,
				skillRowId + skillEffectsNextIdSuffix
				);
				// Purchase conditions elements
				let elemConditionsCurrent =
				getFewerChildrenFromParentChildren(
				targetCells[1],
				skillDataElementId,
				skillRowId + skillElemIdSuffixCost,
				skillRowId + skillElemIdSuffixPlayer,
				skillRowId + skillElemIdSuffixCategory
				);
				let conditionsNew = [tierNext.cost, tierNext.minLevelPlayer, tierNext.minLevelCategory];
				
				// Update the target elements
				inputElement.setAttribute("value", tierLevel);
				populateSkillConditions(elemConditionsCurrent, conditionsNew, inputElement.getAttribute(skillDataIdCategoryLabel));
				populateSkillEffects(elemEffects[0], elemEffects[1], tierCurrent.effect, tierNext.effect);
				updateCategoryLevel(categoryLevelElem,tierLevelChange);
				updateTotalCurrentSkillPoints(Number(tierCurrent.cost),Number(tierNext.cost),tierLevelChange);
				limitTriggerReset(limiterAffectedElems);
			}
			else {
				limitTrigger([limiterAffectedElems[1]]);
			}
		}
		else {
			limitTrigger([limiterAffectedElems[0]]);
		}
	}
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

/**
 * Reset all table element content..
 * @param {array[string]} An array of ids attributed to the target HTML table body elements.
 * @param {array[string]} An array of ids attributed to any HTML table body elements to be adjusted after reset.
 **/
function resetTableBody(tableBodyIds, adjustedIds = [], adjustedOffset = []) {
	let totalPointsElement = document.getElementById("current-total-points");
	let adjustedInputElements = [];
	let adjustedCategoryElements = [];
	let adjustedCategoryLevelOffsets = [];
	let totalOffset = 0;
	
	for (let id in tableBodyIds) {
		let targetBody = document.getElementById(tableBodyIds[id]);
		let targetRows = targetBody.children;
		let categoryLevelInputs = targetBody.getElementsByClassName(inputNonInteractive);
		let categoryInputParents = [];
		let totalCategoryOffset = 0;
		
		for (let i = 0; i < categoryLevelInputs.length; i++) {
			categoryInputParents.push(categoryLevelInputs[i].parentElement);
			categoryLevelInputs[i].setAttribute("value", 0);
		}
		
		for (let i = 0; i < targetRows.length; i++) {
			let inputElement = targetRows[i].getElementsByClassName(inputSkillLevel)[0];
			let rowId = targetRows[i].getAttribute("id");
			let skillType = inputElement.getAttribute(skillDataIdType);
			let skillCategory = inputElement.getAttribute(skillDataIdCategory);
			let skillName = inputElement.getAttribute(skillDataIdSkill);
			let tierCurrent = {};
			let tierNext = {};
			let categoryLevelElem = document.getElementById(skillCategory).getElementsByTagName("input")[0];
			
			// Adjust for any skill exceptions
			if (adjustedIds.length > 0 && adjustedIds.includes(rowId)) {
				let index = adjustedIds.indexOf(rowId);
				
				if (adjustedOffset.length < 1) adjustedOffset.push(Number(inputElement.getAttribute("value")));
				
				tierCurrent = getSkillTier(skillType,skillCategory,rowId,Number(adjustedOffset[index]));
				tierNext = getSkillTier(skillType,skillCategory,skillName,Number(adjustedOffset[index]) + 1);
				inputElement.setAttribute("value", adjustedOffset[index]);
				totalOffset += calculateCostTotal(inputElement);
				updateCategoryLevel(categoryLevelElem,adjustedOffset[index]);
			}
			else {
				tierCurrent = getSkillTier(skillType,skillCategory,rowId,0);
				tierNext = getSkillTier(skillType,skillCategory,skillName,1);
				inputElement.setAttribute("value", 0);
			}
			
			// Target UI table cell elements
			let targetCells =
			getFewerChildrenFromParentChildren(
			targetRows[i],
			skillDataCellId,
			rowId + skillEffectIdSuffx,
			rowId + skillConditionsIdSuffx
			);
			// Skill effect elements
			let elemEffects = 
			getFewerChildrenFromParentChildren(
			targetCells[0],
			skillDataElementId,
			rowId + skillEffectsCurrentIdSuffix,
			rowId + skillEffectsNextIdSuffix
			);
			// Purchase conditions elements
			let elemConditionsCurrent =
			getFewerChildrenFromParentChildren(
			targetCells[1],
			skillDataElementId,
			rowId + skillElemIdSuffixCost,
			rowId + skillElemIdSuffixPlayer,
			rowId + skillElemIdSuffixCategory
			);
			let conditionsNew = [tierNext.cost, tierNext.minLevelPlayer, tierNext.minLevelCategory];
			
			populateSkillConditions(elemConditionsCurrent, conditionsNew, inputElement.getAttribute(skillDataIdCategoryLabel));
			populateSkillEffects(elemEffects[0], elemEffects[1], tierCurrent.effect, tierNext.effect);
		}
		
		limitTriggerReset(categoryInputParents);
	}
	
	resetTotalCurrentSkillPoints(totalOffset);
	limitTriggerReset([totalPointsElement.parentElement]);
}

/**
 * Dynamically populate table elements and content based on passed parameters.
 * @param {object} The object containing the source of table data.
 * @param {element} The target HTML table parent element.
 * @param {string} The id attributed to an HTML element that acts as the head of the parent table element.
 **/
function populateSkillTable(source, target, headLabelId) {
	let targetTableBody = document.getElementById(target);
	let targetNewBody = document.createElement("tbody");
	let tableHeadLabel = document.getElementById(headLabelId);
	
	tableHeadLabel.innerText = source.label;
	
	source.categoryGroup.forEach((category) => {
		let categoryRowspan = 0;
		let categoryCell = document.createElement("td");
		let categoryElemName = document.createElement("p");
		let categoryElemLevelLabelContainer = document.createElement("form");
		let categoryElemLevelLabel = document.createElement("label");
		let categoryElemLevelOutput = document.createElement("input");
		let categoryTextName = document.createTextNode(category.label + " Skill");
		let categoryTextLevelLabel = document.createTextNode("Current LV: ");
		
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
			let skillEffectsElemTextCurrent = document.createTextNode("--");
			let skillEffectsElemTextNextHead = document.createTextNode("Next");
			let skillEffectsElemTextNextBody = document.createTextNode(skill.tierGroup[0].effect);
			let skillConditionsTextCost = document.createTextNode(processSkillTierPropertiesForOutput("cost",skill.tierGroup[0].cost));
			let skillConditionsTextPlayerLevel = document.createTextNode(processSkillTierPropertiesForOutput("player",skill.tierGroup[0].minLevelPlayer));
			let skillConditionsTextCategoryLevel = document.createTextNode(processSkillTierPropertiesForOutput("category",skill.tierGroup[0].minLevelCategory,category.label));
			let skillLevelInput = document.createElement("input");
			let skillLevelElemInc = document.createElement("button");
			let skillLevelElemDec = document.createElement("button");
			let skillLevelElemIncArrow = document.createElement("div");
			let skillLevelElemDecArrow = document.createElement("div");
			
			// attributes for purchase conditions cell
			skillConditionsCell.setAttribute(skillDataCellId, skill.name + skillConditionsIdSuffx);
			skillConditionsElemCost.setAttribute(skillDataElementId, skill.name + skillElemIdSuffixCost);
			skillConditionsElemPlayerLevel.setAttribute(skillDataElementId, skill.name + skillElemIdSuffixPlayer);
			skillConditionsElemCategoryLevel.setAttribute(skillDataElementId, skill.name + skillElemIdSuffixCategory);
			skillConditionsCell.classList.add("skills-table-wide-cell");
			skillConditionsElemCost.appendChild(skillConditionsTextCost);
			skillConditionsElemPlayerLevel.appendChild(skillConditionsTextPlayerLevel);
			skillConditionsElemCategoryLevel.appendChild(skillConditionsTextCategoryLevel);
			elementBuilderInnerElements(skillConditionsCell,[skillConditionsElemCost,skillConditionsElemPlayerLevel,skillConditionsElemCategoryLevel]);
			
			// attributes and children for tier level cell
			skillLevelInput.setAttribute("type","text");
			skillLevelInput.setAttribute("readonly","");
			skillLevelInput.setAttribute("min","0");
			skillLevelInput.setAttribute("value","0");
			skillLevelInput.setAttribute("max",skill.tierGroup.length.toString());
			skillLevelInput.setAttribute(skillDataIdType, source.name);
			skillLevelInput.setAttribute(skillDataIdCategory, category.name);
			skillLevelInput.setAttribute(skillDataIdCategoryLabel, category.label);
			skillLevelInput.setAttribute(skillDataIdSkill, skill.name);
			skillLevelElemInc.setAttribute("type","button");
			skillLevelElemDec.setAttribute("type","button");
			skillLevelElemInc.setAttribute("value","1");
			skillLevelElemDec.setAttribute("value","-1");
			skillLevelInput.classList.add(inputSkillLevel);
			skillLevelElemInc.classList.add(skillLevelComponents);
			skillLevelElemDec.classList.add(skillLevelComponents);
			skillLevelElemIncArrow.classList.add("triangle_up");
			skillLevelElemDecArrow.classList.add("triangle_down");
			skillLevelElemInc.appendChild(skillLevelElemIncArrow);
			skillLevelElemDec.appendChild(skillLevelElemDecArrow);
			skillLevelElemInc.addEventListener("click",function(e) {
				updateSkillLevel(e.target);
			});
			skillLevelElemDec.addEventListener("click",function(e) {
				updateSkillLevel(e.target);
			});
			elementBuilderInnerElements(skillLevelCell,[skillLevelElemInc,skillLevelInput,skillLevelElemDec]);
			
			// attributes and children for effects cell
			skillEffectsCell.setAttribute(skillDataCellId, skill.name + skillEffectIdSuffx);
			skillEffectsElemNextHead.setAttribute("class","skills-text-element-next-header");
			skillEffectsElemCurrent.setAttribute(skillDataElementId, skill.name + skillEffectsCurrentIdSuffix);
			skillEffectsElemNextBody.setAttribute(skillDataElementId, skill.name + skillEffectsNextIdSuffix);
			skillEffectsCell.classList.add("skills-table-widest-cell");
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
				categoryElemLevelOutput.setAttribute("type","text");
				categoryElemLevelOutput.setAttribute("value","0");
				categoryElemLevelOutput.setAttribute("min","0");
				categoryElemLevelOutput.setAttribute("readonly","");
				categoryElemLevelOutput.classList.add(inputNonInteractive);
				categoryElemLevelLabel.appendChild(categoryTextLevelLabel);
				categoryElemLevelLabel.appendChild(categoryElemLevelOutput);
				categoryElemName.appendChild(categoryTextName);
				elementBuilderInnerElements(categoryCell, [categoryElemName,categoryElemLevelLabel]);
				skillRow.appendChild(categoryCell);
			}
			
			elementBuilderInnerElements(skillRow,[skillCell,skillLevelCell,skillConditionsCell,skillEffectsCell]);
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
	const elemClassList = document.getElementById("characters-list");
	let tableContainers = document.getElementsByClassName(tableContainerClass);
	let cssContainerObj = [];
	let cssContainerDisplay = [];
	let selectionCurr = elemClassList.value;
	
	for (let i = 0; i < tableContainers; i++) {
		cssContainerObj.push(window.getComputedStyle(tableContainers[i]));
		cssContainerDisplay.push(cssContainerObj[i].getPropertyValue("display"));
	}
	
	if (selectionCurr !== playerSelectionPrevious) {
		let tableCommon = document.getElementById("common-skills-table");
		let tableClass = document.getElementById("class-skills-table");
		let tableClassBodyId = "class-skills-table-body";
		let skillsClass = getSkillType(selectionCurr);
		
		// check common skill table; don't rebuild when popped
		if (!tableCommon.getAttribute("data-table-populated")) {
			let skillsCommon = getSkillType("common");
			populateSkillTable(skillsCommon, tableCommonBodyId,"common-skills-table-label");
			tableCommon.setAttribute("data-table-populated", "");
		}
		else {
			resetTableBody(["common-skills-table-body"]);
		} 
		
		playerSelectionPrevious = selectionCurr;
		populateSkillTable(skillsClass, tableClassBodyId,"class-skills-table-label");
		tableClass.setAttribute("data-table-populated", "");
		
		for (let i = 0; i < tableContainers.length; i++) {
			if (cssContainerDisplay !== "block") {
				tableContainers[i].style.display = "block";
			}
		}
		
		resetTotalCurrentSkillPoints();
		enableResetButtons();
	}
}
