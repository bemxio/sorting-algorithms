// sleep function for delays
function sleep(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
}

// basic Fisher–Yates shuffle algorithm
function shuffleBoxes() {
    resetBoxes(); // reset the color of the boxes

    for (let index = boxes.length; index > 0; index--) {
        // get a random index from the remaining boxes
        let pick = Math.floor(Math.random() * index);
        
        // get the box elements
        const a = boxes[pick];
        const b = boxes[index - 1];

        // swap the boxes
        [a.textContent, b.textContent] = [b.textContent, a.textContent];
    }
}

// function for resetting the color of the boxes
function resetBoxes() {
    for (const box of boxes) {
        box.style.backgroundColor = "#f1f1f1";
    }
}

// finish sort function by changing the color of the boxes to green
async function finishSorting() {
    for (let index = 0; index < boxes.length; index++) {
        // get the box element
        const box = boxes[index];

        // change the color of the boxes to green
        box.style.backgroundColor = "#30ff30";

        // sleep for the delay
        await sleep(delay.value - (delay.value / 2));
    }

    sortButton.disabled = false; // enable the sort button
    shuffleButton.disabled = false; // enable the shuffle button
}

// get the boxes
const container = document.getElementById("box-container");
const delay = document.getElementById("input-delay");

const sortButton = document.getElementById("sort-button");
const shuffleButton = document.getElementById("shuffle-button");

// get all of the boxes and convert it to an array
const boxes = Array.from(container.children);

// initialize the box numbers
for (const [index, box] of boxes.entries()) {
    box.textContent = index + 1;
}

// shuffle the boxes
shuffleBoxes(boxes);