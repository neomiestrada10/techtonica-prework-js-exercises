// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let count = 1;
while (count <=5) {
	console.log(count);
	count++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let count2 = 1;
do {
	console.log(count2);
	count2++;
} while (count2 <= 5);
}

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let count3 = 1;
for (count3 = 1; count3 <= 5; count3++) {
	console.log(count3);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// 'while'
let count4 = 10;
while (count4 >= 1) {
	console.log(count4);
	count4--;
}

// 'do while'
let count4a = 10;
do {
	console.log(count4a);
	count4a--;
} while (count4a >= 1);

// 'for'
let count4b = 10;
for (count4b = 10; count >= 1; count4b--) {
	console.log(count4);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// 'while'
let count5a = 7;
while (count5a < = 27) {
	console.log(count5a);
	count5a==;
}

// 'do while'
let count5b = 7;
do {
	console.log(count5b);
	count5b++;
} while (count5b <= 27);

// 'for'
let count5c = 7;
for (count5c = 7; count5c <= 27; count5c++) {
	console.log(count5c);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// 'while'
let count6a = 1;
while (count6a <= 10) {
	console.log(count6a * 10);
	count6a++;
}

// 'do while'
let count6b = 1;
do {
	console.log(count6b * 10);
	count6b++;
} while (count6b <= 10);

// 'for'
let count6c = 1;
for (count6c = 1; count6c <= 10; count6c++) {
	console.log(count6c * 10);
} 

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
// This would run an infinite loop because while the condition is that counterFour is less than 2, counterFour decreases by 1 every time. 
// This means it will be less than 1 the first time,
and smaller by 1 the loops after that. So it will always be less than 2. The loop will continue to run infinitely while this condition is still true.

let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let integer = 8;
let count8 = 0;
while (count8 <= integer && count8 >= 0) {
	console.log(count8);
	count8++;
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let favoriteInteger = 50;
let count9 = 0;
for (count9 = 0; count9 <= 100; count9++) {
	if (count9 == favoriteInteger) {
		console.log(count9 + "my favorite number!";
	} else {
		console.log(count9 + "not my favorite number";
	}
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// I would use a 'while' loop as long as I want the code to run when the condition is true.
// If I only want it to run at least once before checking the condition, 'do while' would be best.
// If I know where to start counting, when to stop, and how to iterate each time, the syntax of a 'for' loop makes it easy for me to write out my code.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter <= -1; insideCounter--) {
    console.log("inside" + insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// I found this exercise more challenging than the previous two because it involved three different kinds of loops. 
// I reviewed loops by reading "JavaScript Loops" in CodeAcademy.

// Commit your file to GitHub.
