//UNFINISHED

const path = require("path")
const fs = require("fs") // https://nodejs.org/api/fs.html#callback-api fs (= file system) is a calback API...object
        // Naredi array fajlov, ki so v tej mapi
const dirPathAboutPage = path.join(__dirname, "../content/pages/about") //tole spremenit

let aboutPage = []

const getAboutPageData = () => {
    fs.readdir(dirPathAboutPage, (err, files) => {
       if (err) {
           return console.log("Failed to list contents of the directory:" + err)    
       }
       // files je array vseh fajlov
       // za vsak fajn izpiše celotno vsebino 
       files.forEach((file, i) => {
           let obj = {}
           let pages 
           fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => {
           
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
               pages = {
                        contents: contents
               }

               pageslist.push(pages) //We add the array thet we just made to an array               
                   let data = JSON.stringify(pageslist)
                   fs.writeFileSync("src/pages.json", data) //a JSON file name and location 
                   console.log(pageslist)

               
           })
       })
   })

  

   return 
}
setTimeout(() => {
            getHomePage()
}, 1000)