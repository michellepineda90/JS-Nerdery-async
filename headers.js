const button = document.querySelector('button');
const jokesList = document.getElementById('jokes');

const addNewJoke = async () => {
    try {
        const newJoke = await getDadJoke();
        const newLi = document.createElement('li');
        newLi.append(newJoke);
        jokesList.append(newLi);
    } catch (error) {
        console.log(error);
    }
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept : 'application/json' } }; 
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (error) {
        return 'No jokes available, sorry ):';   
    }
}

button.addEventListener('click', addNewJoke);
