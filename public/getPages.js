const path = require("path")
const fs = require("fs") // https://nodejs.org/api/fs.html#callback-api fs (= file system) is a calback API...object
        // Naredi array fajlov, ki so v tej mapi
const dirPathPages = path.join(__dirname, "../content/pages") //tole spremenit

let pageslist = []

const getPages = async () => {
    await fs.readdir(dirPathPages, (err, files) => {
       if (err) {
           return console.log("Failed to list contents of the directory:" + err)
       }
       // files je array vseh fajlov
       // za vsak fajn izpiše celotno vsebino 
        files.forEach((file, i) => {
           let pages 
          await fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => {
           
               //naredi array z dvema ciframa, torej kje so prve --- in druge ---, ki označujejo začetek in konec metadata v md fajlih
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

    getPages()
