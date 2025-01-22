const fs= require('fs').promises;
async function readFile(path)
{
try{
    const data=await fs.readFile(path)
    console.log(data.toString());
}
catch(error)
{
    console.log(error)
}
}
readFile("Q5.txt")