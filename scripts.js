var indexG = 0;

const uxui = {
    title: "UX | UI",
    text: "words words words",
};
const frountEn = {
    title: "Front-End Development",
    text: "words words words",
};

const programming = {
    title: "Programming  ",
    text: "Learning new coding languages and frameworks is an essential goal for any software developer \
    who wants to stay current and competitive in the ever-evolving tech industry. By expanding your knowledge, \
    you will be able to tackle complex projects, develop innovative solutions, and stay ahead of the curve. With \
    your dedication to continuous learning, you can unlock new opportunities, improve your coding skills, and become \
    a versatile software developer capable of taking on any challenge.",
};

const project1 = {
    title: "Project 1",
    text: "words words words",
};

const project2 = {
    title: "Project 2",
    text: "words words words",
};

const contentsGoal = [uxui, frountEn, programming, project1, project2];

function prevFunction() {
    if (indexG == 0) {
        indexG = contentsGoal.length - 1;
    } else {
        indexG--;
    }
    var contentTitle = document.querySelector('#title-goal');
    // var contentText = document.querySelector('.container .inside-goal .text-goal');

    counterTitle.innerHTML = contentsGoal[indexG].title;
    // contentText.innerHTML = contentsGoal[indexG].text;
}



// function nextFunction() {

//     document.querySelector('.container .inside-goal .text-goal').innerHTML = ;
// }