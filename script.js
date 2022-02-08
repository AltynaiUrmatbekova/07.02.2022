// var vasya = {
//     name: "Vasiliy",
//     lastname: "Petrovskiy",
//     age: 25,
//     hobbies: {
//         art: "Drawing, singing",
//         display: function() {
//             document.write(  `I love ${this.art}.`);
//         }
//     }
//     greet: function() {
//     document.write(`Hello, my name is ${this.name}! I am ${this.age} years old`);
// }
// //         

// vasya.greet();
// vasya.greet();
// vasya.greet();
// document.write(vasya.age);
// document.write(vasya.lastName);
// document.write(vasya.hobbies.art);

// document.body.style.background = "red";
// document.body.textContent = "Hello world";

// getElementById
// let helloWorldDiv = document.getElementById("hello-world");

// helloWorldDiv.textContent = "Nice to meet you!";
// helloWorldDiv.style.background = "green";
// helloWorldDiv.style.color = "white";
// helloWorldDiv.style.textDecoration = "underline";
// helloWorldDiv.style.fontSize = "28px";

// // getElementsByTagName
// let allParagraphs = document.getElementsByTagName("p");

// for(let paragraph of allParagraphs) {
//     paragraph.style.backgroundColor = "blue";

// }
// let allHelloWorld = document.getElementsByClassName("hello-world");

// for(let helloWorld of allHelloWorld) {
//     helloWorld.style.color = "red";
//     helloWorld.style.backgroundColor = "yellow";
//     helloWorld.style.fontStyle = "italic";

// }

// querySelector
// let helloWorld2 = document.querySelector("#hello-world");
// helloWorld2.style.backgroundColor = "purple";

// let allHelloWorlds2 = document.querySelectorAll(".hello-world");

// for(let helloWorld of allHelloWorld) {
//     helloWorld.style.color = "red";
//     helloWorld.style.backgroundColor = "yellow";
//     helloWorld.style.fontStyle = "italic";

// }
document.querySelectorAA('p');
for (let p of allP) {
    p.style.flexBasis = "90%"
}
var button1 = document.querySelector('button:nth-of-type(1)');
var button2 = document.querySelector('button:nth-of-type(2)');
var button3 = document.querySelector('button:nth-of-type(3)');

button1.aadEventListener('click', function() {
    for (let p of allP) {
        p.style.flexBasis = "90%"
}
});
    button2.aadEventListener('click', function() {
        for (let p of allP) {
            p.style.flexBasis = "45%"
    }
});
        button3.aadEventListener('click', function() {
            for (let p of allP) {
                p.style.flexBasis = "30%"
        }
    });
            
