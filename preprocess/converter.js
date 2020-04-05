const fs = require('fs')

let codeEn = {}
let tag = false
for(let i = 103; i <= 108 ; i++){
    for(let k of [1, 2, 'H']){
        try{
            let courseList = JSON.parse(fs.readFileSync(`${i}${k}.json`))
            for(let c of courseList){
                if(codeEn[c["CourseNo"]] != undefined && codeEn[c["CourseNo"]] != c["CourseName"]){
                    tag = true;
                    break;
                }
                codeEn[c["CourseNo"]] = c["CourseName"]
            }
        } catch(err){
            console.log(`${i}${k}.json`)
            console.log(err)
        }
        if(tag){
            break
        }
    }
    if(tag){
        break
    }
}

fs.writeFileSync('code-en.json', JSON.stringify(codeEn))
console.log("done")
