const PORTFOLIOLIST = document.querySelector("#portfolioList");

function formatImage(format) {
    if (format == 'Video') return 'thumb-video.svg';
    if (format == 'Programming Project') return 'thumb-code.svg';
    return 'thumb-illustration.svg';
}

function sortByDate() {
    console.log('hello');
}

function sortByTitle() {
    console.log('hello');
}





function portfolioList() {
    for (entry of portfolioEntries) {
        console.log(entry);
        PORTFOLIOLIST.innerHTML += `
        <button class="portfolioEntry">
            <div>
                <h2>${entry.displayDate}</h2>
                <h1>${entry.title}</h1>
            </div>
            <img class="thumbnail" align="right" src="media/portfolio/thumbnails/-${entry.format}-${entry.fileName}-0.webp">
            <img class="thumbIcons" src="media/icons/${formatImage(entry.format)}">
        </button>
        `
    }
}