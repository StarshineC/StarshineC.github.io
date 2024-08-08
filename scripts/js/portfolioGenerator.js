const PORTFOLIOLIST = document.querySelector("#portfolioList");

function formatImage(format) {
    if (format == 'Video') return 'thumb-video.svg';
    if (format == 'Programming Project') return 'thumb-code.svg';
    return 'thumb-illustration.svg';
}

function portfolioList() {
    for (entry of portfolioEntries) {
        console.log(entry);
        PORTFOLIOLIST.innerHTML += `
        <div class="portfolioEntry">
            <div>
                <h2>${entry.displayDate}</h2>
                <h1>${entry.title}</h1>
            </div>
            <img src="media/portfolio/thumbnails/-${entry.format}-${entry.fileName}-0.webp">
            <img src="media/icons/${formatImage(entry.format)}">
        </div>
        `
    }
}