function get_value(id){
    return document.getElementById(id).value ? document.getElementById(id).value : 0;
}

function practice2_modifications(){
    let paragraph = document.getElementById("alter_paragraph")
    let border_width = document.getElementById("border_width").value
    paragraph.style.color = `rgb(${get_value("r_font")},${get_value("g_font")},${get_value("b_font")})`
    paragraph.style.borderColor = `rgb(${get_value("r_border")},${get_value("g_border")},${get_value("b_border")})`
    paragraph.style.borderWidth = border_width ? `${border_width}px` : '5px'
}

function verify_password(){
    let password1 = document.getElementById("password_first").value
    let password2 = document.getElementById("password_second").value
    if (password1.length < 8){
        alert("First password is less than 8 characters!")
    } 
    else if (password2.length < 8) {
        alert("Second password is less than 8 characters!")
    }
    else if (password1 !== password2){
        alert("The two passwords don't match!")
    }
    else{
        alert("The passwords match!")
    }
}