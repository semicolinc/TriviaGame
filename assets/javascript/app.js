$(document).ready( function(){
    function main(){
        // creating a database of questions to use
            var questions = [
                { "question": "Which part of the human eye controls the size of the pupil?", "ans_1" : "The iris", "ans_4" : "The cornea", "ans_2" : "The lens", "ans_3" : "The pupils"}
                
                ,{ "question": "Luna orbits what planet of the solar system?", "ans_1" : "Earth", "ans_4" : "Venus", "ans_2" : "Mars", "ans_3" : "Rosalina"}
                
                ,{ "question": "Who invented the box that psychologists use to shock rats?", "ans_1" : "B.F Skinner", "ans_4" : "Sigmund Freud", "ans_2" : "Ivan Pavlov", "ans_3" : "Ratsy"}
                
                ,{ "question": "In radio, what does AM stand for?", "ans_1" : "Amplitude Modulation", "ans_4" : "The opposite of PM", "ans_2" : "Amsterdam, of course!", "ans_3" : "Ampharos Megaevolution"}
                
                ,{ "question": "Starfish belong to what animal phylum, whose name means spiny skin?", "ans_1" : "Echinoderms", "ans_4" : "Phallusfish", "ans_2" : "Estrechitin", "ans_3" : "Asteroidea"}
                
                ,{ "question": "What name is given to the area of the sky that is obscured by the Milky Way?", "ans_1" : "The Zone of Avoidance", "ans_4" : "The No-Go Zone", "ans_2" : "The Condensed Milk Zone", "ans_3" : "The Dead End Zone"}
                
                ,{ "question": "Which disease is also known as Hansen's disease?", "ans_1" : "Leprosy", "ans_4" : "The Bulbonic Plague", "ans_2" : "Herpes", "ans_3" : "Chicken Pox"}
                
                ,{ "question": "The average person has over 1,460 of what each year?", "ans_1" : "Dreams", "ans_4" : "Failed New Years Resolutions", "ans_2" : "Gray Hairs", "ans_3" : "Lost Brain Cells"}
                
                ,{ "question": "What is the name of the first Lunar Module to land on the Moon?", "ans_1" : "Eagle", "ans_4" : "Bear", "ans_2" : "Rasputin", "ans_3" : "Mario"}
                
                ,{ "question": "What is produced using the Kroll process?", "ans_1" : "Metallic Titanium", "ans_4" : "Oxygen Gas", "ans_2" : "Gum", "ans_3" : "A Whole New World"}
                
                ,{ "question": "The Kelvin scale is used to measure what?", "ans_1" : "Temperature", "ans_4" : "Neediness", "ans_2" : "Dress Size", "ans_3" : "Size"}
                
                ,{ "question": "Which philosopher said Cogito Ergo Sum?", "ans_1" : "Rene Descartes", "ans_4" : "Socrates", "ans_2" : "Shakespeare", "ans_3" : "Kong Qiu"}
                
                ,{ "question": "What is a sump?", "ans_1" : "A low space which collects undesirable liquids.", "ans_4" : "Short for a sumptuous meal.", "ans_2" : "A lively and naive person, who is unwilling to accept reality.", "ans_3" : "A painful process one undergoes to burn fat."}
                
                ,{ "question": "A Capuchin is a species of what type of animal?", "ans_1" : "Monkey", "ans_4" : "Pirate Monkey", "ans_2" : "Starfish", "ans_3" : "Hogfish"}
                
                ,{ "question": "Kalium is the Latin name for which element?", "ans_1" : "Potassium", "ans_4" : "Uranium", "ans_2" : "Oxygen", "ans_3" : "Carbon"}
                
                ,{ "question": "Syncope is the medical term for what?", "ans_1" : "Fainting", "ans_4" : "Burning", "ans_2" : "Unintentionally Lying", "ans_3" : "Crying"}
                
                ,{ "question": "The vernal equinox is the beginning of what?", "ans_1" : "Spring", "ans_4" : "Summer", "ans_2" : "Winter", "ans_3" : "Fall"}
                
                ,{ "question": "At what age did inventor Alexander Graham Bell immigrate to Canada?", "ans_1" : "23", "ans_4" : "25", "ans_2" : "Never", "ans_3" : "When he lost trust in the US government"}
                
                ,{ "question": "Who was the second man to set foot on the Moon?", "ans_1" : "Buzz Aldrin", "ans_4" : "John F. Kennedy", "ans_2" : "Lance Armstrong", "ans_3" : "Buzz L. Stultus"}
                
                ,{ "question": "Pathophobia is the fear of?", "ans_1" : "Disease", "ans_4" : "Fear", "ans_2" : "Terror", "ans_3" : "Paths"}
                
                ,{ "question": "Which two numbers are generally used in the binary system?", "ans_1" : "0 and 1", "ans_4" : "Any two numbers", "ans_2" : "A and B", "ans_3" : "Apples and Oranges"}
                
                ,{ "question": "Pnigerophobia is the fear of what?", "ans_1" : "Smothering", "ans_4" : "Sniggering", "ans_2" : "Pigs", "ans_3" : "Questioning"}
                
                ,{ "question": "What is the more common name for the bone called the furcula, found in birds?", "ans_1" : "Wish Bone", "ans_4" : "Funny Bone", "ans_2" : "Sad Bone", "ans_3" : "Happy Bone"}
                
                ,{ "question": "What food group is a cucumber technically in?", "ans_1" : "Fruits", "ans_4" : "Vegetables", "ans_2" : "Nuts", "ans_3" : "Not a Planet"}
                
                ,{ "question": "What potentially fatal disease is also known as rabbit fever?", "ans_1" : "Tularemia", "ans_4" : "Thundixeremia", "ans_2" : "Bunnybomberemia", "ans_3" : "Measles"}
                
                ,{ "question": "Polaris is referred to as what?", "ans_1" : "A two-stage US missle, fired from a submarine", "ans_4" : "A star located inside another star", "ans_2" : "A comet that powers up firebending", "ans_3" : "A polar bear that is laughing at you"}
                
                ,{ "question": "Which branch of science is concerned with the study of matter and energy?", "ans_1" : "Physics", "ans_4" : "Chemistry", "ans_2" : "Animals", "ans_3" : "Husbandry"}
                
                ,{ "question": "The offspring of a male lion and a female tiger is known by what name?", "ans_1" : "Liger", "ans_4" : "Tigon", "ans_2" : "Incineroar", "ans_3" : "Abomination"}
                
                ,{ "question": "Cinnabar is the most common source for which compound?", "ans_1" : "Mercury", "ans_4" : "Pokebon", "ans_2" : "Oxygen", "ans_3" : "Carbon"}
                
                ,{ "question": "Hippopotomonstrosesquippedaliophobia is the fear of what?", "ans_1" : "Long Words", "ans_4" : "Animals whose names you can't pronounce", "ans_2" : "Fused monsters", "ans_3" : "Anthropomorphized animals"}
            ]
        
            // Creating a list of 15 random questions to give to the user.
            function createQList(){
                for (var i = 0; i < 15; i++){
                    var randomInt = Math.floor(Math.random() * questions.length);
                    questionList.push(questions[randomInt]);
                    questions.splice(randomInt, 1);
                }
                console.log(questionList);
            }
        
            function updateContent(q){
                score();
                //checking if 15
                if (q >= 15){
                    ending();
                    return;
                }
                //append question
                var questionDiv = $("#question");
                questionDiv.html(questionList[q]["question"]);
                //random answer list
                var normA = [1,2,3,4]
                var randomA = [];
                for(var i = 0; i < 4; i++){
                    var temp = Math.floor(Math.random() * (4-i))
                    randomA.push(normA[temp]);
                    normA.splice(temp,1);
                }
                //appending answers
                var answerDiv1 = $("#1");
                var answerDiv2 = $("#2");
                var answerDiv3 = $("#3");
                var answerDiv4 = $("#4");
        
                answerDiv1.html(questionList[q]["ans_"+randomA[0]]);
                answerDiv2.html(questionList[q]["ans_"+randomA[1]]);
                answerDiv3.html(questionList[q]["ans_"+randomA[2]]);
                answerDiv4.html(questionList[q]["ans_"+randomA[3]]);
        
                timer();
                
                //adding answer identifier
                for(var j = 0; j < 4; j++){
                    if(randomA[j] === 1){
                        if(j === 0){
                            $("#1").addClass("correct");
                        }
                        else if(j === 1){
                            $("#2").addClass("correct");
                        }
                        else if(j === 2){
                            $("#3").addClass("correct");
                        }
                        else if(j === 3){
                            $("#4").addClass("correct");
                        }
                        
                    }
                }
        
                score();
            }
        
            function timer(){
                var counter = 10;
                var timerDiv = $("#timer");
                const interval = setInterval(() => {
                    counter--;
                    if (qStatus === 1){
                        clearInterval(interval);
                        qStatus = 0;
                    }
                    else{
        
                        if (counter >= 6){
                            timerDiv.html(counter + " seconds left").css("color", "black");
                        }
                        else if (counter < 6){
                            if (counter === 0){
                                clearInterval(interval);
                                if (qNumber >= 15){
                                    ending();
                                    return;
                                }
                                else{
                                    qNumber++;
                                    $("#1").removeClass("correct");
                                    $("#2").removeClass("correct");
                                    $("#3").removeClass("correct");
                                    $("#4").removeClass("correct");
                                    updateContent(qNumber);
                                }
                            }
                            else if (counter === 1){
                                timerDiv.html(counter + " second left").css("color", "red");
                            }
                            else{
                                timerDiv.html(counter + " seconds left").css("color", "red");
                            }
                        }
                    }
                }, 1000);
            }
        
            function score(){
                var remainingDiv = $("#remaining");
                remainingDiv.html((15 - qNumber) + " Left");
                var correctDiv = $("#correct");
                correctDiv.html((qCorrect) + " Correct")
            }
            
            function ending(){
                alert("Your troubling task has finished. You have received " + qCorrect + " correct question(s) out of 15.");
                $(".answer").removeClass("now correct");
                $(".start").css("color", "black").addClass("able");
            }
        
            var questionList = [];
            var qNumber = 0;
            var qCorrect = 0;
            var qStatus = 0;
        
            $(".start").on("click", function(){
                qCorrect = 0;
                qNumber = 0;
                questionList = [];
                $(".answer").addClass("now");
                createQList();
                updateContent(0);
                $(".start").css("color", "grey").removeClass("able");
            })
        
            $(".answer, .now").click(function(){
                if ($(this).hasClass("correct")){
                    qCorrect++;
                }
                if (qNumber >= 15){
                    ending();
                    return;
                }
                else{
                    qStatus = 1;
                    qNumber++;
                    $("#1").removeClass("correct");
                    $("#2").removeClass("correct");
                    $("#3").removeClass("correct");
                    $("#4").removeClass("correct");
                    updateContent(qNumber);
                }
            })
    }
    main();
})

