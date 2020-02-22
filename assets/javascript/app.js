$(document).ready( function(){

// creating a database of questions to use
    var questions = [
        { "question": "Which part of the human eye controls the size of the pupil?", "ans_correct" : "The iris", "ans_wrong_1" : "The cornea", "ans_wrong_2" : "The lens", "ans_wrong_3" : "The pupils"}
        
        ,{ "question": "Luna orbits what planet of the solar system?", "ans_correct" : "Earth", "ans_wrong_1" : "Venus", "ans_wrong_2" : "Mars", "ans_wrong_3" : "Rosalina"}
        
        ,{ "question": "Who invented the box that psychologists use to shock rats?", "ans_correct" : "B.F Skinner", "ans_wrong_1" : "Sigmund Freud", "ans_wrong_2" : "Ivan Pavlov", "ans_wrong_3" : "Ratsy"}
        
        ,{ "question": "In radio, what does AM stand for?", "ans_correct" : "Amplitude Modulation", "ans_wrong_1" : "The opposite of PM", "ans_wrong_2" : "Amsterdam, or course!", "ans_wrong_3" : "Ampharos Megaevolution"}
        
        ,{ "question": "Starfish belong to what animal phylum, whose name means spiny skin?", "ans_correct" : "Echinoderms", "ans_wrong_1" : "Phallusfish", "ans_wrong_2" : "Estrechitin", "ans_wrong_3" : "Asteroidea"}
        
        ,{ "question": "What name is given to the area of the sky that is obscured by the Milky Way?", "ans_correct" : "The Zone of Avoidance", "ans_wrong_1" : "The No-Go Zone", "ans_wrong_2" : "The Condensed Milk Zone", "ans_wrong_3" : "The Dead End Zone"}
        
        ,{ "question": "Which disease is also known as Hansen's disease?", "ans_correct" : "Leprosy", "ans_wrong_1" : "The Bulbonic Plague", "ans_wrong_2" : "Herpes", "ans_wrong_3" : "Chicken Pox"}
        
        ,{ "question": "The average person has over 1,460 of what each year?", "ans_correct" : "Dreams", "ans_wrong_1" : "Failed New Years Resolutions", "ans_wrong_2" : "Gray Hairs", "ans_wrong_3" : "Lost Brain Cells"}
        
        ,{ "question": "What is the name of the first Lunar Module to land on the Moon?", "ans_correct" : "Eagle", "ans_wrong_1" : "Bear", "ans_wrong_2" : "Rasputin", "ans_wrong_3" : "Mario"}
        
        ,{ "question": "What is produced using the Kroll process?", "ans_correct" : "Metallic Titanium", "ans_wrong_1" : "Oxygen Gas", "ans_wrong_2" : "Gum", "ans_wrong_3" : "A Whole New World"}
        
        ,{ "question": "The Kelvin scale is used to measure what?", "ans_correct" : "Temperature", "ans_wrong_1" : "Neediness", "ans_wrong_2" : "Dress Size", "ans_wrong_3" : "Size"}
        
        ,{ "question": "Which philosopher said Cogito Ergo Sum?", "ans_correct" : "Rene Descartes", "ans_wrong_1" : "Socrates", "ans_wrong_2" : "Shakespeare", "ans_wrong_3" : "Kong Qiu"}
        
        ,{ "question": "What is a sump?", "ans_correct" : "A low space which collects undesirable liquids.", "ans_wrong_1" : "Short for a sumptuous meal.", "ans_wrong_2" : "A lively and naive person, who is unwilling to accept reality.", "ans_wrong_3" : "A painful process one undergoes to burn fat."}
        
        ,{ "question": "A Capuchin is a species of what type of animal?", "ans_correct" : "Monkey", "ans_wrong_1" : "Pirate Monkey", "ans_wrong_2" : "Starfish", "ans_wrong_3" : "Hogfish"}
        
        ,{ "question": "Kalium is the Latin name for which element?", "ans_correct" : "Potassium", "ans_wrong_1" : "Uranium", "ans_wrong_2" : "Oxygen", "ans_wrong_3" : "Carbon"}
        
        ,{ "question": "Syncope is the medical term for what?", "ans_correct" : "Fainting", "ans_wrong_1" : "Burning", "ans_wrong_2" : "Unintentionally Lying", "ans_wrong_3" : "Crying"}
        
        ,{ "question": "The vernal equinox is the beginning of what?", "ans_correct" : "Spring", "ans_wrong_1" : "Summer", "ans_wrong_2" : "Winter", "ans_wrong_3" : "Fall"}
        
        ,{ "question": "At what age did inventor Alexander Graham Bell immigrate to Canada?", "ans_correct" : "23", "ans_wrong_1" : "25", "ans_wrong_2" : "Never", "ans_wrong_3" : "When he lost trust in the US government"}
        
        ,{ "question": "Who was the second man to set foot on the Moon?", "ans_correct" : "Buzz Aldrin", "ans_wrong_1" : "John F. Kennedy", "ans_wrong_2" : "Lance Armstrong", "ans_wrong_3" : "Buzz L. Stultus"}
        
        ,{ "question": "Pathophobia is the fear of?", "ans_correct" : "Disease", "ans_wrong_1" : "Fear", "ans_wrong_2" : "Terror", "ans_wrong_3" : "Paths"}
        
        ,{ "question": "Which two numbers are generally used in the binary system?", "ans_correct" : "0 and 1", "ans_wrong_1" : "Any two numbers", "ans_wrong_2" : "A and B", "ans_wrong_3" : "Apples and Oranges"}
        
        ,{ "question": "Pnigerophobia is the fear of what?", "ans_correct" : "Smothering", "ans_wrong_1" : "Sniggering", "ans_wrong_2" : "Pigs", "ans_wrong_3" : "Questioning"}
        
        ,{ "question": "What is the more common name for the bone called the furcula, found in birds?", "ans_correct" : "Wish Bone", "ans_wrong_1" : "Funny Bone", "ans_wrong_2" : "Sad Bone", "ans_wrong_3" : "Happy Bone"}
        
        ,{ "question": "What food group is a cucumber technically in?", "ans_correct" : "Fruits", "ans_wrong_1" : "Vegetables", "ans_wrong_2" : "Nuts", "ans_wrong_3" : "Not a Planet"}
        
        ,{ "question": "What potentially fatal disease is also known as rabbit fever?", "ans_correct" : "Tularemia", "ans_wrong_1" : "Thundixeremia", "ans_wrong_2" : "Bunnybomberemia", "ans_wrong_3" : "Measles"}
        
        ,{ "question": "Polaris is referred to as what?", "ans_correct" : "A two-stage US missle, fired from a submarine", "ans_wrong_1" : "A star located inside the Sun", "ans_wrong_2" : "A comet that powers up firebending", "ans_wrong_3" : "A polar bear that is laughing at you"}
        
        ,{ "question": "Which branch of science is concerned with the study of matter and energy?", "ans_correct" : "Physics", "ans_wrong_1" : "Chemistry", "ans_wrong_2" : "Animals", "ans_wrong_3" : "Husbandry"}
        
        ,{ "question": "The offspring of a male lion and a female tiger is known by what name?", "ans_correct" : "Liger", "ans_wrong_1" : "Tigon", "ans_wrong_2" : "Incineroar", "ans_wrong_3" : "Abomination"}
        
        ,{ "question": "Cinnabar is the most common source for which compound?", "ans_correct" : "Mercury", "ans_wrong_1" : "Pokebon", "ans_wrong_2" : "Oxygen", "ans_wrong_3" : "Carbon"}
        
        ,{ "question": "Hippopotomonstrosesquippedaliophobia is the fear of what?", "ans_correct" : "Long Words", "ans_wrong_1" : "Animals whose names you can't pronounce", "ans_wrong_2" : "Fused monsters", "ans_wrong_3" : "Anthropomorphized animals"}
    ]

    // Creating a list of 15 random questions to give to the user.
    function createQList(){
        for (var i = 0; i < 15; i++){
            var randomInt = Math.floor(Math.random() * questions.length);
            questionList.push(questions[randomInt]);
            questions.splice(randomInt, 1);
        }
    }

    

    var questionList = [];
    createQList();
    console.log(questionList);
})