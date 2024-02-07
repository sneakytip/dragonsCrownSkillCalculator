/* * * * * * * *
 * Global Consts
 * * * * * * * */
const spacerLarge = String.fromCharCode(0x2001) + String.fromCharCode(0x2001) + String.fromCharCode(0x2001);

/* * * * * * * * * * * * *
 * Class block definitions
 * * * * * * * * * * * * */
 
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

/* * * * * * * * * * * * *
 * Skill Groups and Tiers
 * * * * * * * * * * * * */

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
							"Power: 30" + spacerLarge + "Knockdown +30%",
							1,
							-1,
							-1,
							[
								"Slight increase to max movement distance."
							]
						),
						
						new SkillTier(
							2,
							"Power: 34" + spacerLarge + "Knockdown +40%",
							1,
							10,
							-1,
							[
								"Slight increase to max movement distance."
							]
						),
						
						new SkillTier(
							3,
							"Power: 40" + spacerLarge + "Knockdown +55%",
							2,
							20,
							3,
							[
								"Moderate increase to max movement distance."
							]
						),
						
						new SkillTier(
							4,
							"Power: 46" + spacerLarge + "Knockdown +70%",
							3,
							31,
							3,
							[
								"Great increase to max movement distance."
							]
						),
						
						new SkillTier(
							5,
							"Power: 60" + spacerLarge + "Knockdown +100%",
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
					"pockets",
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
					"Increases duration of aerial attacks. Rapidly press ■ to activate.",
					[
						new SkillTier(
							1,
							"Power: 20" + spacerLarge + "Descent speed -30%",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 22" + spacerLarge + "Descent speed -45" + spacerLarge + "Attack range: 105%",
							1,
							10,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 23" + spacerLarge + "Descent speed -60" + spacerLarge + "Attack range: 110%",
							2,
							19,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 25" + spacerLarge + "Descent speed -75" + spacerLarge + "Attack range: 115%",
							3,
							30,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 30" + spacerLarge + "Descent speed -95" + spacerLarge + "Attack range: 125%",
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
					"Send out ripples that creep along the ground. Activate with ↥ + ■.",
					[
						new SkillTier(
							1,
							"Power: 15" + spacerLarge + "Number of shockwaves: 2",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 18" + spacerLarge + "Number of shockwaves: 2",
							1,
							8,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 23" + spacerLarge + "Number of shockwaves: 3",
							2,
							16,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 30" + spacerLarge + "Number of shockwaves: 3",
							3,
							26,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 45" + spacerLarge + "Number of shockwaves: 4",
							5,
							40,
							6,
							["Vertical reach of shockwaves greatly increased."]
						)
					],
					[""]
				),
				/// Judgement ///
				new Skill(
					"judgement",
					"Judgement",
					"Add a shockwave to your diving attack. Press ↧ + ■ in midair to activate.",
					[
						new SkillTier(
							1,
							"Power: 40",
							1,
							3,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 44" + spacerLarge + "Shockwave range: 120%",
							1,
							12,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 46" + spacerLarge + "Shockwave range: 140%",
							2,
							21,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 48" + spacerLarge + "Shockwave range: 160%",
							2,
							30,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 50" + spacerLarge + "Shockwave range: 180%",
							3,
							39,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Power: 52" + spacerLarge + "Shockwave range: 200%",
							3,
							48,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Power: 60" + spacerLarge + "Shockwave range: 300%",
							5,
							57,
							9,
							["Number of shockwaves: 5"]
						)
					],
					[""]
				),
				/// Rebuke ///
				new Skill(
					"rebuke",
					"Rebuke",
					"Power Smash and its shockwaves are strengthened. Press ● on the ground.",
					[
						new SkillTier(
							1,
							"Power: 440" + spacerLarge + "Shockwave Power: 165",
							1,
							6,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 480" + spacerLarge + "Shockwave Power: 180" + spacerLarge + "Shockwave range: 115%",
							1,
							14,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 520" + spacerLarge + "Shockwave Power: 195" + spacerLarge + "Shockwave range: 130%",
							2,
							22,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 560" + spacerLarge + "Shockwave Power: 210" + spacerLarge + "Shockwave range: 145%",
							2,
							31,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 600" + spacerLarge + "Shockwave Power: 225" + spacerLarge + "Shockwave range: 160%",
							3,
							40,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Power: 640" + spacerLarge + "Shockwave Power: 240" + spacerLarge + "Shockwave range: 185%",
							3,
							49,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Power: 800" + spacerLarge + "Shockwave Power: 300" + spacerLarge + "Shockwave range: 285%",
							5,
							58,
							9,
							[""]
						)
					],
					[""]
				),
				/// Tempest Edge ///
				new Skill(
					"tempest",
					"Tempest Edge",
					"Create a powerful storm of sword attacks by rapidly pressing ■.",
					[
						new SkillTier(
							1,
							"Power: 30" + spacerLarge + "Duration: 1.5s",
							3,
							15,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 33" + spacerLarge + "Duration: 1.9s" + spacerLarge + "Attack range: 103%",
							1,
							20,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 36" + spacerLarge + "Duration: 2.2" + spacerLarge + "Attack range: 106%",
							1,
							25,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 41" + spacerLarge + "Duration: 2.4s" + spacerLarge + "Attack range: 110%",
							2,
							30,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 45" + spacerLarge + "Duration: 2.7s" + spacerLarge + "Attack range: 114%",
							2,
							35,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Power: 50" + spacerLarge + "Duration: 2.9s" + spacerLarge + "Attack range: 119%",
							3,
							40,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Power: 54" + spacerLarge + "Duration: 3.2s" + spacerLarge + "Attack range: 124%",
							3,
							45,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Power: 60" + spacerLarge + "Duration: 3.4s" + spacerLarge + "Attack range: 130%",
							4,
							50,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Power: 66" + spacerLarge + "Duration: 3.7s" + spacerLarge + "Attack range: 136%",
							4,
							55,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Power: 75" + spacerLarge + "Duration: 4.2s" + spacerLarge + "Attack range: 150%",
							6,
							60,
							12,
							[""]
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
					"Hold ■ on the ground to use your shield to protect allies and temporarily increase your attack power upon successful block.",
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
							"Effect range: 125%" + spacerLarge + "Max ATK Damage Increase: +70%",
							2,
							17,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Effect range: 200%" + spacerLarge + "Max ATK Damage Increase: +100%",
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
					"Grants chance to automatically guard when attacked.",
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
				),
				/// Bash ///
				new Skill(
					"bash",
					"Bash",
					"Press ■ after blocking an attack to counterattack and stun with your shield.",
					[
						new SkillTier(
							1,
							"Power: 20" + spacerLarge + "Stun rate: 20%" + spacerLarge + "Bash Dealt damage +10%",
							1,
							4,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 24" + spacerLarge + "Stun rate: 25%" + spacerLarge + "Bash Dealt damage +20%",
							1,
							9,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 28" + spacerLarge + "Stun rate: 30%" + spacerLarge + "Bash Dealt damage +40%",
							1,
							14,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 32" + spacerLarge + "Stun rate: 35%" + spacerLarge + "Bash Dealt damage +60%",
							2,
							19,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 36" + spacerLarge + "Stun rate: 40%" + spacerLarge + "Bash Dealt damage +80%",
							2,
							24,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Power: 40" + spacerLarge + "Stun rate: 45%" + spacerLarge + "Bash Dealt damage +100%",
							2,
							29,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Power: 44" + spacerLarge + "Stun rate: 50%" + spacerLarge + "Bash Dealt damage +120%",
							3,
							34,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Power: 48" + spacerLarge + "Stun rate: 55%" + spacerLarge + "Bash Dealt damage +140%",
							3,
							40,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Power: 52" + spacerLarge + "Stun rate: 60%" + spacerLarge + "Bash Dealt damage +160%",
							4,
							47,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Power: 60" + spacerLarge + "Stun rate: 80%" + spacerLarge + "Bash Dealt damage +200%",
							6,
							54,
							12,
							[""]
						)
					],
					[""]
				),
				/// Missile Reflect ///
				new Skill(
					"reflect",
					"Missile Reflect",
					"Grants a chance to reflect projectile weapons when guarding with your shield.",
					[
						new SkillTier(
							1,
							"Chance of reflection: 30%",
							1,
							11,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Chance of reflection: 35%" + spacerLarge + "Reflected shot Dealt damage +20%",
							1,
							16,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Chance of reflection: 40%" + spacerLarge + "Reflected shot Dealt damage +40%",
							1,
							21,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Chance of reflection: 45%" + spacerLarge + "Reflected shot Dealt damage +65%",
							2,
							27,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Chance of reflection: 50%" + spacerLarge + "Reflected shot Dealt damage +90%",
							2,
							32,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Chance of reflection: 55%" + spacerLarge + "Reflected shot Dealt damage +115%",
							2,
							37,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Chance of reflection: 65%" + spacerLarge + "Reflected shot Dealt damage +140%",
							3,
							43,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Chance of reflection: 75%" + spacerLarge + "Reflected shot Dealt damage +165%",
							3,
							48,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Chance of reflection: 90%" + spacerLarge + "Reflected shot Dealt damage +200%",
							4,
							53,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Chance of reflection: 100%" + spacerLarge + "Reflected shot Dealt damage +250%",
							6,
							58,
							12,
							[""]
						)
					],
					[""]
				)
			]
		),
		/// Supplemental Skills ///
		new SkillCategory (
			"supplemental",
			"Supplemental",
			[
				/// Distraction ///
				new Skill(
					"distraction",
					"Distraction",
					"Call enemies' attention to yourself. Use the Skill item Distraction.",
					[
						new SkillTier(
							1,
							"Uses: 5" + spacerLarge + "Enemies distracted: 5" + spacerLarge + "Dealt damage +10%",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 5" + spacerLarge + "Enemies distracted: 6" + spacerLarge + "Dealt damage +20%",
							2,
							12,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 5" + spacerLarge + "Enemies distracted: 9" + spacerLarge + "Dealt damage +30%",
							3,
							24,
							3,
							[""]
						)
					]
				),
				/// Sacrifice ///
				new Skill(
					"sacrifice",
					"Sacrifice",
					"Take damage inflicted on your allies. Use the Skill item Sacrifice.",
					[
						new SkillTier(
							1,
							"Uses: 3" + spacerLarge + "Damage taken -30%",
							1,
							5,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 3" + spacerLarge + "Damage taken -40%",
							1,
							11,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 3" + spacerLarge + "Damage taken -50%",
							2,
							19,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Uses: 3" + spacerLarge + "Damage taken -60%",
							3,
							29,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Uses: 3" + spacerLarge + "Damage taken -70%",
							4,
							42,
							6,
							[""]
						)
					]
				),
				/// Shield Tactics ///
				new Skill(
					"shieldTactics",
					"Shield Tactics",
					"Boost your shield's effectiveness and make it harder to be moved.",
					[
						new SkillTier(
							1,
							"Guard resistance +20%" + spacerLarge + "Shield durability loss -5%",
							1,
							9,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Guard resistance +30%" + spacerLarge + "Shield durability loss -7%",
							1,
							13,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Guard resistance +40%" + spacerLarge + "Shield durability loss -10%",
							2,
							18,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Guard resistance +50%" + spacerLarge + "Shield durability loss -13%",
							2,
							23,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Guard resistance +60%" + spacerLarge + "Shield durability loss -16%",
							3,
							28,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Guard resistance +70%" + spacerLarge + "Shield durability loss -19%",
							3,
							33,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Guard resistance +85%" + spacerLarge + "Shield durability loss -25%",
							4,
							38,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Guard resistance +100%" + spacerLarge + "Shield durability loss -31%",
							4,
							44,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Guard resistance +120%" + spacerLarge + "Shield durability loss -40%",
							5,
							50,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Guard resistance +150%" + spacerLarge + "Shield durability loss -50%",
							6,
							56,
							12,
							[""]
						)
					]
				)
			]
		)
	]
);

