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
	PlayerName: "Cameron Gose",
	Race: "Human",
	Classes: [ { Level: 3, ClassName: "Fighter", HD: 'd10' }, { Level: 1, ClassName: "Wizard", HD: 'd6'}],
        TotalLevel: 4,
	Experience: null,
	ProficiencyBonus: 2,
	Strength: 16,
	Dexterity: 8,
	Constitutions: 14,
	Wisdom: 12,
	Intelligence: 16,
	Charisma: 8,
	AC: 19,
	Speed: 30
    }
  });
