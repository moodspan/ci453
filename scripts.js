function submitAnswers()
{
    var total = 10;
    var score = 0;

    //getting user's answers
    var q1 = document.forms['quizForm']['q1'].value;
    var q2 = document.forms['quizForm']['q2'].value;
    var q3 = document.forms['quizForm']['q3'].value;
    var q4 = document.forms['quizForm']['q4'].value;
    var q5 = document.forms['quizForm']['q5'].value;
    var q6 = document.forms['quizForm']['q6'].value;
    var q7 = document.forms['quizForm']['q7'].value;
    var q8 = document.forms['quizForm']['q8'].value;
    var q9 = document.forms['quizForm']['q9'].value;
    var q10 = document.forms['quizForm']['q10'].value;

   
    //set correct answers
    var answers = ["b","d","d","a","d","a","a","b","c","b"];

    for (var i = 1; i <= total; i++){
        
        //check answers
        if (eval('q' + i) == answers[i - 1]){        
                score++ 
            }
        
        }

    //display results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';

    return false;


}