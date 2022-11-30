import React,{useState} from 'react'
import { FaUpload } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'


function Firstscreen() {
  const navigate=useNavigate();

  const [file, setFile] = useState("");


  // const form = document.getElementById('form');

  // form.addEventListener('submit', function(e) {
  //  e.preventDefault();
   
   
  // })


  
  const submitclick=()=>{
    navigate('/secondpage');
    // const payload = new FormData(form);
  
   fetch('http://localhost:5000/neemtree', {
   method: 'POST',
   body: payload,
   })
   .then(res => res.json())
   .then(data => console.log(data))
   
  }

  const handleClick = (e) =>{
    // console.log(e.target.files[0].name)
    setFile(e.target.files[0]);

    var x = document.getElementById("writtenpart");
      var y= document.getElementById("form");
    
      y.style.visibility="visible";
      y.style.marginTop = "50px";
      
      if (x.style.display === "none") {
        x.style.display = "block";
      
      } else {
        x.style.display = "none";
      
    }
  // const handlebtn=()=>{
  // }

  }

  return (
    <div className='container p-10 '>
    <div className="up">
    Add Candidates to Database
    </div>
    <div className="down mt-16 border  border-white outline-dotted">
    <div className="top cursor-pointer text-4xl flex mt-5 justify-center">
    <input  className='text-sm opacity-0 w-8 h-10 cursor-pointer z-10 '  type="file" name="" id=""  accept='.xlsx , .xls' onChange={handleClick} />
    <div className="filename w-52 absolute mt-10 text-sm">
    
    {file.name}
    </div>
    <div className="icon cursor-pointer z-100 absolute">
    <FaUpload />

    </div>
    </div>
    <div id='writtenpart' className="bottom text-center mt-8 mb-5">
    Upload a .xlsx or .xls file here
    </div>
   <div id='btnparent' className="bt text-center">

    <button id="form" onClick={submitclick}   className="bg-green-600 text-center invisible hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"  >
    SUBMIT
  </button>
   </div>
    </div>
    

    </div>
  )
}

export default Firstscreen