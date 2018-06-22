$('#invalid-submit').hide();

var options = [
    // Affirmative
    "For sure!",
    "Without a doubt",
    "Yes- OMG yes", 
    "DO IT.",
    "What are you waiting for?",
    "I'd say so",
    "Yes!",
    "Hell yes",
    "Oh Yeah!",
    "By all means",
    "Right On!",
    "Did you ever have a doubt?",
    "Fo 'Shizzle",
    "Totally",
    "Go Crazy!",
    "Hell to the Yes",
    "Affirmative",
    "Sure thing!",
    "Sounds Good",
    "Sounds Great!",
    // Maybe 
    "Possibly",
    "Are you sure?",
    "Not. Sure.",
    "If you say so...",
    "I dunno",
    "Come again?",
    "Ask me next year.",
    "Maybe?",
    "Meh.",
    // No
    "Uh. No.",
    "No way",
    "Not gonna happen",
    "Nope",
    "No siree",
    "How about no.",
    "Could you not?",
    "NoNoNoNoNo",
    "Nah... Nah.",
    "... GOD no.",
    "WTF? No.",
    "I can't go for that",
    "No can do"
];

function clearField() {
   document.getElementById("questionBox").value = ""; 
   $('#thinking').show();
    $('#invalid-submit').hide();
    $('#answerText').hide();
};


var question = $('#questionBox').length;  

$("#getAnswer").on('click', function (){
    var question = $('#questionBox').val(); 
    if (question.length >= 5){
        $('#invalid-submit').hide();
        document.getElementById("answerText").innerHTML = options[Math.floor(Math.random() * 43)];
        $('#answerText').show();
        $('#thinking').hide();
//        console.log(options[Math.floor(Math.random() * 43)]);
    } else {
        $('#invalid-submit').show();
        $('#answerText').hide();
        $('#thinking').hide();
    }

});
