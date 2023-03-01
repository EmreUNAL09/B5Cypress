const browsers = {
    CHROME: "chrome",
    FF: 'firefox',
    EDGE: "Edge",
    SAFARI: "safari"
}

let browser = browsers.CHROME

function execute() {
    switch (browser) {
        case browsers.CHROME:
            console.log("execute on chrome")
            break
        case browser.FF:
            console.log("execute on firefox")
            break
        case browser.EDGE:
            console.log("execute on Edge")
            break
        case browser.SAFARI:
            console.log("execute on safari")
            break
    }
}

console.log(execute())