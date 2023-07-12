//Canvas
const canvas = document.getElementById("canvas");

//BODY PARTS
const chopperHead = document.getElementById("chopper-head");
const chopperBody = document.getElementById("chopper-body");
const chopperLegs = document.getElementById("chopper-legs");
const chopperEyes = document.getElementById("chopper-eyes");
const chopperMouth = document.getElementById("chopper-mouth");
const chopperPants = document.getElementById("chopper-pants");
const chopperObject = document.getElementById("chopper-object");

//---------
//Character array
//--------

const character = [
    {
        name: "Chopper",
        head: "../style/body_parts/Chopper/chopper_head.png",
        body: "../style/body_parts/Chopper/chopper_body.png",
        eyes: "../style/body_parts/Chopper/chopper_eyes.png",
        mouth: "../style/body_parts/Chopper/chopper_mouth.png",
        legs: "../style/body_parts/Chopper/chopper_legs.png",
        pants: "../style/body_parts/Chopper/chopper_pants.png",
        object: "../style/body_parts/Chopper/chopper_object.png",
    },
    {
        name: "Luffy",
        head: "../style/body_parts/Luffy/luffy_head.png",
        body: "../style/body_parts/Luffy/luffy_body.png",
        eyes: "../style/body_parts/Luffy/luffy_eyes.png",
        mouth: "../style/body_parts/Luffy/luffy_mouth.png",
        legs: "../style/body_parts/Luffy/luffy_legs.png",
        pants: "../style/body_parts/Luffy/luffy_pants.png",
        object: "../style/body_parts/Luffy/luffy_object.png",
    },
    {
        name: "Zoro",
        head: "../style/body_parts/Zoro/zoro_head.png",
        body: "../style/body_parts/Zoro/zoro_body.png",
        eyes: "../style/body_parts/Zoro/zoro_eyes.png",
        mouth: "../style/body_parts/Zoro/zoro_mouth.png",
        legs: "../style/body_parts/Zoro/zoro_legs.png",
        pants: "../style/body_parts/Zoro/zoro_pants.png",
        object: "../style/body_parts/Zoro/zoro_object.png",
    },
    {
        name: "Sanji",
        head: "../style/body_parts/Sanji/sanji_head.png",
        body: "../style/body_parts/Sanji/sanji_body.png",
        eyes: "../style/body_parts/Sanji/sanji_eyes.png",
        mouth: "../style/body_parts/Sanji/sanji_mouth.png",
        legs: "../style/body_parts/Sanji/sanji_legs.png",
        pants: "../style/body_parts/Sanji/sanji_pants.png",
        object: "../style/body_parts/Sanji/sanji_object.png",
    },
];

const characterAmount = Object.keys(character).length;

//--------------
//SETINGS BUTTONS
//--------------

//HEAD --------

const headLabel = document.getElementById("head-label");
const nextHead = document.getElementById("right-head");
const previousHead = document.getElementById("left-head");

let iHead = 0;

previousHead.addEventListener("click", () => {
    iHead--;
    if (iHead >= 0) {
        headLabel.innerText = character[iHead].name;
        chopperHead.setAttribute("src", character[iHead].head);
    } else {
        iHead = characterAmount - 1;
        headLabel.innerText = character[iHead].name;
        chopperHead.setAttribute("src", character[iHead].head);
    }
});

nextHead.addEventListener("click", () => {
    iHead++;
    if (iHead < characterAmount) {
        headLabel.innerText = character[iHead].name;
        chopperHead.setAttribute("src", character[iHead].head);
    } else {
        iHead = 0;
        headLabel.innerText = character[iHead].name;
        chopperHead.setAttribute("src", character[iHead].head);
    }
});

//BODY ------
const bodyLabel = document.getElementById("body-label");
const nextBody = document.getElementById("right-body");
const previousBody = document.getElementById("left-body");

let iBody = 0;

previousBody.addEventListener("click", () => {
    iBody--;
    if (iBody >= 0) {
        bodyLabel.innerText = character[iBody].name;
        chopperBody.setAttribute("src", character[iBody].body);
    } else {
        iBody = characterAmount - 1;
        bodyLabel.innerText = character[iBody].name;
        chopperBody.setAttribute("src", character[iBody].body);
    }
});

nextBody.addEventListener("click", () => {
    iBody++;
    if (iBody < characterAmount) {
        bodyLabel.innerText = character[iBody].name;
        chopperBody.setAttribute("src", character[iBody].body);
    } else {
        iBody = 0;
        bodyLabel.innerText = character[iBody].name;
        chopperBody.setAttribute("src", character[iBody].body);
    }
});

//MOUTH -------
const mouthLabel = document.getElementById("mouth-label");
const nextMouth = document.getElementById("right-mouth");
const previousMouth = document.getElementById("left-mouth");

