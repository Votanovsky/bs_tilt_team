const tiltBg = document.querySelector('.tilt_bg');
const tiltText = tiltBg.querySelectorAll('.text_main, .text_sub');
const tiltImg = tiltBg.querySelectorAll('.scroll_tilt');
const tiltImg2 = tiltBg.querySelectorAll('.scroll_tilt2');

// let imgTop = parseFloat(getComputedStyle(tiltImg).top);
let textTop = [];
for (let [i, t] of tiltText.entries()) { 
    textTop[i] = parseFloat(getComputedStyle(t).top);
};

let imgTop = [];
for (let [i, t] of tiltImg.entries()) { 
    imgTop[i] = parseFloat(getComputedStyle(t).top);
};

let imgTop2 = [];
for (let [i, t] of tiltImg2.entries()) { 
    imgTop2[i] = parseFloat(getComputedStyle(t).top);
};

window.onscroll = function(e) {
    for (let [i, t] of tiltText.entries()) { 
        t.style.top = textTop[i] + window.scrollY * -0.09 + 'px';
    }

    for (let [i, t] of tiltImg.entries()) { 
        t.style.top = imgTop[i] + window.scrollY * 0.08 + 'px';
    }

    // for (let [i, t] of tiltImg2.entries()) { 
    //     t.style.top = imgTop2[i] + window.scrollY * 0.09 + 'px';
    // }
    // tiltImg.style.top = imgTop + window.scrollY * 0.2 + 'px'; 
    console.log(window.scrollY, tiltImg)
}