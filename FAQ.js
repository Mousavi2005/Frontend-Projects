const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const ac1 = document.getElementById('ac1');
const ac2 = document.getElementById('ac2');
const ac3 = document.getElementById('ac3');

btn1.addEventListener('click',function(){
    if(ac1.style.display === '') {
        ac1.style.display = 'block';
        btn1.innerText = '-'
    } else if (ac1.style.display === 'block'){
        ac1.style.display = '';
        btn1.innerText = '+'
    }


});

btn2.addEventListener('click',function(){
    if(ac2.style.display === '') {
        ac2.style.display = 'block';
        btn2.innerText = '-'
    } else if (ac2.style.display === 'block'){
        ac2.style.display = '';
        btn2.innerText = '+'
    }
});

btn3.addEventListener('click',function(){
    if(ac3.style.display === '') {
        ac3.style.display = 'block';
        btn3.innerText = '-'
    } else if (ac3.style.display === 'block'){
        ac3.style.display = '';
        btn3.innerText = '+'
    }
});


