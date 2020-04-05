const gpaTable = {
    "A+": 4.3,
    "A": 4.0,
    "A-": 3.7,
    "B+": 3.3,
    "B": 3.0,
    "B-": 2.7,
    "C+": 2.3,
    "C": 2.0,
    "C-": 1.7,
    "D": 1.0,
    "E": 0.0,
    "X": 0.0
}

function gpaOf(grade) {
    return gpaTable[grade] === undefined ? 0 : gpaTable[grade]
}

function hasGrade(grade) {
    return gpaTable[grade] === undefined ? false : true
}

class Course {
    constructor(code, ch, en, credits, grade) {
        this.code = code
        this.ch = ch
        this.en = en
        this.credits = credits
        this.grade = grade
    }
}

class SemData {
    constructor(semId) {
        if (semId == "last") {
            this.semN = -1
            this.semYear = -1
        } else {
            this.semN = String(semId).slice(-1)
            this.semYear = parseInt(semId.toString().slice(0, 3))
        }
        this.record = {
            "semCredits": 0,
            "semGPA": 0,
            "semCourse": []
        }
    }
}

let main = (async() => {
    let codeEn = await fetch(chrome.extension.getURL(`code-en.json`))
        .then((response) => {
            return (response.json())
        })
    let studentId = document.querySelector("#studentno").innerText
    let chName = document.querySelector("#studentname").innerText
    let restSem = [...document.querySelectorAll('#Datagrid1 tr')].slice(1).map(e => [...e.cells].slice(1, 6).map(c => c.innerText))
    let lastSem = [...document.querySelectorAll('#Datagrid4 tr')].slice(1).map(e => ["last", ...[...e.cells].slice(1, 5).map(c => c.innerText)])
    let courseList = [...lastSem, ...restSem]

    let semDataMap = {}
    let overallGPA = 0,
        totalCredits = 0

    for (let c of courseList) {

        // ["sem", "code", "ch", "credit", "grade"]
        if (semDataMap[c[0]] === undefined) {
            semDataMap[c[0]] = new SemData(c[0])
        }

        if (c[4].includes("通過")) {
            c[4] = "pass"
        } else if (c[4].includes("二次退選")) {
            c[4] = "W"
        }

        semDataMap[c[0]].record.semCourse.push(new Course(c[1], c[2], codeEn[c[1]], c[3], c[4]))

        if (hasGrade(c[4])) {
            semDataMap[c[0]].record.semCredits += parseInt(c[3])
            semDataMap[c[0]].record.semGPA += gpaOf(c[4]) * parseInt(c[3])

            totalCredits += parseInt(c[3])
            overallGPA += gpaOf(c[4]) * parseInt(c[3])
        }
    }

    // merge summer(H) to normal semester
    for (let key in semDataMap) {
        if (semDataMap[key].semN == "h") {
            console.log("mearging", key)

            let sortedKey = Object.keys(semDataMap).sort()
            let keyIdx = sortedKey.indexOf(key)
            let newKey
            if (keyIdx == 0) {
                newKey = sortedKey[1]
            } else {
                newKey = sortedKey[keyIdx - 1]
            }
            if (semDataMap.hasOwnProperty(newKey)) {
                semDataMap[newKey].record.semCredits += semDataMap[key].record.semCredits
                semDataMap[newKey].record.semGPA += semDataMap[key].record.semGPA
                semDataMap[newKey].record.semCourse = semDataMap[newKey].record.semCourse.concat(semDataMap[key].record.semCourse)
                delete semDataMap[key]
                console.log("merge", key, "to", newKey)
            }
        }
    }

    // calculate GPA
    for (let key in semDataMap) {
        semDataMap[key].record.semGPA = (semDataMap[key].record.semGPA / semDataMap[key].record.semCredits).toFixed(2)
    }
    overallGPA = (overallGPA / totalCredits).toFixed(2)

    // sort semData and put into an Array
    const semDataList = [];
    Object.keys(semDataMap).sort().forEach(function(key) {
        semDataList.push(semDataMap[key])
    });

    // write to chrome's storage
    let gradeInfo = {
        overallGPA: overallGPA,
        totalCredits: totalCredits,
        semDataList: semDataList
    }

    console.log(gradeInfo)

    chrome.storage.sync.set({
        gradeInfo: gradeInfo,
        studentId: studentId,
        chName: chName,
    }, function() {
        console.log("done");
    });
})

main()

setInterval(main(), 5000)