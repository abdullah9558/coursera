(function(window) {
    var sayBye = new Object();
    var speakBye = "Good Bye";
    sayBye.speak = function speak(name) {
        console.log(speakBye + " " + name);
    };
    window.sayBye = sayBye;
})(window);
