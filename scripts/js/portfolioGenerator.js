
const PORTFOLIOLIST = document.querySelector("#portfolioList");
const filterBoxes = {
    illustration: document.querySelector("#filterIllustration"),
    video:        document.querySelector("#filterVideo"),
    code:         document.querySelector("#filterCode")
}

const SORTSELECT = document.getElementsByName("sortSelect")[0];

const VIEWERDESKTOP = document.querySelector("#viewerDesktop");



// Search (Depracated: I found out array.find() exists)
/*function searchEntry(fileName) {
    for (entry of portfolioEntries) if (fileName == entry.fileName) return entry;
    return null;
}*/

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
    if (SORTSELECT.value == "date") portfolioList(sortByDate);
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
        PORTFOLIOLIST.insertAdjacentHTML("beforeend", `
        <button class="portfolioEntry ${formatClass(entry.format)}" onclick="entryViewOpen('${entry.fileName}');">
            <div class="thumbText">
                <h2>${entry.displayDate}</h2>
                <h1>${entry.title}</h1>
            </div>
            <img class="thumbnail" align="right" src="media/portfolio/thumbnails/thumb-${entry.format}-${entry.fileName}-0.webp" alt="${entry.fileName}" oncontextmenu="return false">
            <img class="thumbIcons" src="media/icons/${formatImage(entry.format)}" oncontextmenu="return false">
        </button>
        `);
    }

    filter(PORTFOLIOLIST.querySelectorAll(".formatCode"), filterBoxes.code.checked);
    filter(PORTFOLIOLIST.querySelectorAll(".formatVideo"), filterBoxes.video.checked);
    filter(PORTFOLIOLIST.querySelectorAll(".formatIllustration"), filterBoxes.illustration.checked);
}





// Opens the viewers for the selected file
function entryViewOpen(fileName) {
    entryViewClose();
    let entry = portfolioEntries.find(entry => entry.fileName == fileName);
    VIEWERDESKTOP.insertAdjacentHTML("beforeend", `
        <h2>${entry.displayDate}</h2>
        <h1>${entry.title}</h1>
        <p>${entry.description}</p>
        <img src="media/portfolio/resizedImages/portfolio-${entry.format}-${entry.fileName}-0.webp" onclick="imageFullOpen('media/portfolio/resizedImages/portfolio-${entry.format}-${entry.fileName}-0.webp');">
        <div>
    `);
    console.log(entry.fileCount);    
    for(let i = 1; i < entry.fileCount; i++) {
        console.log(`thumb-${entry.format}-${entry.fileName}-${i}.webp`);
        VIEWERDESKTOP.insertAdjacentHTML("beforeend", `
            <img src="media/portfolio/thumbnails/thumb-${entry.format}-${entry.fileName}-${i}.webp" onclick="imageFullOpen('media/portfolio/resizedImages/portfolio-${entry.format}-${entry.fileName}-${i}.webp');">
        `);
        console.log("hi!");
    }
    VIEWERDESKTOP.insertAdjacentHTML("beforeend", '</div>');
}

// Closes the currently open viewer for the selected file
function entryViewClose() {
    VIEWERDESKTOP.innerHTML = '';
}



function imageFullOpen(image) {
    console.log("Hello!");
    document.querySelector("#fullView").style.top = "0";
    document.querySelector("#fullView div").style.transform = "translate(-50%, -50%) scale(100%, 100%)";
    document.querySelector("#fullView img").src = image;
    document.querySelector("#fullView img").style.opacity = "100%";
}

function imageFullClose() {
    document.querySelector("#fullView div").style.transform = "translate(-50%, -50%) scale(0, 0)";
    document.querySelector("#fullView img").style.opacity = "0";
    setTimeout(function() {document.querySelector("#fullView").style.top = "-100vh";}, 250);
}



// Event listeners for Sort and Filter
SORTSELECT.addEventListener("change", function() {portfolioListCreate()});
filterBoxes.illustration.addEventListener("change", function() {toggleFormat('illustration')});
filterBoxes.video.addEventListener("change", function() {toggleFormat('video')});
filterBoxes.code.addEventListener("change", function() {toggleFormat('code')});