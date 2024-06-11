const url = 'https://streaming-availability.p.rapidapi.com/shows/%7Btype%7D/%7Bid%7D';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5a1de45b35msh28c5a2f63c8e81ap13c4d9jsna15abbf2c933',
		'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
	}
};

async function fetchDate(){
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchDate();