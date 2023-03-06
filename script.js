function insert(num) {
    let number = document.getElementById('display-num').innerHTML;
    document.getElementById('display-num').innerHTML = number + num;
}
function specialInsert(num){
    let number = document.getElementById('display-num').innerHTML;
    if(number.includes('+') == true){
        calculate();
    }
    else if(number.includes('-') == true){
        calculate();
    }
    else if(number.includes('*') == true){
        calculate();
    }
    else if(number.includes('/') == true){
        calculate();
    }
    else{
        document.getElementById('display-num').innerHTML = number + num;
    }
}
function clean() {
    document.getElementById('display-num').innerHTML = "";
}
function back() {
    let display_num = document.getElementById('display-num').innerHTML;
    document.getElementById('display-num').innerHTML = display_num.substring(0, display_num.length -1);
}
function calculate() {
    let display_num = document.getElementById('display-num').innerHTML;
    if(display_num) {
        document.getElementById('display-num').innerHTML = eval(display_num);
    }
    else {
        document.getElementById('display-num').innerHTML = ""
    }
}