///////////////////
// Amazon Skills //
///////////////////
const skillsAmazon = new SkillType(
	"amazon",
	"Amazon Skills",
	[
		/// Air Skills ///
		new SkillCategory (
			"air",
			"Air",
			[
				/// Stun Wave ///
				new Skill(
					"stunWave",
					"Stun Wave",
					"A diving attack that creates a shockwave. ↧ + ■ in midair to use.",
					[
						new SkillTier(
							1,
							"Power: 20",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 24" + spacerLarge + "Shockwave distance 110%",
							1,
							6,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 28" + spacerLarge + "Shockwave distance 120%",
							2,
							12,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 32" + spacerLarge + "Shockwave distance 130%",
							2,
							18,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 36" + spacerLarge + "Shockwave distance 140%",
							3,
							25,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Power: 40" + spacerLarge + "Shockwave distance 150%",
							3,
							33,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Power: 60" + spacerLarge + "Shockwave distance 190%",
							5,
							42,
							9,
							[""]
						)
					]
				),
				/// Neck Splitter ///
				new Skill(
					"neckSplitter",
					"Neck Splitter",
					"Double jump + ↧ + ■ for a diving attack that's effective against downed enemies.",
					[
						new SkillTier(
							1,
							"Power: 150" + spacerLarge + "Dealt damage +100%",
							1,
							3,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 155" + spacerLarge + "Dealt damage +105%",
							1,
							8,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 162" + spacerLarge + "Dealt damage +110%",
							1,
							14,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 169" + spacerLarge + "Dealt damage +115%",
							2,
							20,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 176" + spacerLarge + "Dealt damage +120%",
							2,
							26,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Power: 182" + spacerLarge + "Dealt damage +130%",
							3,
							32,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Power: 189" + spacerLarge + "Dealt damage +140%",
							3,
							38,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Power: 196" + spacerLarge + "Dealt damage +155%",
							4,
							44,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Power: 203" + spacerLarge + "Dealt damage +170%",
							4,
							50,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Power: 230" + spacerLarge + "Dealt damage +200%",
							6,
							56,
							12,
							[""]
						)
					]
				),
				/// Deadly Revolution ///
				new Skill(
					"revolution",
					"Deadly Revolution",
					"Increase directional changes and damage for midair ■ attacks with ↤↦.",
					[
						new SkillTier(
							1,
							"Power: 18" + spacerLarge + "Direction changes: 2" + spacerLarge + "Dealt damage +30%",
							1,
							11,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 20" + spacerLarge + "Direction changes: 2" + spacerLarge + "Dealt damage +35%",
							1,
							17,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 22" + spacerLarge + "Direction changes: 2" + spacerLarge + "Dealt damage +45%",
							2,
							23,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 24" + spacerLarge + "Direction changes: 3" + spacerLarge + "Dealt damage +55%",
							2,
							29,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 26" + spacerLarge + "Direction changes: 3" + spacerLarge + "Dealt damage +70%",
							3,
							36,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Power: 28" + spacerLarge + "Direction changes: 3" + spacerLarge + "Dealt damage +85%",
							3,
							45,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Power: 30" + spacerLarge + "Direction changes: 4" + spacerLarge + "Dealt damage +100%",
							5,
							54,
							9,
							[""]
						)
					]
				)
			]
		),
		/// Ground Skills ///
		new SkillCategory (
			"ground",
			"Ground",
			[
				/// Brutal Drive ///
				new Skill(
					"brutalDrive",
					"Brutal Drive",
					"Power Smash and its shockwaves are strengthened. Activate with ●.",
					[
						new SkillTier(
							1,
							"Power: 440" + spacerLarge + "Shockwave Power: 165",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 480" + spacerLarge + "Shockwave Power: 180" + spacerLarge + "Shockwave range: 105%",
							1,
							6,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 520" + spacerLarge + "Shockwave Power: 195" + spacerLarge + "Shockwave range: 110%",
							1,
							12,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 560" + spacerLarge + "Shockwave Power: 210" + spacerLarge + "Shockwave range: 115%",
							2,
							18,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 600" + spacerLarge + "Shockwave Power: 225" + spacerLarge + "Shockwave range: 120%",
							2,
							24,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Power: 640" + spacerLarge + "Shockwave Power: 248" + spacerLarge + "Shockwave range: 125%",
							3,
							30,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Power: 680" + spacerLarge + "Shockwave Power: 270" + spacerLarge + "Shockwave range: 130%",
							3,
							37,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Power: 740" + spacerLarge + "Shockwave Power: 300" + spacerLarge + "Shockwave range: 135%",
							4,
							44,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Power: 800" + spacerLarge + "Shockwave Power: 330" + spacerLarge + "Shockwave range: 140%",
							4,
							51,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Power: 900" + spacerLarge + "Shockwave Power: 400" + spacerLarge + "Shockwave range: 190%",
							6,
							60,
							12,
							[""]
						)
					]
				),
				/// Parry ///
				new Skill(
					"parry",
					"Parry",
					"Hold ■ on the ground to parry enemy attacks, add temporary invincibility, and trigger Berserk.",
					[
						new SkillTier(
							1,
							"Power: 100" + spacerLarge + "Duration of invincibility: 2.0s",
							1,
							4,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 110" + spacerLarge + "Duration of invincibility: 2.3s",
							1,
							9,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 120" + spacerLarge + "Duration of invincibility: 2.7s",
							1,
							14,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 130" + spacerLarge + "Duration of invincibility: 3.0s",
							2,
							20,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 140" + spacerLarge + "Duration of invincibility: 3.3s",
							2,
							26,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Power: 150" + spacerLarge + "Duration of invincibility: 3.7s",
							2,
							32,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Power: 160" + spacerLarge + "Duration of invincibility: 4.0s",
							3,
							38,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Power: 180" + spacerLarge + "Duration of invincibility: 4.3s",
							3,
							45,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Power: 190" + spacerLarge + "Duration of invincibility: 4.7s",
							3,
							52,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Power: 250" + spacerLarge + "Duration of invincibility: 5.0s",
							4,
							59,
							12,
							[""]
						)
					]
				),
				/// Punisher ///
				new Skill(
					"punisher",
					"Punisher",
					"Deal multiple four-hit combos on the ground. Will increase damage and chance of Berserk.",
					[
						new SkillTier(
							1,
							"Power: 20",
							1,
							10,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 40",
							2,
							21,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 60",
							3,
							40,
							3,
							[""]
						)
					]
				),
				/// Brandish ///
				new Skill(
					"brandish",
					"Brandish",
					"A spinning attack with invincibility. Press ↤↦ + ■ after a four-hit combo on the ground.",
					[
						new SkillTier(
							1,
							"Power: 100" + spacerLarge + "# of spins: 1",
							3,
							15,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 110" + spacerLarge + "# of spins: 2",
							1,
							22,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 120" + spacerLarge + "# of spins: 3",
							2,
							30,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 130" + spacerLarge + "# of spins: 4",
							3,
							39,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 150" + spacerLarge + "# of spins: 5",
							5,
							48,
							6,
							[""]
						)
					]
				)
			]
		),
		/// Supplemental Skills ///
		new SkillCategory (
			"supplemental",
			"Supplemental",
			[
				/// Berserk ///
				new Skill(
					"berserk",
					"Berserk",
					"Attack an enemy multiple times consecutively for increased attack power and speed.",
					[
						new SkillTier(
							1,
							"Dealt damage +10% while Berserk",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Dealt damage +15% while Berserk",
							1,
							7,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Dealt damage +20% while Berserk",
							1,
							13,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Dealt damage +25% while Berserk",
							2,
							19,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Dealt damage +30% while Berserk",
							2,
							25,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Dealt damage +35% while Berserk",
							3,
							31,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Dealt damage +40% while Berserk",
							3,
							37,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Dealt damage +45% while Berserk",
							4,
							43,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Dealt damage +50% while Berserk",
							4,
							49,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Dealt damage +60% while Berserk",
							6,
							55,
							12,
							[""]
						)
					]
				),
				/// Adrenaline ///
				new Skill(
					"adrenaline",
					"Adrenaline",
					"Strength increases as HP decreases.",
					[
						new SkillTier(
							1,
							"Dealt damage +30% while HP decreased",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Dealt damage +40% while HP decreased",
							1,
							6,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Dealt damage +50% while HP decreased",
							2,
							12,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Dealt damage +60% while HP decreased",
							2,
							20,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Dealt damage +70% while HP decreased",
							3,
							28,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Dealt damage +80% while HP decreased",
							3,
							38,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Dealt damage +100% while HP decreased",
							4,
							51,
							9,
							[""]
						)
					]
				),
				/// War Paint ///
				new Skill(
					"paint",
					"War Paint",
					"Summon clones that unleash multiple attacks. (Use War Paint)",
					[
						new SkillTier(
							1,
							"Uses: 3" + spacerLarge + "Number of clones: 1" + spacerLarge + "Duration: 10s",
							2,
							5,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 3" + spacerLarge + "Number of clones: 1" + spacerLarge + "Duration: 15s",
							3,
							27,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 3" + spacerLarge + "Number of clones: 2" + spacerLarge + "Duration: 20s",
							4,
							46,
							3,
							[""]
						)
					]
				),
				/// Incite Rage ///
				new Skill(
					"rage",
					"Incite Rage",
					"Exchange HP to trigger Berserk. (Use Incite Rage)",
					[
						new SkillTier(
							1,
							"Uses: 3" + spacerLarge + "Current HP decreased by 50%" + spacerLarge + "Duration +3s",
							1,
							9,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 4" + spacerLarge + "Current HP decreased by 60%" + spacerLarge + "Duration +6s",
							2,
							20,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 5" + spacerLarge + "Current HP decreased by 70%" + spacerLarge + "Duration +12s",
							3,
							34,
							3,
							[""]
						)
					]
				),
				/// Iron Will///
				new Skill(
					"will",
					"Iron Will",
					"Exhange HP to temporarily ignore knockback and take 1 damage from all attacks. (Use Iron Will)",
					[
						new SkillTier(
							1,
							"Number of uses: 3" + spacerLarge + "Time effective: 8s",
							1,
							13,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 3" + spacerLarge + "Time effective: 12s",
							1,
							21,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 4" + spacerLarge + "Time effective: 12s",
							2,
							29,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Number of uses: 4" + spacerLarge + "Time effective: 16s",
							3,
							40,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Number of uses: 5" + spacerLarge + "Time effective: 20s",
							5,
							52,
							6,
							[""]
						)
					]
				)
			]
		)
	]
);

