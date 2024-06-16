function showDiv(divId) {
    console.log("gregergerger")

    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    var div3 = document.getElementById('div3');
    var div4 = document.getElementById('div4');

    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var button4 = document.getElementById('button4');

    var spanButton1 = document.getElementById('button1-span');
    var spanButton2 = document.getElementById('button2-span');
    var spanButton3 = document.getElementById('button3-span');
    var spanButton4 = document.getElementById('button4-span');

    if (divId === 'div1') {
        div1.style.display = 'block';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';

        button1.classList.add("bg-dark");
        button2.classList.remove("bg-dark");
        button3.classList.remove("bg-dark");
        button4.classList.remove("bg-dark");

        spanButton1.style.color = 'white';
        spanButton2.style.color = 'black';
        spanButton3.style.color = 'black';
        spanButton4.style.color = 'black';

    } else if (divId === 'div2') {
        div1.style.display = 'none';
        div2.style.display = 'block';
        div3.style.display = 'none';
        div4.style.display = 'none';

        button1.classList.remove("bg-dark");
        button2.classList.add("bg-dark");
        button3.classList.remove("bg-dark");
        button4.classList.remove("bg-dark");

        spanButton1.style.color = 'black';
        spanButton2.style.color = 'white';
        spanButton3.style.color = 'black';
        spanButton4.style.color = 'black';

    } else if (divId === 'div3') {
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'block';
        div4.style.display = 'none';

        button1.classList.remove("bg-dark");
        button2.classList.remove("bg-dark");
        button3.classList.add("bg-dark");
        button4.classList.remove("bg-dark");

        spanButton1.style.color = 'black';
        spanButton2.style.color = 'black';
        spanButton3.style.color = 'white';
        spanButton4.style.color = 'black';
        
    } else if (divId === 'div4') {
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'block';

        button1.classList.remove("bg-dark");
        button2.classList.remove("bg-dark");
        button3.classList.remove("bg-dark");
        button4.classList.add("bg-dark");

        spanButton1.style.color = 'black';
        spanButton2.style.color = 'black';
        spanButton3.style.color = 'black';
        spanButton4.style.color = 'white';
    }
}