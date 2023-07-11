
//Canvas 
const canvas = document.getElementById('canvas');

//Chopper parts
const chopperHead = document.getElementById('chopper-head');
const chopperBody = document.getElementById('chopper-body');
const chopperLegs = document.getElementById('chopper-legs');
const chopperEyes = document.getElementById('chopper-eyes');
const chopperMouth = document.getElementById('chopper-mouth');
const chopperPants = document.getElementById('chopper-pants');
const chopperObject = document.getElementById('chopper-object');



//--------------
//SETINGS BUTTONS
//--------------


//HEAD --------

const headLabel = document.getElementById('head-label');
const rightHead = document.getElementById('right-head');
const leftHead = document.getElementById('left-head');


//Right Button
rightHead.addEventListener('click', () => {
    if (headLabel.innerText === 'Chopper'){
        headLabel.innerText = 'Luffy'
    } else if (headLabel.innerText === 'Luffy'){
        headLabel.innerText = 'Sanji'
    } else if (headLabel.innerText === 'Sanji'){
        headLabel.innerText = 'Zoro'
    } else {
        return false
    }
});



//Left button
leftHead.addEventListener('click', () => {
    if (headLabel.innerText === 'Zoro'){
        headLabel.innerText = 'Sanji'
    } else if (headLabel.innerText === 'Sanji'){
        headLabel.innerText = 'Luffy'
    } else if (headLabel.innerText === 'Luffy'){
        headLabel.innerText = 'Chopper'
    } else {
        return false
    }
});




//BODY ------
const bodyLabel = document.getElementById('body-label');
const rightBody = document.getElementById('right-body');
const leftBody = document.getElementById('left-body');


//Right Button
rightBody.addEventListener('click', () => {
    if (bodyLabel.innerText === 'Chopper'){
        bodyLabel.innerText = 'Luffy'
    } else if (bodyLabel.innerText === 'Luffy'){
        bodyLabel.innerText = 'Sanji'
    } else if (bodyLabel.innerText === 'Sanji'){
        bodyLabel.innerText = 'Zoro'
    } else {
        console.log('averaver')
    }
});



//Left button
leftBody.addEventListener('click', () => {
    if (bodyLabel.innerText === 'Zoro'){
        bodyLabel.innerText = 'Sanji'
    } else if (bodyLabel.innerText === 'Sanji'){
        bodyLabel.innerText = 'Luffy'
    } else if (bodyLabel.innerText === 'Luffy'){
        bodyLabel.innerText = 'Chopper'
    } else {
        return false
    }
});





//MOUTH -------
const mouthLabel = document.getElementById('mouth-label');
const rightMouth = document.getElementById('right-mouth');
const leftMouth = document.getElementById('left-mouth');


//Right Button
rightMouth.addEventListener('click', () => {
    if (mouthLabel.innerText === 'Chopper'){
        mouthLabel.innerText = 'Luffy'
    } else if (mouthLabel.innerText === 'Luffy'){
        mouthLabel.innerText = 'Sanji'
    } else if (mouthLabel.innerText === 'Sanji'){
        mouthLabel.innerText = 'Zoro'
    } else {
        console.log('averaver')
    }
});



//Left button
leftMouth.addEventListener('click', () => {
    if (mouthLabel.innerText === 'Zoro'){
        mouthLabel.innerText = 'Sanji'
    } else if (mouthLabel.innerText === 'Sanji'){
        mouthLabel.innerText = 'Luffy'
    } else if (mouthLabel.innerText === 'Luffy'){
        mouthLabel.innerText = 'Chopper'
    } else {
        return false
    }
});



//EYES ---------
const eyesLabel = document.getElementById('eyes-label');
const rightEyes = document.getElementById('right-eyes');
const leftEyes = document.getElementById('left-eyes');

//Right Button
rightEyes.addEventListener('click', () => {
    if (eyesLabel.innerText === 'Chopper'){
        eyesLabel.innerText = 'Luffy'
    } else if (eyesLabel.innerText === 'Luffy'){
        eyesLabel.innerText = 'Sanji'
    } else if (eyesLabel.innerText === 'Sanji'){
        eyesLabel.innerText = 'Zoro'
    } else {
        console.log('averaver')
    }
});



//Left button
leftEyes.addEventListener('click', () => {
    if (eyesLabel.innerText === 'Zoro'){
        eyesLabel.innerText = 'Sanji'
    } else if (eyesLabel.innerText === 'Sanji'){
        eyesLabel.innerText = 'Luffy'
    } else if (eyesLabel.innerText === 'Luffy'){
        eyesLabel.innerText = 'Chopper'
    } else {
        return false
    }
});



//Pants
const pantsLabel = document.getElementById('pants-label');
const rightPants = document.getElementById('right-pants');
const leftPants = document.getElementById('left-pants');

//Right Button
rightPants.addEventListener('click', () => {
    if (pantsLabel.innerText === 'Chopper'){
        pantsLabel.innerText = 'Luffy'
    } else if (pantsLabel.innerText === 'Luffy'){
        pantsLabel.innerText = 'Sanji'
    } else if (pantsLabel.innerText === 'Sanji'){
        pantsLabel.innerText = 'Zoro'
    } else {
        console.log('averaver')
    }
});



//Left button
leftPants.addEventListener('click', () => {
    if (pantsLabel.innerText === 'Zoro'){
        pantsLabel.innerText = 'Sanji'
    } else if (pantsLabel.innerText === 'Sanji'){
        pantsLabel.innerText = 'Luffy'
    } else if (pantsLabel.innerText === 'Luffy'){
        pantsLabel.innerText = 'Chopper'
    } else {
        return false
    }
});

//Legs
const legsLabel = document.getElementById('legs-label');
const rightLegs = document.getElementById('right-legs');
const leftLegs = document.getElementById('left-legs');

//Right Button
rightLegs.addEventListener('click', () => {
    if (legsLabel.innerText === 'Chopper'){
        legsLabel.innerText = 'Luffy'
    } else if (legsLabel.innerText === 'Luffy'){
        legsLabel.innerText = 'Sanji'
    } else if (legsLabel.innerText === 'Sanji'){
        legsLabel.innerText = 'Zoro'
    } else {
        console.log('averaver')
    }
});



//Left button
leftLegs.addEventListener('click', () => {
    if (legsLabel.innerText === 'Zoro'){
        legsLabel.innerText = 'Sanji'
    } else if (legsLabel.innerText === 'Sanji'){
        legsLabel.innerText = 'Luffy'
    } else if (legsLabel.innerText === 'Luffy'){
        legsLabel.innerText = 'Chopper'
    } else {
        return false
    }
});

//Object
const objectLabel = document.getElementById('object-label');
const rightObject = document.getElementById('right-object');
const leftObject = document.getElementById('left-object');

//Right Button
rightObject.addEventListener('click', () => {
    if (objectLabel.innerText === 'Chopper'){
        objectLabel.innerText = 'Luffy'
    } else if (objectLabel.innerText === 'Luffy'){
        objectLabel.innerText = 'Sanji'
    } else if (objectLabel.innerText === 'Sanji'){
        objectLabel.innerText = 'Zoro'
    } else {
        console.log('averaver')
    }
});



//Left button
leftObject.addEventListener('click', () => {
    if (objectLabel.innerText === 'Zoro'){
        objectLabel.innerText = 'Sanji'
    } else if (objectLabel.innerText === 'Sanji'){
        objectLabel.innerText = 'Luffy'
    } else if (objectLabel.innerText === 'Luffy'){
        objectLabel.innerText = 'Chopper'
    } else {
        return false
    }
});