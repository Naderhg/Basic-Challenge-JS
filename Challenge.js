/*
    Variable And Concatenation Challenge
*/
let the_title = "JS Challenge";
const description = "Assigned by Nader";
let date = "25/10/2022";


let markUp = `
<div class="card">
    <div class="child">
        <h3>Hello ${the_title}</h3>
        <p>${description}</p>
        <span>${date}</span>
    </div>
</div>
`;
document.write(markUp.repeat(4));
