let Seconds_hand = document.querySelector(".Seconds");
let Minutes_hand = document.querySelector(".Minutes");
let Hours_hand = document.querySelector(".Hours");

setInterval(Clock_fn, 1000);

let Digital = document.querySelector(".Digital_clock");
let Opacity = true;

function Clock_fn() {
    Time = new Date();
    Seconds_ratio = Time.getSeconds() / 60;
    Minutes_ratio = (Seconds_ratio + Time.getMinutes()) / 60;
    Hours_ratio = (Minutes_ratio + Time.getHours()) / 12;

    Set_rotation(Seconds_hand, Seconds_ratio)
    Set_rotation(Minutes_hand, Minutes_ratio)
    Set_rotation(Hours_hand, Hours_ratio)

    // =========== DIGITAL CLOCK ===========
    let S = Time.getSeconds();
    let M = Time.getMinutes();
    // let H = 14;
    let H = Time.getHours();

    if (H == 0) {
        H = 24;
    };


    S = (S < 10 ? "0" + S : S);
    M = (M < 10 ? "0" + M : M);


    let Day_or;

    if (H < 12 || H == 24) {
        Day_or = "AM"
    }
    if (H > 11 && H < 24) {
        Day_or = "PM"
    }

    H = (H > 12 ? H - 12 : H);
    Digital.innerHTML = `${H}<p style='color:#666;'>:</p> ${M} <p style='color:#666;'>:</p>  ${S}\u00A0<p style="color:#333;border-left:3px solid green;">\u00A0${Day_or}</p>`;

    if (Opacity == true) {
        document.querySelectorAll(".Digital_clock p")[2].style.cssText = "border-left:3px solid green;";
        Opacity = false;
    } else {
        document.querySelectorAll(".Digital_clock p")[2].style.cssText = "border-left:3px solid red;";
        Opacity = true;
    }
}
// document.querySelectorAll(".Digital_clock p")[1].style.opacity="0"



function Set_rotation(Eliment, Rotation_ratio) {
    Eliment.style.setProperty('--rotation', Rotation_ratio * 360)
}

Clock_fn()





// ========AUTO RATIO SET==========
let Full_area = document.querySelector(".Clock_container");

function Auto_ratio_set(Full_area) {
    let Content_ratio;
    let Win_height = window.innerHeight;
    let Win_width = window.innerWidth;
    // console.log("Win_hei is:- " + Win_height + ", Win_width is:- " + Win_width);
    if (Win_height < Win_width) {
        Content_ratio = Win_height;
    } else {
        Content_ratio = Win_width;
    }
    // console.log("Content_ratio:- " + Content_ratio)
    //SET PROPERTY VALUE
    // Full_area = `${Content_ratio + "px"}`;
    Full_area.style.cssText = `width:${Content_ratio + "px"};`
    Digital.style.cssText = `margin-top:-${Content_ratio / 100 * 30 + "px"};font-size:${Content_ratio / 100 * 5 + "px"};`;

    document.querySelector(".Clock_container .Seconds").style.cssText = `width:${Content_ratio / 100 * 0.8 + "px"}`;
    document.querySelector(".Clock_container .Minutes").style.cssText = `width:${Content_ratio / 100 * 1.4 + "px"}`;
    document.querySelector(".Clock_container .Hours").style.cssText = `width:${Content_ratio / 100 * 2.5 + "px"}`;

    document.querySelectorAll(".Clock_container .Hands").forEach(Element => {
        Element.style.cssText = `border:${Content_ratio / 100 * 0.001 + "px"} solid #fff;`;
    })
}
Auto_ratio_set(Full_area);
onresize = () => {
    Auto_ratio_set(Full_area);
};