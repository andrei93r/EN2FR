import {MessageToExtension} from "./background";

console.log("Any Page Started")

const pressedKeys = new Set();

document.addEventListener("keydown", (event) => {

    const key = event.key.toLowerCase()

    console.log("Key", key)

    console.log(pressedKeys);

    switch (key) {
        case "alt":
            pressedKeys.add(key)
            ;
            break;

        case "t":
            if (pressedKeys.has("alt")) {
                console.log("Alt + t pressed!");

                const defaultUrl = "https://www.deepl.com/en/translator#en/fr/"

                const param = getHighlightedText()

                if (!param) return OpenPopUp(defaultUrl);

                OpenPopUp(`${defaultUrl}${encodeURIComponent(param)}`);

                function getHighlightedText() {
                    return window.getSelection()?.toString();
                }
            }
            pressedKeys.clear()
            break;

        case "q" :
            window.close()
            break;

        default:
            pressedKeys.clear()


    }
})


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
