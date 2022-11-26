const BASE_URL = 'https://api.api-ninjas.com/v1/babynames?gender=';

async function getName ({gender}) {
    const response = await fetch(`${BASE_URL}{gender}`, {
        header: {
            'X-Api-Key': process.env.REACT_APP_API_KEY,
            'Content-Type': 'application/json'
        }
    })
    console.log(response)

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        console.log('salah');
    }
    return responseJson
}
