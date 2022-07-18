import {uploadFile} from "./firebase/config";
import {useState} from 'react';
function App() {
  const [file, setFile] = useState(null);
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const result=await uploadFile(file);
      console.log(result);
    }catch(error){
      console.log(error);
    }
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
      <button>Upload</button>
    </form>
  )
}

export default App