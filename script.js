var right = 0;
var pos = [0, 50, 100];

function slide_left() {
    if (right == pos[0]) {
        right = pos[2];    
    }
    else if (right == pos[1]) {
        right = pos[0];
    }
    else if (right == pos[2]) {
        right = pos[1];
    }
    document.getElementById('slider').style.right = right + "%";
}

function slide_right() {
    if (right == pos[0]) {
        right = pos[1];    
    }
    else if (right == pos[1]) {
        right = pos[2];
    }
    else if (right == pos[2]) {
        right = pos[0];
    }
    document.getElementById('slider').style.right = right + "%";
}
