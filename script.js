async function fetchData(){
    const url = 'https://streaming-availability.p.rapidapi.com/countries';
        const options = {
        	method: 'GET',
        	headers: {
        		'X-RapidAPI-Key': '76426448c7msh45ab2ef1220a247p13b8f2jsn198de31c6752',
        		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        	}
        };

        try {
	        const response = await fetch(url, options);
	        const result = await response.text();
            console.log("result")
            console.log(result)
            
            
        } catch (error) {
	        console.error(error);
        }

    }


fetchData();