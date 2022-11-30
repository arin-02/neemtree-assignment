import React,{useState} from 'react'
import { FaUpload } from "react-icons/fa";



function Firstscreen() {
  return (
    <div className='container p-10 '>
    <div className="up">
    Add Candidates to Database
    </div>
    <div className="down mt-16 border  border-white outline-dotted">
    <div className="top cursor-pointer text-4xl flex mt-5 justify-center">
    <input  className='text-sm w-8 opacity-0  h-10 cursor-pointer z-10' type="file" name="" id=""  accept='.xlsx , .xls' />
    <div className="icon cursor-pointer z-100 absolute">
    <FaUpload />

    </div>
    </div>
    <div className="bottom text-center mt-16 mb-5">
    Upload a .xlsx or .xls file here
    </div>
    </div>

    </div>
  )
}

export default Firstscreen