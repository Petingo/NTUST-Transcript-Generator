function addListener(id) {
    let cb = (obj) => {
        console.log(obj.target)
        let id = obj.target.id
        let data = {}
        switch (obj.target.type) {
            case "checkbox":
                data[id] = obj.target.checked
                break

            case "text":
                data[id] = obj.target.value
                break

            case "radio":
                if (id == "radioEn") {
                    data["language"] = "en"
                } else {
                    data["language"] = "ch"
                }
                break
        }

        chrome.storage.sync.set(data, function() {
            console.log("update " + JSON.stringify(data));
        })
    }

    if (window.addEventListener) {
        document.getElementById(id).addEventListener('change', cb, false);
    } else if (window.attachEvent) {
        document.getElementById(id).attachEvent("onchange", cb);
    }
}

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
    "lastSem",
    "radioEn",
    "radioCh"
]

window.onload = function() {
    keys.forEach((key) => {
        addListener(key)
    })
}

chrome.storage.sync.get(keys, function(data) {
    console.log(data)

    let gradeInfo = data.gradeInfo

    keys.forEach((key) => {
        if (data.hasOwnProperty(key)) {
            let elem = document.getElementById(key)
            if (elem.type == "checkbox") {
                elem.checked = data[key]
            } else if (elem.type == "text") {
                elem.value = data[key]
            }
        }
    })
});

chrome.storage.sync.set({
    language: "en"
})

document.getElementById("btnSubmit").onclick = () => {
    window.open('/transcript/transcript.html')
}