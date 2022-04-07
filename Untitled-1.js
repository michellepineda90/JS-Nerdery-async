fetch('https://swapi.dev/api/people/1/')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })