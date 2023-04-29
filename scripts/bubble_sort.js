// bubble sort algorithm
async function sortBoxes() {
    resetBoxes(); // reset the color of the boxes

    sortButton.disabled = true; // disable the sort button
    shuffleButton.disabled = true; // disable the shuffle button

    for (let iteration = 0; iteration < boxes.length; iteration++) {
        for (let index = 0; index < boxes.length - 1 - iteration; index++) {
            // get the two boxes to compare
            const a = boxes[index];
            const b = boxes[index + 1];

            // check if the first box is greater than the second box
            if (parseInt(a.textContent) > parseInt(b.textContent)) {
                a.style.backgroundColor = "#30ff30"; // change the color of the boxes to green
                b.style.backgroundColor = "#30ff30";
                
                [a.textContent, b.textContent] = [b.textContent, a.textContent];
            } else {
                a.style.backgroundColor = "#ff3030"; // change the color of the boxes to red
                b.style.backgroundColor = "#ff3030";
            }
            
            // sleep for the delay
            await sleep(delay.value);

            // reset the color of the checked box
            a.style.backgroundColor = "#f1f1f1";
        }

        // get the last box
        const box = boxes[boxes.length - 1 - iteration];

        // reset the color of the last box
        box.style.backgroundColor = "#ffff30";
    }

    // finish the sorting with an animation
    finishSorting();
}