console.log("Started deepMod.js")

const observer = new MutationObserver(() => {

    const clipButton = document.querySelector('[aria-label="Copy to clipboard"]');

    if (clipButton) {
        clipButton.addEventListener('click', () => {
            setTimeout(() => {
                window.close()
            }, 400)
        })
    }

    // Note : To be fixed later
    // const header = document.querySelector("#base-page-header");
    // const extraFooterElements = document.querySelectorAll('.mobile\\:hidden');


});


observer.observe(document.body, {childList: true, subtree: true, attributes: true, attributeOldValue: true})
