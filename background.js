// Sample array of items to be alerted
const myArray = [
	"You are awesome!",
	"You are a genius!",
	"You are a rockstar!",
	"You are a legend!",
	"You are a hero!",
	"Never leave till tomorrow that which you can do today.",
];

chrome.windows.onCreated.addListener((window) => {
	// Pick a random item from the array
	const randomItem = myArray[Math.floor(Math.random() * myArray.length)];
	// Show an alert with the selected item
	console.alert(randomItem);
	alert(`New window opened!\nRandom item: ${randomItem}`);
});
