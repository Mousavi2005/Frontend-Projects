const quotes = [['Remember that not getting what you want is sometimes a wonderful stroke of luke','DALAI LAMA'],
['Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.','Albert Einstein']];
let quoteNumber = 0;

const btn = document.querySelector('.btn');

btn.addEventListener('click',function(e){
    const quote = document.querySelector('#quote');
    const author = document.querySelector('#author');

    console.log(quote);
    quote.innerText = quotes[quoteNumber][0];
    author.innerText = quotes[quoteNumber][1];
    if (quoteNumber == quotes.length -1){
        quoteNumber = 0;
    }else {
        quoteNumber++;
    }
})
