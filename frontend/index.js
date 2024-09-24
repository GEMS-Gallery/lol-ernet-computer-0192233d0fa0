document.getElementById('jokeButton').addEventListener('click', () => {
    const jokes = [
        "Why did Mr. ICP bring a ladder to the bar? Because he heard the drinks were on the house!",
        "Mr. ICP doesn't do push-ups. He pushes the world down!",
        "Why did Mr. ICP sit on his watch? Because he wanted to be on time!",
        "Why don't blockchain developers ever get lost? Because they always follow the chain!",
        "Why was the blockchain developer broke? Because he lost his keys!",
        "Why did the blockchain break up with the database? It couldn't handle the commitment!"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('joke').innerText = randomJoke;
});
