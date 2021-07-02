
let Seconds_hand = document.querySelector(".Seconds");
let Minutes_hand = document.querySelector(".Minutes");
let Hours_hand = document.querySelector(".Hours");

setInterval(Clock_fn, 1000);

function Clock_fn(){
    Time = new Date();
    Seconds_ratio = Time.getSeconds() / 60;
    Minutes_ratio = (Seconds_ratio + Time.getMinutes()) / 60;
    Hours_ratio = (Minutes_ratio + Time.getHours()) / 12;

    Set_rotation(Seconds_hand, Seconds_ratio)
    Set_rotation(Minutes_hand, Minutes_ratio)
    Set_rotation(Hours_hand, Hours_ratio)
}

function Set_rotation(Eliment,Rotation_ratio){
    Eliment.style.setProperty('--rotation', Rotation_ratio * 360)
}

Clock_fn()