//////////////////
// Dwarf Skills //
//////////////////
const skillsDwarf = new SkillType(
	"dwarf",
	"Dwarf Skills",
	[
		/// Attack Skills ///
		new SkillCategory (
			"attack",
			"Attack",
			[
				/// Power Bomb ///
				new Skill(
					"powerBomb",
					"Power Bomb",
					"Adds shockwaves to throwing attacks.",
					[
						new SkillTier(
							1,
							"Dealt damage +30% to throws.",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Dealt damage +45%" + spacerLarge + "Shockwave range: 105%",
							1,
							6,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Dealt damage +60%" + spacerLarge + "Shockwave range: 110%",
							1,
							11,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Dealt damage +75%" + spacerLarge + "Shockwave range: 115%",
							2,
							16,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Dealt damage +90%" + spacerLarge + "Shockwave range: 120%",
							2,
							22,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Dealt damage +110%" + spacerLarge + "Shockwave range: 125%",
							3,
							28,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Dealt damage +130%" + spacerLarge + "Shockwave range: 130%",
							3,
							34,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Dealt damage +160%" + spacerLarge + "Shockwave range: 135%",
							4,
							40,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Dealt damage +190%" + spacerLarge + "Shockwave range: 140%",
							4,
							47,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Dealt damage +250%" + spacerLarge + "Shockwave range: 180%",
							5,
							55,
							12,
							[""]
						)
					]
				),
				/// Lethal Fists ///
				new Skill(
					"fists",
					"Lethal Fists",
					"Increases the damage dealt for all bare-fisted attacks.",
					[
						new SkillTier(
							1,
							"Dealt damage +20% to barehanded attacks",
							1,
							-1,
							-1,
							["Bare-handed attack range for normal four-hit combo increased (shown as small wind gusts emanating from punches)."]
						),
						
						new SkillTier(
							2,
							"Dealt damage +40% to barehanded attacks",
							1,
							7,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Dealt damage +60% to barehanded attacks",
							1,
							12,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Dealt damage +80% to barehanded attacks",
							2,
							18,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Dealt damage +100% to barehanded attacks",
							2,
							23,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Dealt damage +120% to barehanded attacks",
							3,
							29,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Dealt damage +140% to barehanded attacks",
							3,
							35,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Dealt damage +160% to barehanded attacks",
							4,
							41,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Dealt damage +180% to barehanded attacks",
							4,
							48,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Dealt damage +250% to barehanded attacks",
							5,
							56,
							12,
							[""]
						)
					]
				),
				/// Eagle Dive ///
				new Skill(
					"eagleDive",
					"Eagle Dive",
					"A midair glide attack. (Double jump and ⨯).",
					[
						new SkillTier(
							1,
							"Allows glide attacks",
							1,
							3,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Drop bombs during glide attacks",
							1,
							10,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power of bombs: 70" + spacerLarge + "Bombs: 4",
							2,
							19,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power of bombs: 80" + spacerLarge + "Bombs: 5",
							3,
							30,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power of bombs: 90" + spacerLarge + "Bombs: 6",
							5,
							42,
							6,
							[""]
						)
					]
				),
				/// Grand Smash ///
				new Skill(
					"grandSmash",
					"Grand Smash",
					"A powerful attack which requires the temporary loss of your weapon. Activate with Power Smash. (●)",
					[
						new SkillTier(
							1,
							"Power: 110" + spacerLarge + "Power (Lightning): 36",
							1,
							9,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 120" + spacerLarge + "Power (Lightning): 39",
							1,
							17,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 135" + spacerLarge + "Power (Lightning): 42",
							2,
							27,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 150" + spacerLarge + "Power (Lightning): 47",
							3,
							39,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 170" + spacerLarge + "Power (Lightning): 55",
							5,
							53,
							6,
							[""]
						)
					]
				),
				/// Frenzy ///
				new Skill(
					"frenzy",
					"Frenzy",
					"A powerful rush attack. Activate by rapidly pressing ■.",
					[
						new SkillTier(
							1,
							"Power: 40" + spacerLarge + "Duration: 1.5s",
							3,
							15,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 45" + spacerLarge + "Duration: 2.0s",
							1,
							25,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 50" + spacerLarge + "Duration: 2.5s",
							2,
							36,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 60" + spacerLarge + "Duration: 3.0s",
							3,
							48,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 70" + spacerLarge + "Duration: 4.0s",
							5,
							60,
							6,
							[""]
						)
					]
				)
			]
		),
		/// Tools Skills ///
		new SkillCategory (
			"tools",
			"Tools",
			[
				/// Bomb Satchel ///
				new Skill(
					"satchel",
					"Bomb Satchel",
					"Use a Bomb Satchel item to carry around and use bombs.",
					[
						new SkillTier(
							1,
							"Number of uses: 4",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 6",
							1,
							8,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 8",
							2,
							20,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Number of uses: 10",
							3,
							33,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Number of uses: 15",
							5,
							46,
							6,
							[""]
						)
					]
				),
				/// Fire Barrel ///
				new Skill(
					"barrel",
					"Fire Barrel",
					"Use a Fire Barrel item to produce an exploding barrel that can be picked up and hurled.",
					[
						new SkillTier(
							1,
							"Number of uses: 3",
							1,
							9,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 4",
							1,
							13,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 5",
							2,
							24,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Number of uses: 6",
							3,
							38,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Number of uses: 9",
							5,
							52,
							6,
							[""]
						)
					]
				),
				/// Magma Infusion ///
				new Skill(
					"infusion",
					"Magma Infusion",
					"Use a Lava Bracer item to add fire properties to any attack.",
					[
						new SkillTier(
							1,
							"Number of uses: 3" + spacerLarge + "Duration: 15s",
							1,
							10,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 4" + spacerLarge + "Duration: 18s",
							1,
							17,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 5" + spacerLarge + "Duration: 21s",
							2,
							25,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Number of uses: 6" + spacerLarge + "Duration: 25s",
							3,
							34,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Number of uses: 12" + spacerLarge + "Duration: 35s",
							5,
							45,
							6,
							[""]
						)
					]
				),
				/// Powder Mastery ///
				new Skill(
					"mastery",
					"Powder Mastery",
					"Increases damage of fire-enhanced physical attacks.",
					[
						new SkillTier(
							1,
							"Fire-enhanced physical attacks Dealt damage +20%",
							1,
							14,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Fire-enhanced physical attacks Dealt damage +25%",
							1,
							19,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Fire-enhanced physical attacks Dealt damage +30%",
							1,
							24,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Fire-enhanced physical attacks Dealt damage +35%",
							2,
							29,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Fire-enhanced physical attacks Dealt damage +40%",
							2,
							34,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Fire-enhanced physical attacks Dealt damage +50%",
							3,
							39,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Fire-enhanced physical attacks Dealt damage +60%",
							3,
							44,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Fire-enhanced physical attacks Dealt damage +70%",
							4,
							49,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Fire-enhanced physical attacks Dealt damage +80%",
							4,
							54,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Fire-enhanced physical attacks Dealt damage +100%",
							5,
							59,
							12,
							[""]
						)
					]
				)
			]
		),
		/// Supplemental Skills ///
		new SkillCategory (
			"supplemental",
			"Supplemental",
			[
				/// Trinket Maniac ///
				new Skill(
					"trinket",
					"Trinket Maniac",
					"Heal HP and equipment durability when picking up score items.",
					[
						new SkillTier(
							1,
							"HP Recovered +2" + spacerLarge + "Durability recovery +1",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"HP Recovered +3" + spacerLarge + "Durability recovery +1",
							1,
							6,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"HP Recovered +4" + spacerLarge + "Durability recovery +1",
							1,
							11,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"HP Recovered +5" + spacerLarge + "Durability recovery +2",
							2,
							16,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"HP Recovered +6" + spacerLarge + "Durability recovery +2",
							2,
							21,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"HP Recovered +7" + spacerLarge + "Durability recovery +2",
							2,
							26,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"HP Recovered +8" + spacerLarge + "Durability recovery +3",
							3,
							32,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"HP Recovered +9" + spacerLarge + "Durability recovery +3",
							3,
							38,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"HP Recovered +10" + spacerLarge + "Durability recovery +3",
							4,
							45,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"HP Recovered +15" + spacerLarge + "Durability recovery +5",
							5,
							51,
							12,
							[""]
						)
					]
				),
				/// Rock Skin ///
				new Skill(
					"rockSkin",
					"Rock Skin",
					"Increased defense while pumped up. Activate by holding ■.",
					[
						new SkillTier(
							1,
							"Damage taken -20% during Pump Up",
							1,
							5,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Damage taken -25% during Pump Up",
							1,
							13,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Damage taken -30% during Pump Up",
							2,
							22,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Damage taken -35% during Pump Up",
							3,
							33,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Damage taken -50% during Pump Up",
							5,
							46,
							6,
							[""]
						)
					]
				),
				/// Toughness ///
				new Skill(
					"toughness",
					"Toughness",
					"Smaller attacks won't cause you to flinch.",
					[
						new SkillTier(
							1,
							"Damage resistance: 30",
							1,
							12,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Damage resistance: 45",
							1,
							20,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Damage resistance: 60",
							2,
							30,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Damage resistance: 80",
							3,
							41,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Damage resistance: 120",
							5,
							54,
							6,
							[""]
						)
					]
				)
			]
		)
	]
);

