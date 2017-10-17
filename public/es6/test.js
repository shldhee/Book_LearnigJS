"use strict";

const sentences = [
    { subject: "Javascript", verb: "is"},
    { subject: "Dogs", verb: "are"}
];

function say({ subject, verb }) {
    console.log(`${subject} ${verb}`);
}

for(let s of sentences) {
    say(s);
}
