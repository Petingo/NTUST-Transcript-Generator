const nunjucks = require('nunjucks')
const fs = require('fs')

let filenames = ['body-ch', 'body-en']
filenames.forEach(filename => {
    let env = new nunjucks.Environment();
    let precompiledBody = nunjucks.precompile(filename + '.njk', {
        env: env
    })
    fs.writeFile((filename + ".js"), precompiledBody, () => {
        console.log(filename, "done")
    })
})