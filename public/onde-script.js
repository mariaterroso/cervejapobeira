function toggle() {
    var radio1 = document.getElementById('radio1');
    var radio2 = document.getElementById('radio2');
    var radio3 = document.getElementById('radio3');
    var div1 = document.getElementById('image-container11');
    var div2 = document.getElementById('image-container22');
    var div3 = document.getElementById('image-container33');
    

    if (radio1.checked) {
        div1.style.display = 'block';
        div2.style.display = 'none';
        div3.style.display = 'none';

    } else if (radio2.checked) {
        div1.style.display = 'none';
        div2.style.display = 'block';
        div3.style.display = 'none';

    } else if (radio3.checked) {
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'block';

    }
}
