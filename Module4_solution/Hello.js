(function(window) {
    var sayHello = new Object();
    var speakHello = "Hello";
    sayHello.speak = function(name) {
        console.log(speakHello + " " + name);
    };
    window.sayHello = sayHello;
})(window);
