/*
TODO:
- Add some nice styling
- Validate user input
- Default 'element unavailable' msg if any element is missing from res
- Actual error handling in possible errors from async func
*/

const form = document.getElementById('searchForm');
const container = document.getElementById('mainContainer');

const clearInput = () => {
    form.elements.query.value = '';
}

const clearContainer = () => {
    container.innerHTML = '';
}

const getResults = async () => {
    try {
        const searchTerm = form.elements.query.value;
        const config = { params : { q : searchTerm } };
        const res = await axios.get('https://api.tvmaze.com/search/shows', config);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

const renderResults = (results) => {
    if (results) {
        for (const item of results) {
            const showImg = document.createElement('img');
            const showTitle = document.createElement('h2');
            showTitle.innerText = item.show.name;
            const averageRating = document.createElement('p');
            averageRating.innerText = `Average rating: ${item.show.rating.average}`
            showImg.src = item.show.image.medium;
            container.append(showImg);
            container.append(showTitle);
            container.append(averageRating);
        }
    } else { 
        const errorMesage = document.createElement('h2');
        errorMesage.innerText = 'Sorry, no results to display ):'
        container.append(errorMesage);
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearContainer();
    const results = await getResults();
    renderResults(results);
    clearInput();
});
