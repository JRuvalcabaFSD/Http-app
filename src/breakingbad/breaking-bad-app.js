const fetchQuote = async () => {
	const resp = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
	const data = await resp.json();
	return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = async (element) => {
	const quateLabel = document.createElement('blockquote');
	const autolabel = document.createElement('h3');
	const nextQuoteButton = document.createElement('button');
	nextQuoteButton.innerHTML = 'Next Quote';

	const renderQuote = (data) => {
		quateLabel.innerHTML = data.quote;
		autolabel.innerHTML = data.author;
		element.replaceChildren(quateLabel, autolabel, nextQuoteButton);
	};

	const getNewData = () => {
		element.innerHTML = 'Loading...';
		fetchQuote().then(renderQuote);
	};

	nextQuoteButton.addEventListener('click', getNewData);

	getNewData();
};
