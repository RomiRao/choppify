const $ = (selector) => document.getElementById(selector);

//--------
//DOWNLOAD BUTTON
//-------
$("save-button").addEventListener("click", () => downloadChopper());

const downloadChopper = () => {
    let scale = 8;
    domtoimage
        .toBlob($("chopper-container"), {
            width: $("chopper-container").clientWidth * scale,
            height: $("chopper-container").clientHeight * scale,
            style: {
                transform: "scale(" + scale + ")",
                transformOrigin: "top left",
            },
        })
        .then(function (blob) {
            window.saveAs(blob, "choppify.png");
        });
};

//-------
//Preloading images
//--------

function preload_image(im_url) {
    let img = new Image();
    img.src = im_url;
}

//Chopper
preload_image("../choppify/style/body_parts/Chopper/chopper_head.png");
preload_image("../choppify/style/body_parts/Chopper/chopper_body.png");
preload_image("../choppify/style/body_parts/Chopper/chopper_eyes.png");
preload_image("../choppify/style/body_parts/Chopper/chopper_mouth.png");
preload_image("../choppify/style/body_parts/Chopper/chopper_pants.png");
preload_image("../choppify/style/body_parts/Chopper/chopper_object.png");
preload_image("../choppify/style/body_parts/Chopper/chopper_legs.png");

//Luffy
preload_image("../choppify/style/body_parts/Luffy/luffy_head.png");
preload_image("../choppify/style/body_parts/Luffy/luffy_body.png");
preload_image("../choppify/style/body_parts/Luffy/luffy_eyes.png");
preload_image("../choppify/style/body_parts/Luffy/luffy_mouth.png");
preload_image("../choppify/style/body_parts/Luffy/luffy_pants.png");
preload_image("../choppify/style/body_parts/Luffy/luffy_object.png");
preload_image("../choppify/style/body_parts/Luffy/luffy_legs.png");

//Sanji
preload_image("../choppify/style/body_parts/Sanji/sanji_head.png");
preload_image("../choppify/style/body_parts/Sanji/sanji_body.png");
preload_image("../choppify/style/body_parts/Sanji/sanji_eyes.png");
preload_image("../choppify/style/body_parts/Sanji/sanji_mouth.png");
preload_image("../choppify/style/body_parts/Sanji/sanji_pants.png");
preload_image("../choppify/style/body_parts/Sanji/sanji_object.png");
preload_image("../choppify/style/body_parts/Sanji/sanji_legs.png");

//Zoro
preload_image("../choppify/style/body_parts/Zoro/zoro_head.png");
preload_image("../choppify/style/body_parts/Zoro/zoro_body.png");
preload_image("../choppify/style/body_parts/Zoro/zoro_eyes.png");
preload_image("../choppify/style/body_parts/Zoro/zoro_mouth.png");
preload_image("../choppify/style/body_parts/Zoro/zoro_pants.png");
preload_image("../choppify/style/body_parts/Zoro/zoro_object.png");
preload_image("../choppify/style/body_parts/Zoro/zoro_legs.png");

//---------
//Characters
//--------

