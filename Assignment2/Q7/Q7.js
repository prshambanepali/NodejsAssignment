const path = require('path');
const filePath = 'P:\CODE\Cpp\postfix.cpp';
function file(filePath) {
  const a = path.dirname(filePath);  
  const b = path.basename(filePath); 
  const c = path.extname(filePath);    
  console.log('Directory:', a);  
  console.log('Base Name:', b);  
  console.log('Extension:', c);  
}
file(filePath);
 
