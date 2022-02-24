const qto = document.querySelector("#quote");
if(localStorage.getItem(USERNAME_KEY) !== null){
    qto.classList.remove(HIDDEN_CLASSNAME);
    const quotes = [
    {
        quote: "Where there is a will there is a way",
        author:"Angela Merkel",
    },
    {
        quote: "When they go low, we go high",
        author: "Michelle Obama",
    },
    {
        quote: "I was never less alone than when by myself",
        author: "Edward Gibbon",
    },
    {
        quote: "I never dreamed about success, I worked for it ",
        author: "Estee Lauder",
    },
    {
        quote: "Only I can change my life, no one can do it for me",
        author: "Carol Burnett",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D.Rockefeller",
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Arnold Schwarzenegger",
    },
    {
        quote: "There are better starters than me but I’m a strong finisher",
        author: "Usain Bolt",
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "Robert H. Schuller",
    },
    {
        quote: "Grind Hard, Shine Hard.",
        author: "Dwayne Johnson",
    },
    ]

    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");

    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = '"'+todaysQuote.quote+'"';
    author.innerText = "-"+todaysQuote.author+"-";
}else{
    qto.classList.add(HIDDEN_CLASSNAME);
}


