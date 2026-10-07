const firstWords = [
    "Easy",
    "Awesome",
    "Smart",
    "Happy",
    "Super",
    "Bright",
    "Fast",
    "Creative",
    "Digital",
    "Future"
];

const secondWords = [
    "Company",
    "Corporation",
    "Solutions",
    "Systems",
    "Labs",
    "Tech",
    "Works",
    "Studio",
    "Group",
    "World"
];

const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log("The startup: " + startupName + " contains " + startupName.length + " characters");