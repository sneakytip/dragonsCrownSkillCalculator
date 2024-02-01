/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Class block definitions
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
 
class SkillType {
	constructor (name,label,categoryGroup) {
		this.name = name;
		this.label = label;
		this.categoryGroup = categoryGroup;
	}
}

class SkillCategory {
	constructor (name,label,skillGroup) {
		this.name = name;
		this.label = label;
		this.skillGroup = skillGroup;
	}
}

class Skill {
	constructor (name,label,description,tierGroup,moreInfo) {
		this.name = name;
		this.label = label;
		this.description = description;
		this.tierGroup = tierGroup;
		this.moreInfo = moreInfo;
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
			"common",
			"Common",
			[
				/// Slide Attack ///
				new Skill(
					"slide",
					"Slide Attack",
					"Increased chance of taking enemy down when sliding (" + String.fromCharCode(0x21a7) + " + " + String.fromCharCode(0x25A0) + ").",
					[
						new SkillTier(
							1,
							"Power: 30" + String.fromCharCode(0x2001) + "Knockdown +30%",
							1,
							-1,
							-1,
							[
								"Slight increase to max movement distance."
							]
						),
						
						new SkillTier(
							2,
							"Power: 34" + String.fromCharCode(0x2001) + "Knockdown +40%",
							1,
							10,
							-1,
							[
								"Slight increase to max movement distance."
							]
						),
						
						new SkillTier(
							3,
							"Power: 40" + String.fromCharCode(0x2001) + "Knockdown +55%",
							2,
							20,
							3,
							[
								"Moderate increase to max movement distance."
							]
						),
						
						new SkillTier(
							4,
							"Power: 46" + String.fromCharCode(0x2001) + "Knockdown +70%",
							3,
							31,
							3,
							[
								"Great increase to max movement distance."
							]
						),
						
						new SkillTier(
							5,
							"Power: 60" + String.fromCharCode(0x2001) + "Knockdown +100%",
							4,
							40,
							6,
							[
								"Massive increase to max movement distance."
							]
						)
					],
					[
						"The max distance of the slide attack increases as the level of the skill increases.",
						"The max time of execution does not change with changes to the skill level, thus you will cover further max distances in the same amount of time you would cover the default max distance."
					],
				),
				/// Wealth to Health ///
				new Skill(
					"wealthHealth",
					"Wealth to Health",
					"Picking up coins recovers HP.",
					[
						new SkillTier(
							1,
							"HP recovered per coin: 2",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"HP recovered per coin: 3",
							1,
							5,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"HP recovered per coin: 5",
							2,
							14,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"HP recovered per coin: 7",
							3,
							27,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"HP recovered per coin: 10",
							4,
							42,
							6,
							[""]
						)
					],
					[""],
				),
				/// Money is Power ///
				new Skill(
					"moneyPower",
					"Money is Power",
					"Picking up coins adds to your score.",
					[
						new SkillTier(
							1,
							"Score obtained +10",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Score obtained +20",
							1,
							8,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Score obtained +40",
							2,
							17,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Score obtained +60",
							3,
							29,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Score obtained +100",
							4,
							43,
							6,
							[""]
						)
					],
					[""],
				),
				/// Vitality Boost ///
				new Skill(
					"vitalityBoost",
					"Vitality Boost",
					"Increases your max HP.",
					[
						new SkillTier(
							1,
							"Max HP +20",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Max HP +35",
							1,
							7,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Max HP +50",
							1,
							13,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Max HP +65",
							2,
							19,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Max HP +80",
							2,
							25,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Max HP +100",
							3,
							31,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Max HP 120",
							3,
							38,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Max HP +145",
							4,
							45,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Max HP +170",
							4,
							52,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Max HP +200",
							6,
							59,
							12,
							[""]
						)
					],
					[""],
				),
				/// Nutritionist ///
				new Skill(
					"nutritionist",
					"Nutritionist",
					"Increases the healing effectiveness of food.",
					[
						new SkillTier(
							1,
							"Recovery Amount +20%",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Recovery Amount +25%",
							1,
							11,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Recovery Amount +30%",
							2,
							24,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Recovery Amount +35%",
							3,
							37,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Recovery Amount +50%",
							4,
							51,
							6,
							[""]
						)
					],
					[""],
				),
				/// Maintenance ///
				new Skill(
					"maintenance",
					"Maintenance",
					"Grants a chance that using a temporary weapon won't decrease the number of uses.",
					[
						new SkillTier(
							1,
							"Chance that # of uses won't deplete: 20%",
							1,
							6,
							0,
							[""]
						),
						
						new SkillTier(
							2,
							"Chance that # of uses won't deplete: 25%",
							1,
							13,
							0,
							[""]
						),
						
						new SkillTier(
							3,
							"Chance that # of uses won't deplete: 30%",
							2,
							23,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Chance that # of uses won't deplete: 35%",
							3,
							34,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Chance that # of uses won't deplete: 50%",
							4,
							47,
							6,
							[""]
						)
					],
					[""],
				),
				/// Adroit Hands ///
				new Skill(
					"adroitHands",
					"Adroit Hands",
					"Reduces cooldown time in between using items.",
					[
						new SkillTier(
							1,
							"Item use cooldown -10%",
							1,
							9,
							0,
							[""]
						),
						
						new SkillTier(
							2,
							"Item use cooldown -15%",
							1,
							16,
							0,
							[""]
						),
						
						new SkillTier(
							3,
							"Item use cooldown -20%",
							2,
							22,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Item use cooldown -25%",
							2,
							29,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Item use cooldown -30%",
							3,
							36,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Item use cooldown -35%",
							3,
							44,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Item use cooldown -50%",
							5,
							53,
							9,
							[""]
						)
					],
					[""],
				),
				/// Evasion ///
				new Skill(
					"evasion",
					"Evasion",
					"Increases the number of times you can evade ( R1 ) in a row.",
					[
						new SkillTier(
							1,
							"Number of evasions +1",
							2,
							12,
							0,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of evasions +2",
							3,
							32,
							3,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of evasions +3",
							4,
							52,
							6,
							[""]
						)
					],
					[""],
				),
				/// Deep Pockets ///
				new Skill(
					"deepPockets",
					"Deep Pockets",
					"Increases the number of item slots in Bags.",
					[
						new SkillTier(
							1,
							"Number of Bag slots: 8",
							2,
							15,
							0,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of Bag slots: 9",
							4,
							30,
							3,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of Bag slots: 10",
							6,
							50,
							6,
							[""]
						)
					],
					[""],
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
		/// Attack Skills ///
		new SkillCategory (
			"attack",
			"Attack",
			[
				/// Cyclone Masher ///
				new Skill(
					"cycloneMasher",
					"Cyclone Masher",
					"Increases duration of aerial attacks. Rapidly press " + String.fromCharCode(0x25A0) + " to activate.",
					[
						new SkillTier(
							1,
							"Power: 20" + String.fromCharCode(0x2001) + "Descent speed -30%",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 22" + String.fromCharCode(0x2001) + "Descent speed -45" + String.fromCharCode(0x2001) + "Attack range: 105%",
							1,
							10,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 23" + String.fromCharCode(0x2001) + "Descent speed -60" + String.fromCharCode(0x2001) + "Attack range: 110%",
							2,
							19,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 25" + String.fromCharCode(0x2001) + "Descent speed -75" + String.fromCharCode(0x2001) + "Attack range: 115%",
							3,
							30,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 30" + String.fromCharCode(0x2001) + "Descent speed -95" + String.fromCharCode(0x2001) + "Attack range: 125%",
							5,
							45,
							6,
							[""]
						)
					],
					[""]
				),
				/// Shockwave ///
				new Skill(
					"shockwave",
					"Shockwave",
					"Send out ripples that creep along the ground. Activate with " + String.fromCharCode(0x21A5) + " + " + String.fromCharCode(0x25A0) + ".",
					[
						new SkillTier(
							1,
							"Power: 15" + String.fromCharCode(0x2001) + "Number of shockwaves: 2",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 18" + String.fromCharCode(0x2001) + "Number of shockwaves: 2",
							1,
							8,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 23" + String.fromCharCode(0x2001) + "Number of shockwaves: 3",
							2,
							16,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 30" + String.fromCharCode(0x2001) + "Number of shockwaves: 3",
							3,
							26,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 45" + String.fromCharCode(0x2001) + "Number of shockwaves: 4",
							5,
							40,
							6,
							["Vertical reach of shockwaves greatly increased."]
						)
					],
					[""]
				)
			]
		),
		/// Defense Skills ///
		new SkillCategory (
			"defense",
			"Defense",
			[
				/// Cover Allies ///
				new Skill(
					"coverAll",
					"Cover Allies",
					"Hold " + String.fromCharCode(0x25A0) + " on the ground to use your shield to protect allies and temporarily increase your attack power upon successful block.",
					[
						new SkillTier(
							1,
							"Max ATK Damage Increase: +40%",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Effect range: 125%" + String.fromCharCode(0x2001) + "Max ATK Damage Increase: +70%",
							2,
							17,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Effect range: 200%" + String.fromCharCode(0x2001) + "Max ATK Damage Increase: +100%",
							3,
							36,
							3,
							[""]
						)
					],
					[""]
				),
				/// Reflex Guard ///
				new Skill(
					"reflexGuard",
					"Reflex Guard",
					"Grants chance to automatically guard when attacked",
					[
						new SkillTier(
							1,
							"Chance of auto-defense: 25%",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Chance of auto-defense: 30%",
							1,
							7,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Chance of auto-defense: 35%",
							2,
							16,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Chance of auto-defense: 40%",
							2,
							27,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Chance of auto-defense: 50%",
							3,
							35,
							6,
							[""]
						)
					],
					[""]
				)
			]
		)
	]
);

const skillsList = [skillsCommon,skillsFighter];

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Functions
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/**
 * Get a skill type object from the master data set.
 * @param {string} Text to match against the SkillType property "name" value.
 * @return {object} The SkillType object.
 **/
function getSkillType(name) {
	let skillTypeObject = {};
	
	skillsList.forEach((classObj) => {
		if (classObj.name === name) {
			skillTypeObject = classObj;
		}
	});
	return skillTypeObject;
}

/**
 * Get a skill tier object from the master data set.
 * @param {string} Text to match against the SkillType property "name" value. 
 * @param {string} Text to match against the SkillCategory property "name" value. 
 * @param {string} Text to match against the Skill property "name" value. 
 * @return {string} A SkillTier object.
 **/
function getSkillTier(className,categoryName,skillName,levelNumber) {
	let targetTier = {};
	
	skillsList.forEach((classObj) => {
		if (classObj.name === className) {
			classObj.categoryGroup.forEach((category) => {
				if (category.name === categoryName) {
					category.skillGroup.forEach((skill) => {
						if (skill.name === skillName) {
							skill.tierGroup.forEach((tier) => {
								if (tier.level === levelNumber) {
									targetTier = tier;
								}
							});
						}
					});
				}
			});
		}
	});
	
	return targetTier;
}
