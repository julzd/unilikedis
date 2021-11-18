
let a = browser.storage.sync.set({getURL() : -1}); //WIP, the idea here is that we are appending a dislike for a given URL

function getURL() {
    if (tabs.tab.active) {
        return tabs.tab.url
    }
}