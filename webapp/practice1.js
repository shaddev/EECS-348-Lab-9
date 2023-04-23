const subtitles = ["Student.", "Developer.", "Not a weeb I swear."];
let cur_subtitle = 0;
let cur_index = 0;
let end_reached = false;
const elem = document.getElementById("subtitle");

window.setInterval(function () {
    if(! end_reached){
    cur_index ++;
    elem.innerHTML = subtitles[cur_subtitle].substring(0, cur_index) + "|";
    if(cur_index > subtitles[cur_subtitle].length){
        end_reached = true;
    }
}

}, 100)

window.setInterval(function () {
    if(end_reached){
        cur_index --;
        elem.innerHTML = subtitles[cur_subtitle].substring(0, cur_index) + "|";
        if(cur_index == 0){
            cur_subtitle = (cur_subtitle+1) % subtitles.length;
            end_reached = false;
        }
    }
}, 50)