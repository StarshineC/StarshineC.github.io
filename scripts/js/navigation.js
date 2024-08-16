
// I have this because 3 buttons open portfolio entries
function changePage(link, changeValue=null) {
    sessionStorage.setItem('keyWord', changeValue);
    window.location.assign(link);
}

function autoOpen() {
    console.log("AutoOpen()");
    console.log(sessionStorage.getItem('keyWord'))
    if (sessionStorage.getItem('keyWord') != null) {
        console.log("Item Get!");
        entryViewOpen(sessionStorage.getItem('keyWord'))
    }
    sessionStorage.clear();
}