////////////////
// Elf Skills //
////////////////
const skillsElf = new SkillType(
	"elf",
	"Elf Skills",
	[
		/// Bow and arrow Skills ///
		new SkillCategory (
			"bow",
			"Bow and arrow",
			[
				/// Power Shot ///
				new Skill(
					"powerShot",
					"Power Shot",
					"Charge an arrow to unleash a powerful wind shot. Hold ● and then release ● to shoot.",
					[
						new SkillTier(
							1,
							"Power: 210",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 220" + spacerLarge + "Shockwave range 105%",
							1,
							5,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 230" + spacerLarge + "Shockwave range 110%",
							1,
							11,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 240" + spacerLarge + "Shockwave range 115%",
							2,
							17,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 250" + spacerLarge + "Shockwave range 120%",
							2,
							24,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Power: 260" + spacerLarge + "Shockwave range 125%",
							3,
							31,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Power: 270" + spacerLarge + "Shockwave range 130%",
							3,
							38,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Power: 280" + spacerLarge + "Shockwave range 135%",
							4,
							45,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Power: 290" + spacerLarge + "Shockwave range 140%",
							4,
							52,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Power: 320" + spacerLarge + "Shockwave range 170%",
							6,
							60,
							12,
							[""]
						)
					]
				),
				/// Rapid Fire ///
				new Skill(
					"rapid",
					"Rapid Fire",
					"Quickly loose a volley of arrows. Increase number of arrows with higher skill levels.",
					[
						new SkillTier(
							1,
							"Shots in Volley +1",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Shots in Volley +2",
							2,
							9,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Shots in Volley +3",
							3,
							18,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Shots in Volley +4",
							5,
							30,
							3,
							[""]
						)
					]
				),
				/// Spacious Quiver ///
				new Skill(
					"quiver",
					"Spacious Quiver",
					"Increase the number of arrows you can carry.",
					[
						new SkillTier(
							1,
							"Arrow max +2",
							1,
							3,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Arrow max +4",
							1,
							12,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Arrow max +7",
							2,
							23,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Arrow max +10",
							3,
							36,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Arrow max +15",
							5,
							50,
							6,
							[""]
						)
					]
				),
				/// Impact Arrows ///
				new Skill(
					"impact",
					"Impact Arrows",
					"Fire an arrow that produces a shockwave. Higher skill levels boost range and power.",
					[
						new SkillTier(
							1,
							"Power: 50" + spacerLarge + "Shockwave range: 105%",
							1,
							8,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Power: 65" + spacerLarge + "Shockwave range: 110%",
							1,
							14,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Power: 80" + spacerLarge + "Shockwave range: 115%",
							2,
							20,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Power: 95" + spacerLarge + "Shockwave range: 120%",
							2,
							27,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Power: 110" + spacerLarge + "Shockwave range: 125%",
							3,
							33,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Power: 125" + spacerLarge + "Shockwave range: 130%",
							3,
							40,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Power: 175" + spacerLarge + "Shockwave range: 150%",
							5,
							49,
							9,
							[""]
						)
					]
				),
				/// Clone Strikes ///
				new Skill(
					"clone",
					"Clone Strikes",
					"Shoot more arrows when using crouched charge attacks and when shooting while dashing.",
					[
						new SkillTier(
							1,
							"Multiple shots +1",
							1,
							15,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Multiple shots +2",
							2,
							26,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Multiple shots +3",
							3,
							39,
							-1,
							[""]
						),
						
						new SkillTier(
							4,
							"Multiple shots +4",
							5,
							53,
							3,
							[""]
						)
					]
				)
			]
		),
		/// Tools Skills ///
		new SkillCategory (
			"tools",
			"Tools",
			[
				/// Toxic Extract ///
				new Skill(
					"toxic",
					"Toxic Extract",
					"Use the Toxic Extract to grant arrow and dagger attacks poison properties. (Use again to deactivate.)",
					[
						new SkillTier(
							1,
							"Number of uses: 20",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 25",
							1,
							7,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 30",
							2,
							16,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Number of uses: 35",
							3,
							25,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Number of uses: 50",
							5,
							35,
							6,
							[""]
						)
					]
				),
				/// Holdout Dagger ///
				new Skill(
					"dagger",
					"Holdout Dagger",
					"Use Holdout Dagger to produce a dagger to attack with.",
					[
						new SkillTier(
							1,
							"Number of uses: 3",
							1,
							4,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 4",
							1,
							10,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 5",
							2,
							19,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Number of uses: 6",
							2,
							30,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Number of uses: 9",
							3,
							46,
							6,
							[""]
						)
					]
				),
				/// Salamander Oil ///
				new Skill(
					"oil",
					"Salamander Oil",
					"Use the Salamander Oil to grant arrow and dagger attacks fire properties. (Use again to deactivate.)",
					[
						new SkillTier(
							1,
							"Number of uses: 20",
							1,
							13,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 25",
							1,
							22,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 30",
							2,
							33,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Number of uses: 35",
							3,
							44,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Number of uses: 50",
							5,
							57,
							6,
							[""]
						)
					]
				)
			]
		),
		/// Supplemental Skills ///
		new SkillCategory (
			"supplemental",
			"Supplemental",
			[
				/// Elemental Lore ///
				new Skill(
					"lore",
					"Elemental Lore",
					"Use spirit magic to attack. Activate by holding ■.",
					[
						new SkillTier(
							1,
							"Enables Spirit magic use",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Spirit magic elemental Dealt damage +20%",
							1,
							6,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Spirit magic elemental Dealt damage +30%",
							1,
							11,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Spirit magic elemental Dealt damage +40%",
							2,
							16,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Spirit magic elemental Dealt damage +50%",
							2,
							21,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Spirit magic elemental Dealt damage +60%",
							2,
							26,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Spirit magic elemental Dealt damage +70%",
							3,
							32,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Spirit magic elemental Dealt damage +80%",
							3,
							37,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Spirit magic elemental Dealt damage +90%",
							4,
							43,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Spirit magic elemental Dealt damage +100%",
							5,
							50,
							12,
							[""]
						)
					]
				),
				/// Deadly Boots ///
				new Skill(
					"boots",
					"Deadly Boots",
					"Add your boots' DEF to kick attack power. Higher Skill levels increase this boost.",
					[
						new SkillTier(
							1,
							"Kick attack + 50% of boot defense",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Kick attack + 75% of boot defense",
							1,
							7,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Kick attack + 100% of boot defense",
							1,
							12,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Kick attack + 125% of boot defense",
							2,
							17,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Kick attack + 150% of boot defense",
							2,
							23,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Kick attack + 175% of boot defense",
							3,
							29,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Kick attack + 200% of boot defense",
							3,
							35,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Kick attack + 230% of boot defense",
							4,
							41,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Kick attack + 260% of boot defense",
							4,
							47,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Kick attack + 300% of boot defense",
							6,
							54,
							12,
							[""]
						)
					]
				),
				/// Backstab ///
				new Skill(
					"backstab",
					"Backstab",
					"Increase damage when attakcing an enemy from behind with a dagger.",
					[
						new SkillTier(
							1,
							"Dagger back attack Dealt damage +80%",
							1,
							5,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Dagger back attack Dealt damage +100%",
							1,
							10,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Dagger back attack Dealt damage +120%",
							1,
							15,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Dagger back attack Dealt damage +135%",
							2,
							20,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Dagger back attack Dealt damage +155%",
							2,
							25,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Dagger back attack Dealt damage +175%",
							3,
							30,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Dagger back attack Dealt damage +195%",
							3,
							36,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Dagger back attack Dealt damage +210%",
							4,
							42,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Dagger back attack Dealt damage +230%",
							4,
							48,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Dagger back attack Dealt damage +300%",
							5,
							55,
							12,
							[""]
						)
					]
				),
				/// Battle Hardened ///
				new Skill(
					"hardened",
					"Battle Hardened",
					"Reduce knockback chance and damage taken while charging arrows.",
					[
						new SkillTier(
							1,
							"Damage taken -20% while aiming" + spacerLarge + "Knockback resistance: 50",
							1,
							9,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Damage taken -25% while aiming" + spacerLarge + "Knockback resistance: 66",
							1,
							18,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Damage taken -30% while aiming" + spacerLarge + "Knockback resistance: 75",
							2,
							28,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Damage taken -35% while aiming" + spacerLarge + "Knockback resistance: 80",
							3,
							39,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Damage taken -50% while aiming" + spacerLarge + "Knockback resistance: 83",
							5,
							51,
							6,
							[""]
						)
					]
				)
			]
		)
	]
);

