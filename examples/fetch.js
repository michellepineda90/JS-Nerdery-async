fetch('https://swapi.dev/api/people/1/')
    // the biggest flaw of fetch is to have to return json separately
    .then((res) => {
        console.log(res);
        return res.json()
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err);
    })

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/1/');
        const data = await res.json();
        console.log(res, data);
    } catch (error) {
        console.log(error);
    }
}

loadStarWarsPeople();