const character = [
    {
        name: "Chopper",
        head: "../choppify/style/body_parts/Chopper/chopper_head.png",
        body: "../choppify/style/body_parts/Chopper/chopper_body.png",
        eyes: "../choppify/style/body_parts/Chopper/chopper_eyes.png",
        mouth: "../choppify/style/body_parts/Chopper/chopper_mouth.png",
        legs: "../choppify/style/body_parts/Chopper/chopper_legs.png",
        pants: "../choppify/style/body_parts/Chopper/chopper_pants.png",
        object: "../choppify/style/body_parts/Chopper/chopper_object.png",
    },
    {
        name: "Luffy",
        head: "../choppify/style/body_parts/Luffy/luffy_head.png",
        body: "../choppify/style/body_parts/Luffy/luffy_body.png",
        eyes: "../choppify/style/body_parts/Luffy/luffy_eyes.png",
        mouth: "../choppify/style/body_parts/Luffy/luffy_mouth.png",
        legs: "../choppify/style/body_parts/Luffy/luffy_legs.png",
        pants: "../choppify/style/body_parts/Luffy/luffy_pants.png",
        object: "../choppify/style/body_parts/Luffy/luffy_object.png",
    },
    {
        name: "Zoro",
        head: "../choppify/style/body_parts/Zoro/zoro_head.png",
        body: "../choppify/style/body_parts/Zoro/zoro_body.png",
        eyes: "../choppify/style/body_parts/Zoro/zoro_eyes.png",
        mouth: "../choppify/style/body_parts/Zoro/zoro_mouth.png",
        legs: "../choppify/style/body_parts/Zoro/zoro_legs.png",
        pants: "../choppify/style/body_parts/Zoro/zoro_pants.png",
        object: "../choppify/style/body_parts/Zoro/zoro_object.png",
    },
    {
        name: "Sanji",
        head: "../choppify/style/body_parts/Sanji/sanji_head.png",
        body: "../choppify/style/body_parts/Sanji/sanji_body.png",
        eyes: "../choppify/style/body_parts/Sanji/sanji_eyes.png",
        mouth: "../choppify/style/body_parts/Sanji/sanji_mouth.png",
        legs: "../choppify/style/body_parts/Sanji/sanji_legs.png",
        pants: "../choppify/style/body_parts/Sanji/sanji_pants.png",
        object: "../choppify/style/body_parts/Sanji/sanji_object.png",
    },
];

const characterAmount = Object.keys(character).length;

//--------------
//SETINGS BUTTONS
//--------------

//Left function

//HEAD --------
let iHead = 0;

$("left-head").addEventListener("click", () => {
    iHead--;
    if (iHead >= 0) {
        $("head-label").innerText = character[iHead].name;
        $(
            "chopper-head"
        ).style.backgroundImage = `url('${character[iHead].head}')`;
    } else {
        iHead = characterAmount - 1;
        $("head-label").innerText = character[iHead].name;
        $(
            "chopper-head"
        ).style.backgroundImage = `url('${character[iHead].head}')`;
    }
});

$("right-head").addEventListener("click", () => {
    iHead++;
    if (iHead < characterAmount) {
        $("head-label").innerText = character[iHead].name;
        $(
            "chopper-head"
        ).style.backgroundImage = `url('${character[iHead].head}')`;
    } else {
        iHead = 0;
        $("head-label").innerText = character[iHead].name;
        $(
            "chopper-head"
        ).style.backgroundImage = `url('${character[iHead].head}')`;
    }
});

//BODY ------

let iBody = 0;

$("left-body").addEventListener("click", () => {
    iBody--;
    if (iBody >= 0) {
        $("body-label").innerText = character[iBody].name;
        $(
            "chopper-body"
        ).style.backgroundImage = `url('${character[iBody].body}')`;
    } else {
        iBody = characterAmount - 1;
        $("body-label").innerText = character[iBody].name;
        $(
            "chopper-body"
        ).style.backgroundImage = `url('${character[iBody].body}')`;
    }
});

$("right-body").addEventListener("click", () => {
    iBody++;
    if (iBody < characterAmount) {
        $("body-label").innerText = character[iBody].name;
        $(
            "chopper-body"
        ).style.backgroundImage = `url('${character[iBody].body}')`;
    } else {
        iBody = 0;
        $("body-label").innerText = character[iBody].name;
        $(
            "chopper-body"
        ).style.backgroundImage = `url('${character[iBody].body}')`;
    }
});

//MOUTH -------
let iMouth = 0;

$("left-mouth").addEventListener("click", () => {
    iMouth--;
    if (iMouth >= 0) {
        $("mouth-label").innerText = character[iMouth].name;
        $(
            "chopper-mouth"
        ).style.backgroundImage = `url('${character[iMouth].mouth}')`;
    } else {
        iMouth = characterAmount - 1;
        $("mouth-label").innerText = character[iMouth].name;
        $(
            "chopper-mouth"
        ).style.backgroundImage = `url('${character[iMouth].mouth}')`;
    }
});

$("right-mouth").addEventListener("click", () => {
    iMouth++;
    if (iMouth < characterAmount) {
        $("mouth-label").innerText = character[iMouth].name;
        $(
            "chopper-mouth"
        ).style.backgroundImage = `url('${character[iMouth].mouth}')`;
    } else {
        iMouth = 0;
        $("mouth-label").innerText = character[iMouth].name;
        $(
            "chopper-mouth"
        ).style.backgroundImage = `url('${character[iMouth].mouth}')`;
    }
});

