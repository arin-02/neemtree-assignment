const express = require('express')
// const responsehandler = require('./controllers/responsehandler')
const upload = require('./controllers/upload')
const router = express.Router()
const reader=require('xlsx');
 
router.get("/test",(req,res) => {
    res.json({})
})


router.post('/upload',upload,(req,res) => {
    res.json({message:"upload successful"});
})
 
router.get('/readexcelfile',(req,res) => {
    let filename = req.query.fiilename;
    let data=[]
    try{
        const file=reader.readfile('../storagefolder/'+filename +'.xlsx');
        const sheetNames=file.sheetNames

        for(let i=0;i<sheetNames.length;i++){
            const arr=reader.utils.sheet_to_json(
                file.Sheets[sheetNames[i]]
            )
            arr.forEach((res)=>{
                data.push(res)
            })
        }
        res.send(data);
    }catch(err)
    {
        res.send(err);
    }


});


module.exports = router