
const loadJoke = async () => {
    try {
        const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random',{
            header: {
                Accept: "application/json"
            }
        });

        const jokeData = await chuckNorrisFetch.json();
        document.getElementById('loadingJoke').innerHTML = jokeData.value;

    } catch (error) {
        console.log(error); 
    }
}

document.getElementById('load-btn').addEventListener("click", loadJoke)