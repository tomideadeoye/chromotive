// Sample array of items to be alerted
const myArray = [
	"You are awesome!",
	"You are a genius!",
	"You are a rockstar!",
	"You are a legend!",
	"You are a hero!",
	"Never leave till tomorrow that which you can do today.",
];

// Sample function to return a random item from the array when chrome tab is opened

function randomItem() {
	return myArray[Math.floor(Math.random() * myArray.length)];
}

// Sample function to create a notification when chrome tab is opened

function createNotification() {
	chrome.notifications.create({
		type: "basic",
		iconUrl: "icon.png",
		title: "Hello there!",
		message: randomItem(),
	});
}

// My array of random content
const randomContentArray = [
	"Hello, world!",
	"Welcome to my Chrome extension!",
	"Check out my latest project on GitHub!",
	"Have a fantastic day!",
	"Remember to stay hydrated!",
	"Learn something new today!",
];

// Function to select a random item from the array
function getRandomContent() {
	const randomIndex = Math.floor(Math.random() * randomContentArray.length);
	return randomContentArray[randomIndex];
}

// Function to display the random content in an alert
function showAlertWithRandomContent() {
	const randomContent = getRandomContent();
	alert(randomContent);
}

// Event listener for when a new Chrome tab is opened
chrome.tabs.onCreated.addListener(function (tab) {
	// Display the alert with random content
	showAlertWithRandomContent();
});