//////////////////////
// Sorceress Skills //
//////////////////////
const skillsSorceress = new SkillType(
	"sorceress",
	"Sorceress Skills",
	[
		/// Supplemental Skills ///
		new SkillCategory (
			"supplemental",
			"Supplemental",
			[
				/// Mental Absorb ///
				new Skill(
					"absorb",
					"Mental Absorb",
					"Gain MP with every enemy you defeat.",
					[
						new SkillTier(
							1,
							"MP recovered +15",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"MP recovered +18",
							1,
							6,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"MP recovered +21",
							1,
							11,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"MP recovered +24",
							2,
							16,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"MP recovered +27",
							2,
							21,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"MP recovered +30",
							3,
							27,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"MP recovered +34",
							3,
							33,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"MP recovered +38",
							4,
							39,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"MP recovered +42",
							4,
							45,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"MP recovered +50",
							5,
							51,
							12,
							[""]
						)
					]
				),
				/// Extract ///
				new Skill(
					"extract",
					"Extract",
					"If your magic shot hits an enemy, you will recover MP. Press ■ for a magic shot.",
					[
						new SkillTier(
							1,
							"MP recovered +5",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"MP recovered +7",
							1,
							7,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"MP recovered +9",
							2,
							13,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"MP recovered +11",
							2,
							19,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"MP recovered +13",
							3,
							26,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"MP recovered +15",
							3,
							34,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"MP recovered +20",
							5,
							42,
							9,
							[""]
						)
					]
				),
				/// Concentrate ///
				new Skill(
					"concentrate",
					"Concentrate",
					"Increase MP charge speed by holding ■.",
					[
						new SkillTier(
							1,
							"MP charge speed +10%",
							1,
							4,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"MP charge speed +14%",
							1,
							10,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"MP charge speed +18%",
							2,
							17,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"MP charge speed +22%",
							3,
							25,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"MP charge speed +30%",
							5,
							35,
							6,
							[""]
						)
					]
				),
				/// Spirit Up ///
				new Skill(
					"spiritUp",
					"Spirit Up",
					"Increase maximum MP.",
					[
						new SkillTier(
							1,
							"Max MP +30",
							1,
							9,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Max MP +50",
							1,
							18,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Max MP +70",
							2,
							28,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Max MP +100",
							3,
							38,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Max MP +150",
							5,
							49,
							6,
							[""]
						)
					]
				),
				/// Ice Prison ///
				new Skill(
					"prison",
					"Ice Prison",
					"Spell: Ice Prison - Cast to encase your enemies in ice.",
					[
						new SkillTier(
							1,
							"Uses: 5" + spacerLarge + "Power: 50" + spacerLarge + "Duration: 8s",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 7" + spacerLarge + "Power: 63" + spacerLarge + "Duration: 12s",
							3,
							14,
							3,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 9" + spacerLarge + "Power: 75" + spacerLarge + "Duration: 20s",
							5,
							30,
							6,
							[""]
						)
					]
				),
				/// Protection ///
				new Skill(
					"protection",
					"Protection",
					"Spell: Protection - Cast to magically shield all your allies.",
					[
						new SkillTier(
							1,
							"Uses: 3" + spacerLarge + "Duration: 20s" + spacerLarge + "Damage reduction: 25%",
							1,
							5,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 3" + spacerLarge + "Duration: 24s" + spacerLarge + "Damage reduction: 30%",
							1,
							13,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 4" + spacerLarge + "Duration: 28s" + spacerLarge + "Damage reduction: 35%",
							2,
							22,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Uses: 4" + spacerLarge + "Duration: 32s" + spacerLarge + "Damage reduction: 40%",
							3,
							33,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Uses: 5" + spacerLarge + "Duration: 40s" + spacerLarge + "Damage reduction: 50%",
							5,
							45,
							6,
							[""]
						)
					]
				),
				/// Gravity ///
				new Skill(
					"gravity",
					"Gravity",
					"Spell: Gravity - Cast to create a gravity field that pulls in enemies.",
					[
						new SkillTier(
							1,
							"Uses: 3" + spacerLarge + "Power: 10",
							1,
							11,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 5" + spacerLarge + "Power: 16" + spacerLarge + "Increase absorption",
							3,
							24,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 8" + spacerLarge + "Power: 25" + spacerLarge + "Increase absorption",
							5,
							40,
							3,
							[""]
						)
					]
				)
			]
		),
		/// Attack Skills ///
		new SkillCategory (
			"attack",
			"Attack",
			[
				/// Thunderhead ///
				new Skill(
					"thunderhead",
					"Thunderhead",
					"Spell: Thunderhead - Cast to summon a small cloud that will attack foes with lightning.",
					[
						new SkillTier(
							1,
							"Uses: 3" + spacerLarge + "Power: 80" + spacerLarge + "Duration: 20s",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 3" + spacerLarge + "Power: 92" + spacerLarge + "Duration: 22s",
							1,
							6,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 4" + spacerLarge + "Power: 104" + spacerLarge + "Duration: 24s",
							2,
							12,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Uses: 4" + spacerLarge + "Power: 116" + spacerLarge + "Duration: 26s",
							2,
							18,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Uses: 5" + spacerLarge + "Power: 128" + spacerLarge + "Duration: 28s",
							3,
							25,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Uses: 5" + spacerLarge + "Power: 140" + spacerLarge + "Duration: 30s",
							3,
							32,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Uses: 7" + spacerLarge + "Power: 160" + spacerLarge + "Duration: 32s",
							5,
							41,
							9,
							[""]
						)
					]
				),
				/// Rock Press ///
				new Skill(
					"rock",
					"Rock Press",
					"Spell: Rock Crusher - Cast to create a boulder to crush foes and stun nearby enemies.",
					[
						new SkillTier(
							1,
							"Uses: 5" + spacerLarge + "Power: 350",
							1,
							7,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 5" + spacerLarge + "Power: 420",
							1,
							13,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 6" + spacerLarge + "Power: 490",
							2,
							20,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Uses: 6" + spacerLarge + "Power: 560",
							2,
							27,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Uses: 7" + spacerLarge + "Power: 665",
							3,
							35,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Uses: 7" + spacerLarge + "Power: 770",
							3,
							44,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Uses: 9" + spacerLarge + "Power: 875",
							5,
							53,
							9,
							[""]
						)
					]
				),
				/// Blizzard ///
				new Skill(
					"blizzard",
					"Blizzard",
					"Spell: Blizzard - Cast to call forth a blizzard which will freeze enemies.",
					[
						new SkillTier(
							1,
							"Uses: 3" + spacerLarge + "Power: 35" + spacerLarge + "Duration: 4s",
							1,
							14,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 3" + spacerLarge + "Power: 40" + spacerLarge + "Duration: 5s",
							1,
							23,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 4" + spacerLarge + "Power: 42" + spacerLarge + "Duration: 6s",
							2,
							34,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Uses: 4" + spacerLarge + "Power: 44" + spacerLarge + "Duration: 7s",
							3,
							46,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Uses: 5" + spacerLarge + "Power: 50" + spacerLarge + "Duration: 10s",
							5,
							58,
							6,
							[""]
						)
					]
				)
			]
		),
		/// Special Skills ///
		new SkillCategory (
			"special",
			"Special",
			[
				/// Animate Skeleton ///
				new Skill(
					"skeleton",
					"Animate Skeleton",
					"Create skeletal allies. (Press ■ near bones.)",
					[
						new SkillTier(
							1,
							"Skeleton's LV: 50% of Player LV" + spacerLarge + "Max 1 (Party max is 4)",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Skeleton's LV: 60% of Player LV" + spacerLarge + "Max 2 (Party max is 4)",
							1,
							8,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Skeleton's LV: 70% of Player LV" + spacerLarge + "Max 2 (Party max is 4)",
							2,
							16,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Skeleton's LV: 80% of Player LV" + spacerLarge + "Max 3 (Party max is 4)",
							3,
							25,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Skeleton's LV: 100% of Player LV" + spacerLarge + "Max 4 (Party max is 4)",
							5,
							36,
							6,
							[""]
						)
					]
				),
				/// Levitation ///
				new Skill(
					"levitation",
					"Levitation",
					"Enable witch flight. (Double jump and press ⨯.)",
					[
						new SkillTier(
							1,
							"Magic Dealt damage +20% while in air",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Magic Dealt damage +35% while in air",
							3,
							14,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Magic Dealt damage +50% while in air",
							5,
							29,
							3,
							[""]
						)
					]
				),
				/// Create Food ///
				new Skill(
					"createFood",
					"Create Food",
					"Spell: Create Food - Cast to create nutritious food.",
					[
						new SkillTier(
							1,
							"Number of uses: 5",
							1,
							3,
							-1,
							["Create 4 food items"]
						),
						
						new SkillTier(
							2,
							"Number of uses: 5",
							1,
							9,
							-1,
							[
								"Create 5 food items",
								"Create 1 random temporary weapon",
								"Create 1 bone pile if invested in Animate Skeleton"
							]
						),
						
						new SkillTier(
							3,
							"Number of uses: 7",
							2,
							17,
							3,
							[
								"Create 6 food items",
								"Chance of creating food items that restore more HP",
								"Create 1 random temporary weapon",
								"Create 2 bone piles if invested in Animate Skeleton"
							]
						),
						
						new SkillTier(
							4,
							"Number of uses: 7",
							2,
							26,
							3,
							[
								"Create 7 food items",
								"Increased chance of creating food items that restore more HP",
								"Chance of creating food items that restore a great amount of HP",
								"Create 3 random temporary weapons",
								"Create 3 bone piles if invested in Animate Skeleton"
							]
						),
						
						new SkillTier(
							5,
							"Number of uses: 9",
							4,
							35,
							6,
							[
								"Create 8 food items",
								"High chance of creating food items that restore more or great amounts of HP",
								"Create 4 random temporary weapons",
								"Create 4 bone piles if invested in Animate Skeleton"
							]
						)
					]
				),
				/// Curse ///
				new Skill(
					"curse",
					"Curse",
					"Spell: Curse - Cast to curse your enemies to live as frogs.",
					[
						new SkillTier(
							1,
							"Number of uses: 5" + spacerLarge + "Range 1",
							1,
							6,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 7" + spacerLarge + "Range 2",
							3,
							16,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 9" + spacerLarge + "Range 3",
							15,
							31,
							3,
							[""]
						)
					]
				),
				/// Petrification ///
				new Skill(
					"petrification",
					"Petrification",
					"Spell: Petrification - Cast to turn your enemies to stone.",
					[
						new SkillTier(
							1,
							"Uses: 3" + spacerLarge + "Duration: 5s",
							1,
							15,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 3" + spacerLarge + "Duration: 6s",
							1,
							22,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 4" + spacerLarge + "Duration: 7s",
							2,
							29,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Uses: 4" + spacerLarge + "Duration: 8s",
							2,
							36,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Uses: 5" + spacerLarge + "Duration: 9s",
							3,
							43,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Uses: 5" + spacerLarge + "Duration: 10s",
							3,
							51,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Uses: 7" + spacerLarge + "Duration: 15s",
							5,
							60,
							9,
							[""]
						)
					]
				)
			]
		)
	]
);

