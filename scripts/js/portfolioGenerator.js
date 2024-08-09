const PORTFOLIOLIST = document.querySelector("#portfolioList");


// Selects a Format Image to use in the corners of Thumbnails
function formatImage(format) {
    if (format == 'Video') return 'thumb-video.svg';
    if (format == 'Programming Project') return 'thumb-code.svg';
    return 'thumb-illustration.svg';
}


// Sorters

function sortByDate(a, b) {
    // First Measure: Sort by Date
    if (a.sortedDate > b.sortedDate) return -1;
    if (a.sortedDate < b.sortedDate) return 1;
    // Second Measure: Sort by Title
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    // Third Measure: Sort by File Name
    if (a.fileName < b.fileName) return -1;
    if (a.fileName > b.fileName) return 1;
    // Same
    return 0
}

function sortByTitle(a, b) {
    // First Measure: Sort by Title
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    // Second Measure: Sort by Date
    if (a.sortedDate > b.sortedDate) return -1;
    if (a.sortedDate < b.sortedDate) return 1;
    // Third Measure: Sort by File Name
    if (a.fileName < b.fileName) return -1;
    if (a.fileName > b.fileName) return 1;
    // Same
    return 0
}




// Reloads the portfolioList viewer
function portfolioList(sortFunction) {
    // Clears Opened List
    PORTFOLIOLIST.innerHTML = "";

    // Sort
    let sortedEntries = portfolioEntries;
    sortedEntries.sort(sortFunction);

    // Creats List View
    for (entry of sortedEntries) {
        console.log(entry);
        PORTFOLIOLIST.innerHTML += `
        <button class="portfolioEntry">
            <div class="thumbText">
                <h2>${entry.displayDate}</h2>
                <h1>${entry.title}</h1>
            </div>
            <img class="thumbnail" align="right" src="media/portfolio/thumbnails/thumb-${entry.format}-${entry.fileName}-0.webp">
            <img class="thumbIcons" src="media/icons/${formatImage(entry.format)}">
        </button>
        `
    }
}

// Opens the viewers for the selected file
function entryViewOpen(fileName) {
    entryViewClose();
    console.log('empty');
}

// Closes the currently open viewer for the selected file
function entryViewClose() {
    console.log("empty");
}