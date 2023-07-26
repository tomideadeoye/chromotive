// Sample array of items to be alerted
const myArray = [
	"You are awesome!",
	"You are a star!",
	"What are you working on?",
	"You are a genius!",
	"You are a rockstar!",
	"Keep up the good work!",
	"I love the effort you are putting in!",
	"Never leave till tomorrow that which you can do today.",
	"Remember, you get fromm it what you put into it.",
	"Imagine Board Attendance",
	"Create courses and youtube videos that sell your software. Be come an influence peddling your software. position yourself for speaking engagements. including the video analysing African startup business models and tech stacks. apply to non-equity grants with software and accept partnerships from multinations coming into Africa (development and commercial)... dub other courses and tutorials",
	"Apply to: https://trello.com/c/DhOwEyjz/2-apply-to",
	"Go have some water",
	"How is your work going?",
	"What amazing thing will you do next?",
	"I believe in you!",
	"Remember to leave time for yourself",
	"What is the biggest opportunity you can work on right now?",
	"What have you been excelling at lately?",
	"Create a coaching app based on psychologyI",
	"I promise you are making progress and you can do it!",
	"If this many people pay for this, How much will you make?",
	"Everybody hears things but only few people act on it. That's the only difference between you and the people you admire. They act on it. They do it. They don't just talk about it. They don't just think about it. They do it.",
	"Networks matter so much. That's a major reason (I think) humans survived. The ability to communicate and share information over vast networks. The more infomration people get to value something or someone, the more they value it or them. In this world, success very easily becomes a function of reach and ability to monetize.",
	"You can coach yourself into anything you want if you can write the correct program. Cause at the end of the day, human beings too are scripts",
	"Finish QorePay work completely FIRST",
	"Always stay in one tiny room",
	"Always lean into your strengths",
	"80% of winning is showing up",
	"We are the sum of our experiences and habits",
];

// Sample function to create a notification when chrome tab is opened

function createNotification() {
	chrome.notifications.create({
		type: "basic",
		iconUrl: "icon.png",
		title: "Hello there!",
		message: randomItem(),
	});
}

// Function to select a random item from the array
function getRandomContent() {
	const randomIndex = Math.floor(Math.random() * myArray.length);
	return myArray[randomIndex];
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
