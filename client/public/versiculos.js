
//Object Array to hold quotes, sources, citaitons and years
var quotes = [
	{
	quote: "Tudo posso naquele que me fortalece. ",
	source: "Filipenses 4:13"
	},
	{
    quote: "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar  ",
    source: "Josué 1:9"
	},
	{
    quote: "Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo  ",
    source: "João 16:33"
	},
	{
    quote: "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. ",
    source: "Jeremias 29:11"
    },
    {
    quote: "Combati o bom combate, terminei a corrida, guardei a fé. Agora me está reservada a coroa da justiça, que o Senhor, justo Juiz, me dará naquele dia; e não somente a mim, mas também a todos os que amam a sua vinda. ",
    source: "2 Timóteo 4:7-8"
    },
    {
    quote: "Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus. ",
    source: "1 Tessalonicenses 5:18"
    },
	{
	quote: "Respondeu Jesus: 'Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim. ",
	source: "João 14:6"
	}
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	


//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;
}

//Quote automatically refreshes every 15 seconds
window.setInterval(function(){
printQuote ();
}, 1000);




//  document.getElementById("loadQuote").addEventListener("click", printQuote, false);