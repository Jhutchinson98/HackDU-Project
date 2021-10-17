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
    smoking = document.getElementById("smoking");
    drinking = document.getElementById("drinking");

    //form 2 survey answers
    familyCancer = document.getElementById("familyCancer");
    highBP = document.getElementById("familyBlood")

    //buttons
    next1 = document.getElementById("next1");
    next2 = document.getElementById("next2");

    next1.addEventListener("click",function(){
        //get all values from form elements
        ageValue = age.value;
        sexValue = sex.value;
        smokingValue = smoking.value;
        drinkingValue = drinking.value;

        //hide this form and show next
        form1.style.display = "none";
        form2.style.display = "block"
    });

    next2.addEventListener("click",function(){
        //get all values from form elements
        familyCancerValue = familyCancer.value;
        familyBloodPressure = highBP.value;

        //check all answers from survey
        checkAnswers();

        //hide this form and show results
        form2.style.display = "none";
        results.style.display = "block";
    });

    //function to check survey answers and fill in results
    function checkAnswers(){
        if(sexValue == "Male"){
            surveyResults.innerHTML += "-All men should regularly get their blood pressure checked. If you suffer from other cardiovascular issues, ";
            surveyResults.innerHTML += "you should get it checked more frequently. High blood pressure is the biggest risk for heart disease!";
            surveyResults.innerHTML += "<br>";
            surveyResults.innerHTML += "<br>";
            surveyResults.innerHTML += "-All men should be checked for prostate cancer!";
            surveyResults.innerHTML += "<br>";
            surveyResults.innerHTML += "<br>";
            

            if(ageValue == "50-54" || ageValue == "55-59" || ageValue == "60+"){
                surveyResults.innerHTML += "-As a male over 50 you should start getting annual prostate exams to check for colon cancer.";
                surveyResults.innerHTML += "<br>";
                surveyResults.innerHTML += "<br>";
            }
            if(ageValue == "35-39" || ageValue == "40-44" || ageValue == "45-49" || ageValue == "50-54" || ageValue == "55-59" || ageValue == "60+"){
                surveyResults.innerHTML += "-All men 35 or older should regularly get their cholesterol checked";
                surveyResults.innerHTML += "<br>";
                surveyResults.innerHTML += "<br>";
            }
            if((smokingValue == "Yes") && (ageValue == "60+")){
                surveyResults.innerHTML += "-Smoking men over the age of 60 should be screened for an Abdominal Aortic Aneurysm (AAA).";
                surveyResults.innerHTML += "<br>";
                surveyResults.innerHTML += "<br>";
            }
            if(familyBloodPressure == "Yes"){
                surveyResults.innerHTML += "-Individuals with history or experiencing high blood pressure should get checked for Diabetes.";
                surveyResults.innerHTML += "<br>";
                surveyResults.innerHTML += "<br>";
            }
            if(ageValue == "60+"){
                surveyResults.innerHTML += "-All men, regardless of percieved risks, should regularly be tested for HIV.";
                surveyResults.innerHTML += "<br>";
                surveyResults.innerHTML += "<br>";
            }
        }
        
        if(sexValue == "Female"){
            surveyResults.innerHTML += " ";
            surveyResults.innerHTML += " ";
            surveyResults.innerHTML += " ";
        
            if(ageValue == "40-44" || ageValue == "45-49" || ageValue == "50-54" || ageValue == "55-59" || ageValue == "60+"){
                surveyResults.innerHTML += "-As a female over 40 you should start getting annual mammograms.";
                surveyResults.innerHTML += "<br>"; 
                surveyResults.innerHTML += "Females ages 30 and over should have testing for the human papillomavirus (HPV) with their Pap smear.";
                surveyResults.innerHTML += "<br>"; 
            }
            if(ageValue =="18-24" || ageValue== "25-29" || familyCancer == "yes"){
               surveyResults.innerHTML += "Females at the age of 21 should start Pap smear screening "; 
               surveyResults.innerHTML += "<br>";
               surveyResults.innerHTML += "Between the ages of 21-29, women whose Pap smears are normal only need it repeated every three years."
               surveyResults.innerHTML += "<br>"; 
            }
            if(ageValue == "30-34" || ageValue == "35-39"){
                surveyResults.innerHTML += "Females ages 30 and over should have testing for the human papillomavirus (HPV) with their Pap smear.";  
                surveyResults.innerHTML += "<br>"; 
            }
            if(ageValue == "45-49" || ageValue == "50-54" || ageValue == "55-59" || ageValue == "60+"){
                surveyResults.innerHTML += "Recommended starting age for cholesterol screening is age 45.";
                surveyResults.innerHTML += "<br>"; 
                surveyResults.innerHTML += "Females over the age of 45 should be screened for colorectal cancer.";
                surveyResults.innerHTML += "<br>"; 
            }
        }
        
        if(familyCancerValue == "Yes"){
            surveyResults.innerHTML += "-If your family has a history of certain cancers, it is recomended to get a screening for those cancers.";
            surveyResults.innerHTML += "<br>";
        }

        if(drinkingValue == "Yes"){
            surveyResults.innerHTML += "<br>";
            surveyResults.innerHTML += "-For all individuals, excessive use of alcohol can lead to long term effects. These include:";
            surveyResults.innerHTML += "<br>";
            surveyResults.innerHTML += "<br>";
            surveyResults.innerHTML += "--High blood pressure";
            surveyResults.innerHTML += "<br>";
            surveyResults.innerHTML += "--Heart Disease";
            surveyResults.innerHTML += "<br>";
            surveyResults.innerHTML += "--Stroke";
            surveyResults.innerHTML += "<br>";
            surveyResults.innerHTML += "--Liver Disease";
            surveyResults.innerHTML += "<br>";
            surveyResults.innerHTML += "--Digestive Problems";
            surveyResults.innerHTML += "<br>";
            surveyResults.innerHTML += "--Cancer of the breast, mouth, throat, esophagus, voice box, liver, colon, and rectum.";
            surveyResults.innerHTML += "<br>";
            surveyResults.innerHTML += "<br>";
        }
    }
}