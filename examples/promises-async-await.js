const delayedColorChange = (color, delay) => {
    // promisified function that we are never really going to reject
    // and we don't really need a resolve value either, the promise is simply
    // a mechanism for delaying code execution 
    return new Promise ((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow () {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return 'All done!';
}

// Mixing async syntax with promise syntax is also possible, altho this is not
// advisable when a promise could be rejected since catch statements within async
// funcs only work inside a try statement

rainbow().then((data) => console.log(data));

async function printRainbow() {
    await rainbow();
    return console.log(data);
}

// Examples for code that might actually be rejected

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.5) {
                resolve('Promise resolved.');
            } 
            reject('Promise rejected.');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => console.log('yay, we have', data))
    .catch((err) => console.log('oh noes', err))

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (error) {
        console.log(error);
    }
}
