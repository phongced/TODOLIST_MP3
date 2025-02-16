import './App.css'
import { useState } from 'react'
import { ToastContainer, toast} from 'react-toastify';

function App() {

  const [word, setWord] = useState('')
  const [todos, setTodos] =  useState<{id: string, job: string}[]>([])
  const handleAdd = () =>{
    if(todos?.some(item => item.id === word?.replace(/\s/g, ''))){
      toast.warn(`Công việc "${word}" đã được thêm vào trước đó`);
    }else{
      setTodos(prev => [...prev, {id: word.replace(/\s/g, ''), job: word}]);
      setWord('')
    } 
  }
  const hadleDeleteJob = (id: string) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  }
  return (
   <>
    <div className='flex flex-col h-screen gap-8 items-center border border-red-500 justify-center'>
     <div className='flex gap-5'>
     <input
        type='text'
        className='outline-none border border-blue-600 px-4 py-2 w-[400px]'
        value={word}
        onChange={e => setWord(e.target.value)}
      />
      <button 
        type='button'
        className='outline-none px-4 py-2 bg-blue-500 rounded-md text-white'
        onClick={handleAdd}
        >
          Add
      </button>
     </div>
     <div className='flex gap-3'>
      <h3 className='font-bold text-xl'>Content</h3>
      <ul>
       {todos?.map((item) => {
        return (
          <li key={item.id} className='flex gap-8 items-center'>
            <span className='my-2'>
            {item.job}
            </span>
            <span 
              onClick={() => hadleDeleteJob(item.id)}
              className='my-2 cursor-pointer p-2'>
              X
            </span>
          </li>
        )
       })}
      </ul>
     </div>
   </div>
   <ToastContainer
   position="top-right"
   autoClose={5000}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick={false}
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   theme="light"
   />
   </>
  )
}

export default App
