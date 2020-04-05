chrome.storage.sync.get(["gradeInfo", "studentId", "chName", "enName", "chMajor", "enMajor", "lastSem"], function(data) {
    // console.log(data)
    (async() => {
        let lastSemN = data["lastSem"].slice(-1)
        let lastSem = data["lastSem"].slice(0, 3)

        data.gradeInfo.semDataList.forEach(e => {
            if (e.semN == -1) {
                e.semN = lastSemN
                e.semYear = parseInt(lastSem)
            }
        })

        let template = await fetch(chrome.extension.getURL("popup/transcript-en.njk"))
            .then((response) => {
                return (response.text())
            })
        document.body.innerHTML = nunjucks.renderString(template, data)

    })()

});