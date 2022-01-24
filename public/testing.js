// Funkcija, ki ob klicu naredi array fajlov, ki so v dirPath mapi in prebere njihovo vsebino
const path = require("path")
const fs = require("fs") // https://nodejs.org/api/fs.html#callback-api fs (= file system) is a calback API...object
        // Naredi array fajlov, ki so v tej mapi
const dirPath = path.join(__dirname, "../content/posts") //tole spremenit

let postlist = []
        // fs.readdir(path[, options], callback)  Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.
const getPosts = async () => {
     await fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of the directory:" + err)
        }
        // files je array vseh fajlov
        // za vsak fajn izpiše celotno vsebino 
        files.forEach((file, i) => {
            let obj = {}
            let post 
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                //naredi array z dvema ciframa, torej kje so prve --- in druge ---, ki označujejo začetek in konec metadata v md fajlih
                const getMetadataIndices = (accumulator, element, i) => {
                    if (/^---/.test(element)) {
                        accumulator.push(i)
                    }
                    return accumulator
                }
                const parseMetadata = ({lines, metadataIndecis}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]) //naredi array samo iz metadata, torej od prvih --- do drugih ---
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]  // we split the line where the : is and the first part is property of obj and the second is a value
                        })
                        // console.log(obj)
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n") //razdelimo vrstice po presledkih
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})
                post = {
                    id: i + 1, 
                    layout: metadata.layout ? metadata.layout : "No layout avaliable.",
                    title: metadata.title ? metadata.title : "No title avaliable.",
                    date: metadata.date ? metadata.date: "No data avaliable.",
                    thumbnail: metadata.thumbnail ? metadata.thumbnail : "No tumbnail avaliable.",
                    content: content ? content : "No content."
                }
                postlist.push(post) //We add the array thet we just made to an array               
                if (i === files.length -1) {
                    //pogoj, da se funkcija izvede samo tokrat kot je md fajlov
                    console.log(postlist)
                    let data = JSON.stringify(postlist)
                    fs.writeFileSync("src/posts.json", data) //a JSON file name and location 
                }
            })
        })
    })

    //     console.log(postlist)
 
    return 
}
   
            getPosts()