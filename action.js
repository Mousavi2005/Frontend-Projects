const btn = document.querySelector('.btn');
const btnx = document.querySelector('#x')
const text = document.querySelector('#text-container');

console.log(text)

btn.addEventListener('click',function() {
    if(text.classList.contains('hidden')) {
        text.classList.remove('hidden')
        text.classList.add('notHidden')
        console.log(text)
    }
});

btnx.addEventListener('click',function(){
    text.classList.remove('notHidden');
    text.classList.add('hidden');
})