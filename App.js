let Seconds_hand = document.querySelector(".Seconds");
let Minutes_hand = document.querySelector(".Minutes");
let Hours_hand = document.querySelector(".Hours");

setInterval(Clock_fn, 1000);

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
    let H = Time.getHours();

    let Digital = document.querySelector(".Digital_clock");

    // if (S < 10) {
    //   S = "0" + S;
    // }

    S = (S < 10 ? "0" + S : S);
    M = (M < 10 ? "0" + M : M);
    // if(H > 12){
    //   H = H - 12;
    // }

    H = (H > 12 ? H - 12 : H);

    let Digital_time = H + "<p style='color:#666;'>:</p>" + M + "<p style='color:#666;'>:</p>" + S;
    
    Digital.innerHTML = Digital_time;
}

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
}
Auto_ratio_set(Full_area);
onresize = () => {
    Auto_ratio_set(Full_area)
};