const keys = [
    "studentId",
    "chName",
    "enName",
    "chMajor",
    "enMajor",
    "showMinor",
    "chMinor",
    "enMinor",
    "showLastSem",
    "lastSem"
]

chrome.storage.sync.get(["gradeInfo", "language", ...keys], function(data) {
    // console.log(data)
    (async() => {
        if (data.showLastSem) {
            let lastSemN = data.lastSem.slice(-1)
            let lastSem = data.lastSem.slice(0, 3)

            data.gradeInfo.semDataList.forEach(e => {
                if (e.semN == -1) {
                    e.semN = lastSemN
                    e.semYear = parseInt(lastSem)
                }
            })
        } else {
            data.gradeInfo.semDataList.forEach((e, index, object) => {
                if (e.semN == -1) {
                    object.splice(index, 1)
                }
            })
        }


        if (data.language == "en") {
            let template = await fetch(chrome.extension.getURL("transcript/body-en.njk"))
                .then((response) => {
                    return (response.text())
                })
            document.body.innerHTML = nunjucks.renderString(template, data)
        } else {
            document.body.innerHTML = "meow"
        }


    })()

});