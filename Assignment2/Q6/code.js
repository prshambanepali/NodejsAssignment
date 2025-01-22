const fs = require("fs").promises;
const newText="This is a newline inserted"
async function openfile()
{
    try{
        await fs.writeFile("mero.txt", 'This is newline inserted'+ '\n', { flag: 'a' })
    }
    catch(error)
    {
        console.log(error)
    }
}

openfile();