function toggle() {
    var radio1 = document.getElementById('radio1');
    var radio2 = document.getElementById('radio2');
    var radio3 = document.getElementById('radio3');
    var radio4 = document.getElementById('radio4');
    var radio5 = document.getElementById('radio5');
    var radio6 = document.getElementById('radio6');

    var div1 = document.getElementById('product-container1');
    var div2 = document.getElementById('product-container2');
    var div3 = document.getElementById('product-container3');
    var div4 = document.getElementById('product-container4');
    var div5 = document.getElementById('product-container5');
    var div6 = document.getElementById('product-container6');
    

    if (radio1.checked) {
        div1.style.display = 'block';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';

    } else if (radio2.checked) {
        div1.style.display = 'none';
        div2.style.display = 'block';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';

    } else if (radio3.checked) {
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'block';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';

    } else if (radio4.checked) {
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'block';
        div5.style.display = 'none';
        div6.style.display = 'none';

    } else if (radio5.checked) {
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'block';
        div6.style.display = 'none';

    } else if (radio6.checked) {
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'block';

    }
}
