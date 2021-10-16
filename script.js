window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    //get the forms
    form1 = document.getElementById("form1");
    form2 = document.getElementById("form2");
    results = document.getElementById("results");
    surveyResults = document.getElementById("surveyResults");

    //form 1 survey answers
    sex = document.getElementById("sex");
    age = document.getElementById("age");

    //form 2 survey answers
    familyCancer = document.getElementById("familyCancer");

    //buttons
    next1 = document.getElementById("next1");
    next2 = document.getElementById("next2");

    next1.addEventListener("click",function(){
        //get all values from form elements
        ageValue = age.value;
        sexValue = sex.value;

        //hide this form and show next
        form1.style.display = "none";
        form2.style.display = "block"
    });

    next2.addEventListener("click",function(){
        //get all values from form elements
        familyCancerValue = familyCancer.value;

        //check all answers from survey
        checkAnswers();

        //hide this form and show results
        form2.style.display = "none";
        results.style.display = "block";
    });

    //function to check survey answers and fill in results
    function checkAnswers(){
        if(sexValue == "Male" && (ageValue == "50-54" || ageValue == "55-59" || ageValue == "60+")){
            surveyResults.innerHTML += "-As a male over 50 you should start getting annual prostate exams."
            surveyResults.innerHTML += "<br>";
        }
        if(sexValue == "Female" && (ageValue == "40-44" || ageValue == "45-49" || ageValue == "50-54" || ageValue == "55-59" || ageValue == "60+")){
            surveyResults.innerHTML += "-As a female over 40 you should start getting annual mammograms.";
            surveyResults.innerHTML += "<br>";
        }

    }
}