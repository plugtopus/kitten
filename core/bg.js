var loaded = false;
chrome['browserAction']['onClicked'].addListener(function(tab) {
    if (!loaded) {
        loaded = true;
        chrome['tabs'].executeScript(null, {
            file: "core/libkitten.min.js"
        }, function() {
            chrome['tabs'].executeScript({
                code: 'controller.buyKitten();'
            });
        });
    } else {
        chrome['tabs'].executeScript({
            code: 'controller.buyKitten();'
        });
    }
});