import createTypeEnum = chrome.windows.createTypeEnum;

export type ActionType = "WindowControl"
export type OpenStyle = createTypeEnum
export type WindowControlOpts = {
    openStyle: OpenStyle,
    url: string,
}

export type MessageToExtension = {
    actionType: ActionType
    payLoad: WindowControlOpts
}

console.log("Starting DeepL Script")


chrome.runtime.onMessage.addListener((message: MessageToExtension) => {
    if (message.actionType === "WindowControl") {
        chrome.windows.create({
            url: message.payLoad.url,
            type: message.payLoad.openStyle,
            width: message.payLoad.openStyle == "popup" ? 1145 : 1920,
            height: 1080
        });
    }
});

