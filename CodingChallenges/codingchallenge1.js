let johnmass = 92, johnheight = 1.95;
let markmass = 78, markheight = 1.69;

bmijohn = johnmass / johnheight ** 2;
bmimark = markmass / markheight ** 2;

console.log(bmijohn, bmimark);

let markHigherBMI = bmimark > bmijohn;

console.log(markHigherBMI);