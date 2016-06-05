angular.module('quiz.service', []);
angular.module('quiz.directive', []);
angular.module('quiz.filter', []);

angular.module('quiz', ['quiz.service','quiz.directive','quiz.filter']);
//$('.solution').hide();
var QuizController = function($scope){
 
  "use strict";
  $scope.currentPage = 0;
  $scope.pageSize = 5;
  $scope.questions = [
    {"id":0,"questionText": "Why is the sky blue?", "answers": [
      {"answerText":"blah blah 1", "correct": false},
      {"answerText":"blah blah 2", "correct": true},
      {"answerText":"blah blah 3", "correct": false}
      ],"solution":"Correct answer is A"},
    {"id":1,"questionText": "Why is the meaning of life?", "answers": [
      {"answerText":"blah blah 1", "correct": true},
      {"answerText":"blah blah 2", "correct": false},
      {"answerText":"blah blah 3", "correct": false}
      ],"solution":"Correct answer is A"},
    {"id":2,"questionText": "How many pennies are in $10.00?", "answers": [
      {"answerText":"1,000.", "correct": true},
      {"answerText":"10,000.", "correct": false},
      {"answerText":"A lot", "correct": false}
      ],"solution":"Correct answer is A"},
    {"id":3,"questionText": "What is the default program?", "answers": [
      {"answerText":"Hello World.", "correct": true},
      {"answerText":"Hello Sunshine.", "correct": false},
      {"answerText":"Hello my ragtime gal.", "correct": false}
      ],"solution":"Correct answer is A"}
  ];
  $scope.questionstemp=[]
  $scope.answers ={};
  $scope.correctCount = 0;
  $scope.showresflag = "none";
  for(var ii=0;ii<$scope.pageSize;ii++)
  {
	  $scope.questionstemp.push($scope.questions[($scope.currentPage*$scope.pageSize)+ii])
  }
  $scope.numberOfPages=function(){
        return Math.ceil($scope.questions.length/$scope.pageSize);                
    }
  $scope.showResult = function(){
    $scope.correctCount = 0;
	$('.solution').show();
	$scope.showresflag = "block";
    var qLength = $scope.questions.length;
	//alert(qLength)
    for(var i=0;i<qLength;i++){
      var answers = $scope.questions[i].answers;
      $scope.questions[i].userAnswerCorrect = false;
      $scope.questions[i].userAnswer = $scope.answers[i];
	  //alert($scope.answers[i])
      for(var j=0;j<answers.length;j++){
		  //alert("line57 "+i)
		  //alert($scope.questions[i].id)
		  //alert(j)
		  //alert(answers[$scope.questions[i].id+j].answerText)
        answers[j].selected = "donno";
		//alert("line59 "+i)
        if ($scope.questions[i].userAnswer === answers[j].answerText && answers[j].correct===true){
			//alert("line61 "+i)
          $scope.questions[i].userAnswerCorrect = true;
		  //alert("line62 "+i)
          answers[j].selected = "true";
		  //alert("line65 "+i)
          $scope.correctCount++;
		  //alert("line67 "+i)
        }else if($scope.questions[i].userAnswer === answers[j].answerText && answers[j].correct===false){
			//alert("line69 "+i)
          answers[j].selected = "false";
		  //alert("line71 "+i)
        }
      }
    }
    
    //console.log($scope.answers);
    
  };
  $scope.donext = function(){
	  $scope.questionstemp=[]
	  $scope.currentPage=$scope.currentPage+1
	  for(var ii=0;ii<$scope.pageSize;ii++)
	  {
		  $scope.questionstemp.push($scope.questions[($scope.currentPage*$scope.pageSize)+ii])
	  }
  }
  $scope.doprev = function(){
	  $scope.questionstemp=[]
	  $scope.currentPage=$scope.currentPage-1
	  for(var ii=0;ii<$scope.pageSize;ii++)
	  {
		  $scope.questionstemp.push($scope.questions[($scope.currentPage*$scope.pageSize)+ii])
	  }
  }
};


                