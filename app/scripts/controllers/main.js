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
		{Name: "Shield", Level: "1st", Type: "Abjuration", CastingTime: "1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell", Range: "Self", Components: "V, S", Duration: "1 Round", Description: "Until start of next turn, you have a +5 bonus to AC, take no damage from magic missle"},
		{Name: "Mage Armor", Level: "1st", Type: "Abjuration", CastingTime: "1 Action", Range: "Touch", Components: "V, S, M (piece of cured leater)", Duration: "8 hours", Description: "Willing creature with no armor gets AC 13 + Dex modifier. Spell ends if creature puts on armor"},
		{Name: "Grease", Level: "1st", Type: "Conjuration", CastingTime: "1 Action", Range: "60 feet", Components: "V, S, M (bit of pork rind or butter)", Duration: "1 minute", Description: "Cover 10-foot square centered on a point in grease. It is considered difficult terrain. When grease appears, each creature in its area must succees on a Dexterity saving throw or fall prone. Creatures entering or ending their turn on the grease must also make a Dexterity save or fall prone"},
		{Name: "Burning Hands", Level: "1st", Type: "Evocation", CastingTime: "1 Action", Range: "Self(15-foot-cone)", Components: "V, S", Duration: "Instantaneous", Description: "Each creature in a 15-foot cone must make a Dexterity save. On fail creature takes 3d6 dmg on success they take half. Add 1d6 damage per spell slot of 2 or higher"},
		{Name: "Alarm", Level: "1st", Type: "Abjuration (Ritual)", CastingTime: "1 minute", Range: "30 feet", Components: "V, S, M (a tiny bell and a piece of fine silver wire)", Duration: "8 hours", Description: "Choose a door, a window, or an area with in range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won’t set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet."},
		{Name: "Chromatic Orb", Level: "1st", Type: "Evocation", CastingTime: "1 Action", Range: "90 feet", Components: "V, S, M (a diamond worth at least 50gp)", Duration: "Instantaneous", Description: "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."},
		{Name: "Charm Person", Level: "1st", Type: "Enchantment", CastingTime: "1 action", Range: "30 feet", Components: "V, S", Duration: "1 hour", Description: "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."},
		{Name: "Detect Magic", Level: "1st", Type: "Divination (ritual)", CastingTime: "1 action", Range: "Self", Components: "V, S", Duration: "Concentration up to 10 minutes", Description: "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."},
		{Name: "Feather Fall", Level: "1st", Type: "Transmutation", CastingTime: "1 reaction, which you take when you ot a creature within 60 feet of you falls", Range: "60 feet", Components: "V,M (a small feather or a piece of down)", Duration: "1 minute", Description: "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature."},
		{Name: "Sleep", Level: "1st", Type: "Enchantment", CastingTime: "1 action", Range: "90 feet", Components: "V, S, M (a pinch of fine sant, rose petals, or a cricket)", Duration: "1 minute", Description: "Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren’t affected by this spell. 12At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st."}
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
