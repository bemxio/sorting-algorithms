// selection sort algorithm
async function sortBoxes() {
    sortButton.disabled = true; // disable the sort button
    shuffleButton.disabled = true; // disable the shuffle button

    for (let iteration = 0; iteration < boxes.length; iteration++) {
        // initialize the new smallest box
        let minIndex = iteration;
        let minBox = boxes[minIndex];

        for (let index = iteration; index < boxes.length; index++) {
            // get the current box
            const box = boxes[index];

            // change the color of the boxes to red
            box.style.backgroundColor = "#ff3030";

            // check if the current box is smaller than the smallest box
            if (parseInt(box.textContent) < parseInt(minBox.textContent)) {
                minBox.style.backgroundColor = "#f1f1f1"; // reset the color of the smallest box

                // set the new smallest box
                minIndex = index;
                minBox = box;
            }

            // sleep for the delay
            await sleep(delay.value);

            // set the appropriate colors for the boxes
            box.style.backgroundColor = "#f1f1f1";
            minBox.style.backgroundColor = "#30ff30";
        }
        
        // get the first box
        const firstBox = boxes[iteration];

        // swap the boxes
        [minBox.textContent, firstBox.textContent] = [firstBox.textContent, minBox.textContent];

        // set the appropriate colors for the boxes
        minBox.style.backgroundColor = "#f1f1f1";
        firstBox.style.backgroundColor = "#ffff30";
    }

    // finish the sorting with an animation
    finishSorting();
}