//EYES ---------

let iEyes = 0;

$("left-eyes").addEventListener("click", () => {
    iEyes--;
    if (iEyes >= 0) {
        $("eyes-label").innerText = character[iEyes].name;
        $(
            "chopper-eyes"
        ).style.backgroundImage = `url('${character[iEyes].eyes}')`;
    } else {
        iEyes = characterAmount - 1;
        $("eyes-label").innerText = character[iEyes].name;
        $(
            "chopper-eyes"
        ).style.backgroundImage = `url('${character[iEyes].eyes}')`;
    }
});

$("right-eyes").addEventListener("click", () => {
    iEyes++;
    if (iEyes < characterAmount) {
        $("eyes-label").innerText = character[iEyes].name;
        $(
            "chopper-eyes"
        ).style.backgroundImage = `url('${character[iEyes].eyes}')`;
    } else {
        iEyes = 0;
        $("eyes-label").innerText = character[iEyes].name;
        $(
            "chopper-eyes"
        ).style.backgroundImage = `url('${character[iEyes].eyes}')`;
    }
});

//Pants
let iPants = 0;

$("left-pants").addEventListener("click", () => {
    iPants--;
    if (iPants >= 0) {
        $("pants-label").innerText = character[iPants].name;
        $(
            "chopper-pants"
        ).style.backgroundImage = `url('${character[iPants].pants}')`;
    } else {
        iPants = characterAmount - 1;
        $("pants-label").innerText = character[iPants].name;
        $(
            "chopper-pants"
        ).style.backgroundImage = `url('${character[iPants].pants}')`;
    }
});

$("right-pants").addEventListener("click", () => {
    iPants++;
    if (iPants < characterAmount) {
        $("pants-label").innerText = character[iPants].name;
        $(
            "chopper-pants"
        ).style.backgroundImage = `url('${character[iPants].pants}')`;
    } else {
        iPants = 0;
        $("pants-label").innerText = character[iPants].name;
        $(
            "chopper-pants"
        ).style.backgroundImage = `url('${character[iPants].pants}')`;
    }
});

//Legs

let iLegs = 0;

$("left-legs").addEventListener("click", () => {
    iLegs--;
    if (iLegs >= 0) {
        $("legs-label").innerText = character[iLegs].name;
        $(
            "chopper-legs"
        ).style.backgroundImage = `url('${character[iLegs].legs}')`;
    } else {
        iLegs = characterAmount - 1;
        $("legs-label").innerText = character[iLegs].name;
        $(
            "chopper-legs"
        ).style.backgroundImage = `url('${character[iLegs].legs}')`;
    }
});

$("right-legs").addEventListener("click", () => {
    iLegs++;
    if (iLegs < characterAmount) {
        $("legs-label").innerText = character[iLegs].name;
        $(
            "chopper-legs"
        ).style.backgroundImage = `url('${character[iLegs].legs}')`;
    } else {
        iLegs = 0;
        $("legs-label").innerText = character[iLegs].name;
        $(
            "chopper-legs"
        ).style.backgroundImage = `url('${character[iLegs].legs}')`;
    }
});

//Object

let iObject = 0;

$("left-object").addEventListener("click", () => {
    iObject--;
    if (iObject >= 0) {
        $("object-label").innerText = character[iObject].name;
        $(
            "chopper-object"
        ).style.backgroundImage = `url('${character[iObject].object}')`;
    } else {
        iObject = characterAmount - 1;
        $("object-label").innerText = character[iObject].name;
        $(
            "chopper-object"
        ).style.backgroundImage = `url('${character[iObject].object}')`;
    }
});

$("right-object").addEventListener("click", () => {
    iObject++;
    if (iObject < characterAmount) {
        $("object-label").innerText = character[iObject].name;
        $(
            "chopper-object"
        ).style.backgroundImage = `url('${character[iObject].object}')`;
    } else {
        iObject = 0;
        $("object-label").innerText = character[iObject].name;
        $(
            "chopper-object"
        ).style.backgroundImage = `url('${character[iObject].object}')`;
    }
});
