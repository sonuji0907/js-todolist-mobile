const quotes = [
    {
        quote: "우리의 힘보다 인내심으로써 더 많은걸 이룰 수 있다.",
        author: "에드먼드 버크",
    },
    {
        quote: "가장 좋은 강철은 가장 뜨거운 불을 통과해야만 한다.",
        author: "리처드 닉슨",
    },
    {
        quote: "자기절제를 통해 거의 모든 것이 가능하다.",
        author: "시어도어 루즈벨트",
    },
    {
        quote: "이 순간의 고통으로 남은 삶을 챔피언으로 살 수 있잖아.",
        author: "무하마드 알리",
    },
    {
        quote: "친구여 물이 되어라",
        author: "브루스 리",
    },
    {
        quote: "후회하기 싫으면 그렇게 살지 말고, 그렇게 살거면 후회하지마라.",
        author: "무라카미 하루키",
    },
    {
        quote: "같은자리에 있기 위해서는 전속력으로 달려야한다.",
        author: "조던 피터슨",
    },
    {
        quote: "그들이 말한대로 행하지 말고 그들이 행한대로 행하라.",
        author: "엠제이 드마코",
    },
    {
        quote: "행복을 돈으로는 살 수 없지만 돈이없다면 불행하다.",
        author: "엠제이 드마코",
    },
    {
        quote: "너의 인생을 금요일밤에 시작해 일요일 밤에 끝나게 하지마라.",
        author: "엠제이 드마코",
    }
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;