let iMouth = 0;

previousMouth.addEventListener("click", () => {
    iMouth--;
    if (iMouth >= 0) {
        mouthLabel.innerText = character[iMouth].name;
        chopperMouth.setAttribute("src", character[iMouth].mouth);
    } else {
        iMouth = characterAmount - 1;
        mouthLabel.innerText = character[iMouth].name;
        chopperMouth.setAttribute("src", character[iMouth].mouth);
    }
});

nextMouth.addEventListener("click", () => {
    iMouth++;
    if (iMouth < characterAmount) {
        mouthLabel.innerText = character[iMouth].name;
        chopperMouth.setAttribute("src", character[iMouth].mouth);
    } else {
        iMouth = 0;
        mouthLabel.innerText = character[iMouth].name;
        chopperMouth.setAttribute("src", character[iMouth].mouth);
    }
});

//EYES ---------
const eyesLabel = document.getElementById("eyes-label");
const nextEyes = document.getElementById("right-eyes");
const previousEyes = document.getElementById("left-eyes");

let iEyes = 0;

previousEyes.addEventListener("click", () => {
    iEyes--;
    if (iEyes >= 0) {
        eyesLabel.innerText = character[iEyes].name;
        chopperEyes.setAttribute("src", character[iEyes].eyes);
    } else {
        iEyes = characterAmount - 1;
        eyesLabel.innerText = character[iEyes].name;
        chopperEyes.setAttribute("src", character[iEyes].eyes);
    }
});

nextEyes.addEventListener("click", () => {
    iEyes++;
    if (iEyes < characterAmount) {
        eyesLabel.innerText = character[iEyes].name;
        chopperEyes.setAttribute("src", character[iEyes].eyes);
    } else {
        iEyes = 0;
        eyesLabel.innerText = character[iEyes].name;
        chopperEyes.setAttribute("src", character[iEyes].eyes);
    }
});

//Pants
const pantsLabel = document.getElementById("pants-label");
const nextPants = document.getElementById("right-pants");
const previousPants = document.getElementById("left-pants");

let iPants = 0;

previousPants.addEventListener("click", () => {
    iPants--;
    if (iPants >= 0) {
        pantsLabel.innerText = character[iPants].name;
        chopperPants.setAttribute("src", character[iPants].pants);
    } else {
        iPants = characterAmount - 1;
        pantsLabel.innerText = character[iPants].name;
        chopperPants.setAttribute("src", character[iPants].pants);
    }
});

nextPants.addEventListener("click", () => {
    iPants++;
    if (iPants < characterAmount) {
        pantsLabel.innerText = character[iPants].name;
        chopperPants.setAttribute("src", character[iPants].pants);
    } else {
        iPants = 0;
        pantsLabel.innerText = character[iPants].name;
        chopperPants.setAttribute("src", character[iPants].pants);
    }
});

//Legs
const legsLabel = document.getElementById("legs-label");
const nextLegs = document.getElementById("right-legs");
const previousLegs = document.getElementById("left-legs");

let iLegs = 0;

previousLegs.addEventListener("click", () => {
    iLegs--;
    if (iLegs >= 0) {
        legsLabel.innerText = character[iLegs].name;
        chopperLegs.setAttribute("src", character[iLegs].legs);
    } else {
        iLegs = characterAmount - 1;
        legsLabel.innerText = character[iLegs].name;
        chopperLegs.setAttribute("src", character[iLegs].legs);
    }
});

nextLegs.addEventListener("click", () => {
    iLegs++;
    if (iLegs < characterAmount) {
        legsLabel.innerText = character[iLegs].name;
        chopperLegs.setAttribute("src", character[iLegs].legs);
    } else {
        iLegs = 0;
        legsLabel.innerText = character[iLegs].name;
        chopperLegs.setAttribute("src", character[iLegs].legs);
    }
});

//Object
const objectLabel = document.getElementById("object-label");
const nextObject = document.getElementById("right-object");
const previousObject = document.getElementById("left-object");

let iObject = 0;

previousObject.addEventListener("click", () => {
    iObject--;
    if (iObject >= 0) {
        objectLabel.innerText = character[iObject].name;
        chopperObject.setAttribute("src", character[iObject].object);
    } else {
        iObject = characterAmount - 1;
        objectLabel.innerText = character[iObject].name;
        chopperObject.setAttribute("src", character[iObject].object);
    }
});

nextObject.addEventListener("click", () => {
    iObject++;
    if (iObject < characterAmount) {
        objectLabel.innerText = character[iObject].name;
        chopperObject.setAttribute("src", character[iObject].object);
    } else {
        iObject = 0;
        objectLabel.innerText = character[iObject].name;
        chopperObject.setAttribute("src", character[iObject].object);
    }
});
