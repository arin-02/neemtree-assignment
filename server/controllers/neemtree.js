const fs = require('fs')
const excelToJson = require('convert-excel-to-json');



const neemtree = async (req,res) => {
    try {
	if(req.file?.filename === null || req.file.filename == 'undefined'){
	        res.status(400).json({ error: 'error'})
	    }else{
	        var filePath = "storagefolder/" + req.file.filename
	
	        const excelData = excelToJson({
	            sourceFile: filePath,
	            header: {
	                rows: 1
	            },
	            columnToKey: {
	                "*": "{{columnHeader}}"
	            }
	        })
	        res.status(200).json(excelData)
	    }
} catch (error) {
    console.log(error)
	res.status(500).json({ err: error})
}
}

module.exports = neemtree