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
		{Name: "Animal Handling", StatIndex: 4, Proficient: false},
		{Name: "Arcana", StatIndex: 3, Proficient: false },
		{Name: "Athletics", StatIndex: 0, Proficient: true },
		{Name: "Deception", StatIndex: 5, Proficient: false },
		{Name: "History", StatIndex: 3, Proficient: true },
		{Name: "Insight", StatIndex: 4, Proficient: true },
		{Name: "Intimidation", StatIndex: 5, Proficient: false },
		{Name: "Investigation", StatIndex: 3, Proficient: true },
		{Name: "Medicine", StatIndex: 4, Proficient: false },
		{Name: "Nature", StatIndex: 3, Proficient: false },
		{Name: "Perception", StatIndex: 4, Proficient: false },
		{Name: "Performance", StatIndex: 5, Proficient: false },
		{Name: "Persuasion", StatIndex: 5, Proficient: false },
		{Name: "Religion", StatIndex: 3, Proficient: false },
		{Name: "Sleight of Hand", StatIndex: 1, Proficient: false},
		{Name: "Stealth", StatIndex: 1, Proficient: false},
		{Name: "Survival", StatIndex: 4, Proficient: false }],
    };
  });
