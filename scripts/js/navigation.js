
// I have this because 3 buttons open portfolio entries
function changePage(link, changeValue=null) {
    sessionStorage.setItem('keyWord', changeValue);
    window.location.assign(link);
}

function autoOpen() {
    console.log("AutoOpen()");
    let keyWord = sessionStorage.getItem('keyWord')
    console.log(keyWord);
    sortIndex = portfolioEntries.sort((SORTSELECT.value == "date") ? sortByDate : sortByTitle).indexOf(portfolioEntries.find(entry => entry.fileName == keyWord));
    if (sortIndex >= 0) {
        entryViewOpen(keyWord, sortIndex)
    }
    sessionStorage.clear();
}