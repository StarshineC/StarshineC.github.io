const miniPortfolioButtons = document.querySelectorAll(".miniPortfolioButton");

function searchEntry(fileName) {
    for (entry of portfolioEntries) if (entry.fileName == fileName) return entry;
    return null;
}

function formatImage(format) {
    if (format == 'Video') return 'thumb-video.svg';
    if (format == 'Programming Project') return 'thumb-code.svg';
    return 'thumb-illustration.svg';
}

function generateMiniPortfolioEntry(index, fileName) {
    console.log("Hello");
    let entry = searchEntry(fileName);
    console.log(entry);
    miniPortfolioButtons[index].insertAdjacentHTML("afterbegin", `
        <div class = "miniPortfolioThumb">
            <img src="media/portfolio/resizedImages/portfolio-${entry.format}-${entry.fileName}-0.webp" alt="${entry.fileName}" oncontextmenu="return false" class="miniDisplay">
            <img class="portfolioIcon" oncontextmenu="return false" src="media/icons/${formatImage(entry.format)}">
        </div>
        <div class="miniPortfolioDescription">
            <h3>${entry.displayDate}</h3>
            <h2>${entry.title}</h2>
        </div>
        `)
}

generateMiniPortfolioEntry(0, 'clockmaker');
generateMiniPortfolioEntry(1, 'hope');
generateMiniPortfolioEntry(2, 'quickLinksSem1');