let topSongs = [
    "First Time Ever I Saw Your Face",
    "God Only Knows",
    "A Day In The Life",
    "Life On Mars",
];

// Add song to the end.
topSongs.push("Fortunate Son");
console.log(`After push: ${topSongs}`);

// Remove the last item.
let song = topSongs.pop();
console.log(`Value of topSongs after pop: ${topSongs}`);
console.log(`Value of song: ${song}`);