///////////////////
// Wizard Skills //
///////////////////
const skillsWizard = new SkillType(
	"wizard",
	"Wizard Skills",
	[
		/// Supplemental Skills ///
		new SkillCategory (
			"supplemental",
			"Supplemental",
			[
				/// Concentrate ///
				new Skill(
					"concentrate",
					"Concentrate",
					"Increase MP charge speed by holding ■.",
					[
						new SkillTier(
							1,
							"MP charge speed +10%",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"MP charge speed +14%",
							1,
							6,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"MP charge speed +18%",
							1,
							11,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"MP charge speed +22%",
							2,
							16,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"MP charge speed +26%",
							2,
							21,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"MP charge speed +30%",
							3,
							27,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"MP charge speed +34%",
							3,
							33,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"MP charge speed +38%",
							4,
							39,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"MP charge speed +42%",
							4,
							45,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"MP charge speed +50%",
							5,
							51,
							12,
							[""]
						)
					]
				),
				/// Extract ///
				new Skill(
					"extract",
					"Extract",
					"If your magic shot hits an enemy, you will recover MP. Press ■ for a magic shot.",
					[
						new SkillTier(
							1,
							"MP recovered +5",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"MP recovered +7",
							1,
							7,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"MP recovered +9",
							1,
							13,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"MP recovered +11",
							2,
							19,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"MP recovered +13",
							2,
							26,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"MP recovered +15",
							3,
							34,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"MP recovered +20",
							4,
							42,
							9,
							[""]
						)
					]
				),
				/// Mental Absorb ///
				new Skill(
					"absorb",
					"Mental Absorb",
					"Gain MP with every enemy you defeat.",
					[
						new SkillTier(
							1,
							"MP recovered +15",
							1,
							4,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"MP recovered +18",
							1,
							10,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"MP recovered +21",
							2,
							17,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"MP recovered +24",
							3,
							25,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"MP recovered +30",
							5,
							35,
							6,
							[""]
						)
					]
				),
				/// Spirit Up ///
				new Skill(
					"spiritUp",
					"Spirit Up",
					"Increase maximum MP.",
					[
						new SkillTier(
							1,
							"Max MP +30",
							1,
							9,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Max MP +50",
							1,
							18,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Max MP +70",
							2,
							28,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Max MP +100",
							3,
							38,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Max MP +150",
							5,
							49,
							6,
							[""]
						)
					]
				),
				/// Fire Ward ///
				new Skill(
					"ward",
					"Fire Ward",
					"Spell: Fire Ward - Cast to create a magic circle which grants fire protection.",
					[
						new SkillTier(
							1,
							"Uses: 3" + spacerLarge + "Duration: 15s" + spacerLarge + "Dealt damage +20%",
							1,
							8,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 5" + spacerLarge + "Duration: 20s" + spacerLarge + "Dealt damage +35%" + spacerLarge + "Effect range: 150%",
							3,
							24,
							3,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 7" + spacerLarge + "Duration: 30s" + spacerLarge + "Dealt damage +50%" + spacerLarge + "Effect range: 200%",
							5,
							40,
							6,
							[""]
						)
					]
				)
			]
		),
		/// Attack Skills ///
		new SkillCategory (
			"attack",
			"Attack",
			[
				/// Blaze ///
				new Skill(
					"blaze",
					"Blaze",
					"Spell: Blaze - Cast to create long-burning flames.",
					[
						new SkillTier(
							1,
							"Number of uses: 3" + spacerLarge + "Power: 25",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 4" + spacerLarge + "Power: 30",
							1,
							6,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 5" + spacerLarge + "Power: 35",
							2,
							12,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Number of uses: 6" + spacerLarge + "Power: 40",
							3,
							20,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Number of uses: 9" + spacerLarge + "Power: 50",
							5,
							29,
							6,
							[""]
						)
					]
				),
				/// Storm ///
				new Skill(
					"storm",
					"Storm",
					"Spell: Storm - Cast to summon a tornado which will slash enemies.",
					[
						new SkillTier(
							1,
							"Number of uses: 3" + spacerLarge + "Power: 10",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 3" + spacerLarge + "Power: 12",
							1,
							7,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 4" + spacerLarge + "Power: 14",
							2,
							14,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Number of uses: 4" + spacerLarge + "Power: 16",
							2,
							22,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Number of uses: 5" + spacerLarge + "Power: 18",
							3,
							31,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Number of uses: 6" + spacerLarge + "Power: 20",
							3,
							41,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Number of uses: 9" + spacerLarge + "Power: 25",
							5,
							52,
							9,
							[""]
						)
					]
				),
				/// Flame Burst ///
				new Skill(
					"flame",
					"Flame Burst",
					"Spell: Flame Burst - Cast to raze everything in front of you.",
					[
						new SkillTier(
							1,
							"Number of uses: 3" + spacerLarge + "Power: 30",
							1,
							3,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 3" + spacerLarge + "Power: 35",
							1,
							9,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 4" + spacerLarge + "Power: 39",
							2,
							16,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Number of uses: 4" + spacerLarge + "Power: 44",
							2,
							23,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Number of uses: 5" + spacerLarge + "Power: 45",
							3,
							32,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Number of uses: 6" + spacerLarge + "Power: 50",
							3,
							43,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Number of uses: 9" + spacerLarge + "Power: 60",
							5,
							56,
							9,
							[""]
						)
					]
				),
				/// Thunderbolt ///
				new Skill(
					"thunderbolt",
					"Thunderbolt",
					"Spell: Thunderbolt - Cast to summon lightning and stun enemies.",
					[
						new SkillTier(
							1,
							"Number of uses: 3" + spacerLarge + "Power: 40",
							1,
							7,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 3" + spacerLarge + "Power: 46",
							1,
							12,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 3" + spacerLarge + "Power: 52",
							1,
							17,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Number of uses: 4" + spacerLarge + "Power: 58",
							2,
							22,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Number of uses: 4" + spacerLarge + "Power: 64",
							2,
							28,
							6,
							[""]
						),
						
						new SkillTier(
							6,
							"Number of uses: 4" + spacerLarge + "Power: 70",
							3,
							34,
							6,
							[""]
						),
						
						new SkillTier(
							7,
							"Number of uses: 5" + spacerLarge + "Power: 76",
							3,
							40,
							9,
							[""]
						),
						
						new SkillTier(
							8,
							"Number of uses: 5" + spacerLarge + "Power: 82",
							4,
							46,
							9,
							[""]
						),
						
						new SkillTier(
							9,
							"Number of uses: 5" + spacerLarge + "Power: 88",
							4,
							53,
							12,
							[""]
						),
						
						new SkillTier(
							10,
							"Number of uses: 7" + spacerLarge + "Power: 110",
							5,
							60,
							12,
							[""]
						)
					]
				),
				/// Meteor Swarm ///
				new Skill(
					"meteor",
					"Meteor Swarm",
					"Spell: Meteor Swarm - Cast a grand magic that calls down meteors from the heaveans.",
					[
						new SkillTier(
							1,
							"Number of uses: 3" + spacerLarge + "Power: 1200" + spacerLarge + "No. Meteors: 3",
							3,
							15,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 3" + spacerLarge + "Power: 1350" + spacerLarge + "No. Meteors: 4",
							4,
							30,
							3,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 3" + spacerLarge + "Power: 1500" + spacerLarge + "No. Meteors: 5",
							5,
							50,
							6,
							[""]
						)
					]
				)
			]
		),
		/// Special Skills ///
		new SkillCategory (
			"special",
			"Special",
			[
				/// Create Wood Golem ///
				new Skill(
					"golem",
					"Create Wood Golem",
					"Create golems. (Press ■ near wooden boxes/barrels.)",
					[
						new SkillTier(
							1,
							"Golem's LV: 50% of player LV",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Golem's LV: 60% of player LV, enhance max 1 rank by adding more wood.",
							1,
							8,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Golem's LV: 70% of player LV, enhance max 2 rank by adding more wood.",
							2,
							16,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Golem's LV: 80% of player LV, enhance max 3 rank by adding more wood.",
							3,
							25,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Golem's LV: 100% of player LV, enhance max 3 rank by adding more wood.",
							5,
							36,
							6,
							[""]
						)
					]
				),
				/// Levitation ///
				new Skill(
					"levitation",
					"Levitation",
					"Enable floating. (Double jump and press ⨯.)",
					[
						new SkillTier(
							1,
							"Magic Dealt damage +20% while in air",
							1,
							-1,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Magic Dealt damage +35% while in air",
							3,
							14,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Magic Dealt damage +50% while in air",
							5,
							29,
							3,
							[""]
						)
					]
				),
				/// Slow ///
				new Skill(
					"slow",
					"Slow",
					"Spell: Slow - Cast to create a magic circle that slows enemy movements.",
					[
						new SkillTier(
							1,
							"Uses: 4" + spacerLarge + "Speed reduction 60%",
							1,
							5,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Uses: 5" + spacerLarge + "Effect range 105%" + spacerLarge + "Speed reduction 65%",
							1,
							11,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Uses: 6" + spacerLarge + "Effect range 110%" + spacerLarge + "Speed reduction 70%",
							2,
							18,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Uses: 7" + spacerLarge + "Effect range 120%" + spacerLarge + "Speed reduction 75%",
							2,
							26,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Uses: 9" + spacerLarge + "Effect range 130%" + spacerLarge + "Speed reduction 85%",
							4,
							35,
							6,
							[""]
						)
					]
				),
				/// Extinction ///
				new Skill(
					"extinction",
					"Extinction",
					"Spell: Extinction - Cast to make one enemy cease to exist. Ineffective on bosses.",
					[
						new SkillTier(
							1,
							"Number of uses: 3",
							1,
							13,
							-1,
							[""]
						),
						
						new SkillTier(
							2,
							"Number of uses: 4",
							1,
							21,
							-1,
							[""]
						),
						
						new SkillTier(
							3,
							"Number of uses: 5",
							2,
							30,
							3,
							[""]
						),
						
						new SkillTier(
							4,
							"Number of uses: 6",
							3,
							39,
							3,
							[""]
						),
						
						new SkillTier(
							5,
							"Number of uses: 9",
							5,
							48,
							6,
							[""]
						)
					]
				)
			]
		)
	]
);

const skillsList = [skillsCommon,skillsFighter,skillsAmazon,skillsDwarf,skillsElf,skillsSorceress,skillsWizard];

/* * * * * * *
 * Functions
 * * * * * * */
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
