/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Class block definitions
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
 
class SkillType {
	constructor (name,label,categoryGroups) {
		this.name = name;
		this.label = label;
		this.categoryGroups = categoryGroups;
	}
}

class SkillCategory {
	constructor (name,skillGroup) {
		this.name = name;
		this.skillGroup = skillGroup;
	}
}

class Skill {
	constructor (name,description,category,tierGroup,moreInfo) {
		this.name = name;
		this.description = description;
		this.moreInfo = moreInfo;
		this.tierGroup = tierGroup;
		this.levelMax = tierGroup.length;
	}
}

class SkillTier {
	constructor (level,effect,cost,minLevelPlayer,minLevelCategory,moreInfo) {
		this.level = level;
		this.effect = effect;
		this.cost = cost;
		this.minLevelPlayer = minLevelPlayer;
		this.minLevelCategory = minLevelCategory;
		this.moreInfo = moreInfo;
	}
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Skill Groups and Tiers
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

///////////////////
// Common Skills //
///////////////////

const skillsCommon = new SkillType(
	"common",
	"Common Skills",
	[
		new SkillCategory (
			"Common Skill",
			[
				// Slide Attack //
				new Skill(
					"Slide Attack",
					"Increased chance of taking enemy down when sliding.",
					[
						"The max distance of the slide attack increases as the level of the skill increases.",
						"The max time of execution does not change with changes to the skill level, thus you will cover further max distances in the same amount of time you would cover the default max distance."
					],
					[
						new SkillTier(
							1,
							"Power: 30 Knockdown +30%",
							1,
							-1,
							-1,
							[
								"Slight increase to max movement distance."
							]
						),
						
						new SkillTier(
							2,
							"Power: 34 Knockdown +40%",
							1,
							10,
							-1,
							[
								"Slight increase to max movement distance."
							]
						),
						
						new SkillTier(
							3,
							"Power: 40 Knockdown +55%",
							2,
							20,
							3,
							[
								"Moderate increase to max movement distance."
							]
						),
						
						new SkillTier(
							4,
							"Power: 46 Knockdown +70%",
							3,
							31,
							3,
							[
								"Great increase to max movement distance."
							]
						),
						
						new SkillTier(
							5,
							"Power: 60 Knockdown +100%",
							4,
							40,
							6,
							[
								"Massive increase to max movement distance."
							]
						)
					]
				)
			]
		)
	]
);

////////////////////
// Fighter Skills //
////////////////////
const skillsFighter = new SkillType(
	"fighter",
	"Fighter Skills",
	[
		new SkillCategory (
			"Attack Skill",
			[
				// Cyclone Masher //
				new Skill(
					"Cyclone Masher",
					"Increases duration of aerial attacks. Rapidly press \25A0 to activate.",
					[],
					[
						new SkillTier(
							1,
							"Power: 20 Descent speed -30%",
							1,
							-1,
							-1,
							[]
						),
						
						new SkillTier(
							2,
							"Power: 22 Descent speed -45 Attack range: 105%",
							1,
							10,
							-1,
							[]
						),
						
						new SkillTier(
							3,
							"Power: 23 Descent speed -60 Attack range: 110%",
							2,
							19,
							3,
							[]
						),
						
						new SkillTier(
							4,
							"Power: 25 Descent speed -75 Attack range: 115%",
							3,
							30,
							3,
							[]
						),
						
						new SkillTier(
							5,
							"Power: 30 Descent speed -95 Attack range: 125%",
							5,
							45,
							6,
							[]
						)
					]
				),
				// Shockwave //
				new Skill(
					"Shockwave",
					"Send out ripples that creep along the ground. Activate with \21A5 \002B \25A0.",
					[],
					[
						new SkillTier(
							1,
							"Power: 15 Number of shockwaves: 2",
							1,
							-1,
							-1,
							[]
						),
						
						new SkillTier(
							2,
							"Power: 18 Number of shockwaves: 2",
							1,
							8,
							-1,
							[]
						),
						
						new SkillTier(
							3,
							"Power: 23 Number of shockwaves: 3",
							2,
							16,
							3,
							[]
						),
						
						new SkillTier(
							4,
							"Power: 30 Number of shockwaves: 3",
							3,
							26,
							3,
							[]
						),
						
						new SkillTier(
							5,
							"Power: 45 Number of shockwaves: 4",
							5,
							40,
							6,
							["Vertical reach of shockwaves greatly increased."]
						)
					]
				)
			]
		)
	]
);

const skillsList = [skillsCommon,skillsFighter];

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Functions
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
 
function getSkillType(name) {
	let skillTypeObject = {};
	
	skillsList.forEach((element) => {
		if (element.name === name) {
			skillTypeObject = element;
		}
	});
	return skillTypeObject;
}