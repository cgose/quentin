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
        TotalHP: 37,
        
    };
  });
