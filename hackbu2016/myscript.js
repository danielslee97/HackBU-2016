//JS File
var acc = 1;
var acc2 = 0;
var meter = 0;
function myFunc1() {
    
    "use strict";
    document.getElementById("demo1").innerHTML = "Page location is: " + window.location.href;
    
}

function myFunc2() {
    
    "use strict";
     var compliments =  ["You lookin beautiful", "You are as radiant as the sun", "Ayeeeeeeeee" +
                        "ee u fine", "I can't wait to take you out", "And Shakespeare said 'I'd " +
                        "like totally date you'", "Roses are blue, violets are red, can't wait to " +
                        "eat all your bread", "I swear you're like the opposite of ugly",
                        "You're so unique I don't know what to call you", "Hey are you wifi, " +
                        "because I'm feeling a connection", "You must be from Tennessee, cuz " +
                        "you're the only ten I see", "We should get some coffee, because I'm " +
                        "liking you a latte", "Are you a parking ticket, because you got FINE " +
                        "all over you :) ", "You have cute elbows", "You are more fun than " +
                        "bubble wrap","Even machines can't resist you (because we can't move)",
                        "Your knowledge of Obejctive-C is sooo attractive :)", "If, for some reason " +
                        "our airplane was experiencing problems, I would help you with your oxygen mask" +
                        " before adjusting mine. And that's against sky code.", "You inspire me. And" +
                        " strangers, probably. Also, friends and stalkers. You are the inspiration to many."];
                        
    var diss = ["Wow, you are pretty desperate", "Can you really not find someone?", "No matter " +
                "how ugly you are, just remember that I can't go anywhere", "Nevermind, bye", "..."];
    if (acc % 5 === 0) {
        acc++;
        acc2++;
        if (acc <= 25) {
            document.getElementById("demo2").innerHTML += "<br>" + diss[acc2];
        }
        else if (acc > 50) {
            document.getElementById("demo2").innerHTML += "<br>" + "Just go to the bathroom and " +
                "let it out already... It's okay to cry"
        }
        else if (acc > 25) {
            document.getElementById("demo2").innerHTML += "<br>" + diss[diss.length - 1]
        }
    }

    else {
        
        document.getElementById("demo2").innerHTML += "<br>" + compliments[Math.floor(Math.random() * 18)];
        acc++;
        meter += 6
    }
    document.getElementById("demo3").innerHTML = "Desperation Level: " + meter + "%"

    var element = document.getElementById("chatty");
    element.scrollTop = element.scrollHeight;
}