axios.get('https://swapi.dev/api/people/1/')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

const getStarWarsPerson = async (id) => {
    try {
        res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);    
    } catch (error) {
        console.log(error);
    }
}

getStarWarsPerson(5);