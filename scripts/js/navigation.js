
// I have this because 3 buttons open portfolio entries
function changePage(link, changeValue='') {
    window.location.assign(link);
    if (changeValue != '') sessionStorage.setItem('keyWord', changeValue);
}

function autoOpen() {
    if (sessionStorage.getItem != null) entryView(sessionStorage.getItem('keyWord'))
    sessionStorage.clear();
}