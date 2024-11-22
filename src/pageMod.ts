import {MessageToExtension} from "./background";

console.log("Any Page Started")

const pressedKeys = new Set();

document.addEventListener("keydown", (event) => {
    pressedKeys.add(event.key.toLowerCase());
    if (pressedKeys.has("alt") && pressedKeys.has("t")) {
        console.log("Alt + t pressed!");

        const defaultUrl = "https://www.deepl.com/en/translator#en/fr/"

        const param = getHighlightedText()

        if (!param) return OpenPopUp(defaultUrl);

        OpenPopUp(`${defaultUrl}${encodeURIComponent(param)}`);

    }

    function getHighlightedText() {
        return window.getSelection()?.toString();
    }

});

document.addEventListener("keyup", (event) => {
    pressedKeys.delete(event.key.toLowerCase());
});


function OpenPopUp(url: string) {
    const message: MessageToExtension = {
        actionType: "WindowControl",
        payLoad: {
            openStyle: "popup",
            url: url
        }
    };
    chrome.runtime.sendMessage(message);
}
