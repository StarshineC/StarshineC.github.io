const PORTFOLIOLIST = document.querySelector("#portfolioList");
let portfolioFilters = {
    illustration: true,
    video: true,
    code: true
}


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
}

// Toggles format visibility on the list
function toggleFormat(format = "illustration") {
    if (format == 'code') {
        if (portfolioFilters.code) {
            portfolioFilters.code = false;
            const FORMATCODE = PORTFOLIOLIST.querySelectorAll(".formatCode");
            for (entry of FORMATCODE) entry.style.display = "none";
        } else {
            portfolioFilters.code = true;
            const FORMATCODE = PORTFOLIOLIST.querySelectorAll(".formatCode");
            for (entry of FORMATCODE) entry.style.display = "block";
        }
        return;
    }

    if (format == 'video') {
        if (portfolioFilters.video) {
            portfolioFilters.video = false;
            const FORMATVIDEO = PORTFOLIOLIST.querySelectorAll(".formatVideo");
            for (entry of FORMATVIDEO) entry.style.display = "none";
        }
        else {
            portfolioFilters.video = true;
            const FORMATVIDEO = PORTFOLIOLIST.querySelectorAll(".formatVideo");
            for (entry of FORMATVIDEO) entry.style.display = "block";
        }
        return;
    }

    if (portfolioFilters.illustration) {
        portfolioFilters.illustration = false;
        const FORMATILLUSTRATION = PORTFOLIOLIST.querySelectorAll(".formatIllustration");
        for (entry of FORMATILLUSTRATION) entry.style.display = "none";
    }
    else {
        portfolioFilters.illustration = true;
        const FORMATILLUSTRATION = PORTFOLIOLIST.querySelectorAll(".formatIllustration");
        for (entry of FORMATILLUSTRATION) entry.style.display = "block";
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