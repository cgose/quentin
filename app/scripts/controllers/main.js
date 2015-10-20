'use strict';

/**
 * @ngdoc function
 * @name quentinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quentinApp
 */
angular.module('quentinApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.Character = {
        Name: "Quentin the Carver",
        PlayerName: "Cameron Gose",
        Race: "Human",
        Classes: [ { Level: 3, ClassName: "Fighter", HD: 'd10' }, { Level: 1, ClassName: "Wizard", HD: 'd6'}],
        TotalLevel: 4,
        Experience: null,
        ProficiencyBonus: 2,
	Stats: [{ Name: "Strength", Attribute: 16, Proficient: true },{ Name: "Dexterity", Attribute: 8, Proficient: false },
        { Name: "Constitution", Attribute: 14, Proficient: true },
        { Name: "Wisdom", Attribute: 12, Proficient: false },
        { Name: "Intelligence",  Attribute: 16, Proficient: false },
        { Name: "Charisma", Attribute: 8, Proficient: false }],
        AC: 19,
        Speed: 30,
        CurrentHP: 37,
        MaximumHP: 37,
        Skills: [
		{Name: "Acrobatics", StatIndex: 1, Proficient: false},
		{Name: "Animal Handling", StatIndex: 3, Proficient: false},
		{Name: "Arcana", StatIndex: 4, Proficient: false },
		{Name: "Athletics", StatIndex: 0, Proficient: true },
		{Name: "Deception", StatIndex: 5, Proficient: false },
		{Name: "History", StatIndex: 4, Proficient: true },
		{Name: "Insight", StatIndex: 3, Proficient: true },
		{Name: "Intimidation", StatIndex: 5, Proficient: false },
		{Name: "Investigation", StatIndex: 4, Proficient: true },
		{Name: "Medicine", StatIndex: 3, Proficient: false },
		{Name: "Nature", StatIndex: 4, Proficient: false },
		{Name: "Perception", StatIndex: 3, Proficient: false },
		{Name: "Performance", StatIndex: 5, Proficient: false },
		{Name: "Persuasion", StatIndex: 5, Proficient: false },
		{Name: "Religion", StatIndex: 4, Proficient: false },
		{Name: "Sleight of Hand", StatIndex: 1, Proficient: false},
		{Name: "Stealth", StatIndex: 1, Proficient: false},
		{Name: "Survival", StatIndex: 4, Proficient: false }],
	Weapons: [{Name: "Handaxe +1", StatIndex: 0, Damage: "1d6", DamageType:"Slashing" , Bonus: 1, Range: "20/60", Properties: "light, Thrown"},
		  {Name: "Whip", StatIndex: 0, Damage: "1d4", DamageType:"Slashing",  Bonus: 0, Range: "", Properties: "Finesse, reach"},
		  {Name: "Longbow", StatIndex: 1, Damage: "1d8", DamageType:"Piercing", Bonus: 0, Range: "150/600", Properties: "Ammunition, Heavy, Two-Handed"},
		  {Name: "Javelin", StatIndex: 0, Damage: "1d6", DamageType:"Piercing",  Bonus: 0, Range: "30/120", Properties: "Thrown"},
		 ],
	PreparedSpells: [{Name:"Shield", Quantity: 2, SlotLevel: "1st"},{Name:"Sleep", Quantity: 1, SlotLevel: "1st"}],
	Spellbook: [
		//{Name: "", Level: "", Type: "", CastingTime: "", Range: "", Components: "", Duration: "", Description: ""},
		{Name: "Light", Level: "Cantrip", Type: "Evocation", CastingTime: "1 Action", Range: "Touch", Components: "V, M (a firefly or Phosphorescent moss", Duration: "1 hour", Description: "One object no larger than 10 feet casts light 20-foot radius of bright light and dim light for additional 20-feet. Dex save for enemy if they have targeted item"},
		{Name: "Frostbite", Level: "Cantrip", Type: "Evocation", CastingTime: "1 action", Range: "60 feet", Components: "V,S", Duration: "Instantaneous", Description: "Target makes Con Saving throw. On failed save target takes 1d6 damage and has disadvantage on the next weapon attack roll it makes before the end of its next turn. Damage Increase: 5th(2d6), 11th(3d6), and 17th(4d6)"},
		{Name: "Blade Ward", Level: "Cantrip", Type: "Abjuration", CastingTime: "1 Action", Range: "Self", Components: "V, S", Duration: "1 round", Description: "Until the end of your next turn you have resistance against bludgeoning, piercing, and slashing damage dealt by weapons"},
		{Name: "True Strike", Level: "Cantrip", Type: "Divination", CastingTime: "1 Action", Range: "30 feet", Components: "S", Duration: "Concentration, up to 1 round", Description: "On your next turn, you gain advantage on your first attack against the target"},
		{Name: "Shocking Grasp", Level: "Cantrip", Type: "Evocation", CastingTime: "1 Action", Range: "Touch", Components: "V, S", Duration: "Instantaneous", Description: "Advantage on attack roll if the target is wearing armor made of metal. On hit target takes 1d8 lightning damaged. Damage Increase: 5th(2d8), 11th(3d8), 17th(4d8)"},
		{Name: "Shield", Level: "1st", Type: "Abjuration", CastingTime: "", Range: "", Components: "", Duration: "", Description: ""},
		{Name: "Mage Armor", Level: "1st", Type: "Abjuration", CastingTime: "", Range: "", Components: "", Duration: "", Description: ""},
		{Name: "Grease", Level: "1st", Type: "Conjuration", CastingTime: "", Range: "", Components: "", Duration: "", Description: ""},
		{Name: "Burning Hands", Level: "1st", Type: "Evocation", CastingTime: "", Range: "", Components: "", Duration: "", Description: ""},
		{Name: "Alarm", Level: "1st", Type: "Abjuration (Ritual)", CastingTime: "", Range: "", Components: "", Duration: "", Description: ""},
		{Name: "Chromatic Orb", Level: "1st", Type: "Evocation", CastingTime: "", Range: "", Components: "", Duration: "", Description: ""},
		{Name: "Charm Person", Level: "1st", Type: "Enchantment", CastingTime: "", Range: "", Components: "", Duration: "", Description: ""},
		{Name: "Detect Magic", Level: "1st", Type: "Divination", CastingTime: "", Range: "", Components: "", Duration: "", Description: ""},
		{Name: "Feather Fall", Level: "1st", Type: "Transmutation", CastingTime: "", Range: "", Components: "", Duration: "", Description: ""},
		{Name: "Sleep", Level: "1st", Type: "Enchantment", CastingTime: "", Range: "", Components: "", Duration: "", Description: ""}
	],
	SpellSlots: [
		{Level: "1st", Slots: 3},
		{Level: "2nd", Slots: 0},
		{Level: "3rd", Slots: 0},
		{Level: "4th", Slots: 0},
		{Level: "5th", Slots: 0},
		{Level: "6th", Slots: 0},
		{Level: "7th", Slots: 0},
		{Level: "8th", Slots: 0},
		{Level: "9th", Slots: 0} ],
	
	
    };
  });
