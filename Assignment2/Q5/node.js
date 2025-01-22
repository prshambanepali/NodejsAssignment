const fs= require('fs').promises;
async function readFile(path)
{
try{
    const data=await fs.readFile(path)
    console.log(data.toString());
}
catch(error)
{
    await fs.writeFile(path,'new file new text')
}
}
readFile("Q5.txt")