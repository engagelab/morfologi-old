/// <reference path="../../../../js/_references.ts"/>
/// <reference path="../../../../js/models/models.ts"/>
/// <reference path="../../../services/dataService.ts"/>

module ISPApp.Controllers {
    "use strict";
    import IScope = angular.IScope;
    import IDataService = ISPApp.Services.DataService;
    import ITimeoutService = angular.ITimeoutService;

    export class Task100Controller {
        static $inject = ['$scope', '$timeout', 'DataService'];

        private clickedFlippys = [];
        private word: string;

        constructor(private $scope: IScope, private $timeout: ITimeoutService, private dataService: IDataService) {
            this.word = this.$scope['wpC'].word;

            var audioUrl = 'content/common/audio/day1-task1.mp3';
            dataService.setupAudioIntroduction(audioUrl);
            dataService.playAudioIntroduction(3000);
        }

        clickFlippy(index) {
            if (this.clickedFlippys.indexOf(index) === -1) {
                this.clickedFlippys.push(index);
            }

            var path = index == 0 ? 'content/' + this.word + '/main.mp3'
                : 'content/' + this.word + '/variation/day1/' + index + '.mp3';
            this.$timeout(() => {
                new Audio(path).play();
            }, 1000);
            if (this.clickedFlippys.length === 4) {
                this.$timeout(() => {
                    this.$scope['wpC'].taskFinished();
                }, 2000);
            }
        }

        getBackgroundImage(index) {
            var path = index == 0 ? 'content/' + this.word + '/main.jpg'
                : 'content/' + this.word + '/variation/day1/' + index + '.jpg';
            return {
                'background-image': 'url(\'' + path + '\')'
            };
        }

    }
}