function addListener(id) {
    let cb = (obj) => {
        let id = obj.target.id
        let data = {}
        data[id] = obj.target.value
        chrome.storage.sync.set(data, function() {
            console.log("update " + id);
        })
    }

    if (window.addEventListener) {
        document.querySelector("#" + id).addEventListener('change', cb, false);
    } else if (window.attachEvent) {
        document.querySelector("#" + id).attachEvent("onchange", cb);
    }
}

const keys = [
    "studentId",
    "chName",
    "enName",
    "chMajor",
    "enMajor",
    "lastSem"
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
        if (data.hasOwnProperty(key))
            document.getElementById(key).value = data[key]
    })
});

document.getElementById("btnSubmit").onclick = () => {
    window.open('./transcript-en.html')
}