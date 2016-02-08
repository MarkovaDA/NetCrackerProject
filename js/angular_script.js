
	var meetmodel = {
	group_id: 0, 
	meet_id: 0,
	meet_name: "meet_name",
	meet_descr: "meet_descr",
	meet_type: "meet_type",
	meet_date: "meet_date",
	meet_time: "meet_time",
	meet_address: "meet_address",	
	/*meet_goals: 
	{
	  "Goal1" : "1",
	  "Goal2" : "2",
	  "Goal3" : "3"
	}*/
	meet_goals:
	[
	{name:"HTML,CSS", number:1},
	{name: "JavaScript Essential", number:2},
	{name: "JavaScript Advanced",  number:3},
	{name: "HTML5 & CSS3", 	   number:4},
	{name: "AngularJS", 		   number:5}],
	meet_comments:"meet_comments",
	};
	var creatingNewMeet = angular.module("creatingNewMeet",[])
	.controller("creatingNewMeetCtrl", function($scope){
		var show = false;
		$scope.newMeet = meetmodel;
		
		$scope.addNewGoal = function(){			
			$scope.newMeet.meet_goals.push({
			name: $scope.txtGoal,
			number: $scope.newMeet.meet_goals.length + 1
			});
			$scope.txtGoal = "";
			show = false;			
		}
		$scope.removeGoal = function(event){			
			var hiddenId = $(event.target).children().eq(0).val();			
			$scope.newMeet.meet_goals.splice(hiddenId - 1, 1);
		}
		$scope.setShow = function(value){
			show = value;
		}
		$scope.getShow = function(){
			return show;
		}
  });	