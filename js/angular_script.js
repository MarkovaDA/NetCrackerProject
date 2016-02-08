
	var meetmodel = {
	group_id: 0, 
	meet_id: 0,
	meet_name: "",
	meet_descr:"",
	meet_type: "",
	meet_date: "",
	meet_time: new Date(1970, 0, 1),
	meet_address: "",	
	meet_goals:
	[],
	meet_comments:"",
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