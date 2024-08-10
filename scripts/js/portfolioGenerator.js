
const PORTFOLIOLIST = document.querySelector("#portfolioList");
const filterBoxes = {
    illustration: document.querySelector("#filterIllustration"),
    video:        document.querySelector("#filterVideo"),
    code:         document.querySelector("#filterCode")
}

const sortSelect = document.getElementsByName("sortSelect")[0];





// Selects a Format Image to use in the corners of Thumbnails
function formatImage(format) {
    if (format == 'Video') return 'thumb-video.svg';
    if (format == 'Programming Project') return 'thumb-code.svg';
    return 'thumb-illustration.svg';
}

function formatClass(format) {
    if (format == 'Video') return 'formatVideo';
    if (format == 'Programming Project') return 'formatCode';
    return 'formatIllustration';
}





// Filters formats
function filter(selection, set = true) {
    let entrys = selection;
    if (set == true) for (entry of entrys) entry.style.display = "block";
    else for (entry of entrys) entry.style.display = "none";
}

// Toggles format visibility on the list
function toggleFormat(format = "illustration") {
    // Programming Project
    if (format == 'code') filter(PORTFOLIOLIST.querySelectorAll(".formatCode"), filterBoxes.code.checked);
    // Video
    else if (format == 'video') filter(PORTFOLIOLIST.querySelectorAll(".formatVideo"), filterBoxes.video.checked);
    // Illustration (Default)
    else filter(PORTFOLIOLIST.querySelectorAll(".formatIllustration"), filterBoxes.illustration.checked);
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





function portfolioListCreate() {
    if (sortSelect.value == "date") portfolioList(sortByDate);
    else portfolioList(sortByTitle);
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
        PORTFOLIOLIST.innerHTML += `
        <button class="portfolioEntry ${formatClass(entry.format)}">
            <div class="thumbText">
                <h2>${entry.displayDate}</h2>
                <h1>${entry.title}</h1>
            </div>
            <img class="thumbnail" align="right" src="media/portfolio/thumbnails/thumb-${entry.format}-${entry.fileName}-0.webp" oncontextmenu="return false">
            <img class="thumbIcons" src="media/icons/${formatImage(entry.format)}" oncontextmenu="return false">
        </button>
        `
    }

    filter(PORTFOLIOLIST.querySelectorAll(".formatCode"), filterBoxes.code.checked);
    filter(PORTFOLIOLIST.querySelectorAll(".formatVideo"), filterBoxes.video.checked);
    filter(PORTFOLIOLIST.querySelectorAll(".formatIllustration"), filterBoxes.illustration.checked);
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