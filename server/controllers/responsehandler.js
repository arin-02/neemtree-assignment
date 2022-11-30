const fs = require('fs');


const responsehandler=(req,res)=>{
fs.readFile('../storagefolder/user-file', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

}
module.exports = responsehandler;