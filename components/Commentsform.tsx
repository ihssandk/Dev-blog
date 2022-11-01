import React, {useRef, useState, useEffect} from 'react';
import {submitComment} from '../services'


const Commentsform = ({slug}: any) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl  = useRef<HTMLInputElement >();
  const nameEl = useRef<HTMLInputElement  >();
  const emailEl = useRef<HTMLInputElement >();
  const storeDataEl = useRef<HTMLInputElement >();
  useEffect (()=>{
      nameEl.current.value = window.localStorage.getItem('name');
      emailEl.current.value = window.localStorage.getItem('email');
  }, [])

  const handleCommentSubmission = () =>{
      setError(false);
      const {value :comment}:any= commentEl.current;
      const {value : name}:any= nameEl.current;
      const {value : email}:any= emailEl.current;
      const {checked : storeData}:any= storeDataEl.current;
      if (!comment || !name || !email){
        setError (true);
        return;
      }
      const commentObj= {name,email,comment,slug}
      console.log(localStorage)
      if(storeData){
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
      } else {
        window.localStorage.removeItem('name');
        window.localStorage.removeItem('email');
      }
      submitComment(commentObj)
        .then((res)=>{
          setShowSuccessMessage(true);
          setTimeout(()=> {
            setShowSuccessMessage(false);
          }, 3000);
        })
  }
    return (
    <div className="bg-gray-200 p-8 pb-12 mb-8 shadow-[5px_5px_0px_0px_indigo]">
      <h3 className="text-xl mb-8 font-semibold border-b border-sky-500 pb-4">Comment on this article</h3>
      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <textarea 
        ref={commentEl}
        className="p-4 outline-none w-full focus:ring-2 rounded-md focus:ring-gray-200 bg-gray-100 text-gray-700"
        placeholder="Comment"
        name='comment'
        />
        
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input type="text"
        ref={nameEl}
        className="py-2 px-4 outline-none w-full focus:ring-2 rounded-md focus:ring-gray-200 bg-gray-100 text-gray-700"
        placeholder="Name"
        name='name'
         />
      
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
      <input type="text"
        ref={emailEl}
        className="py-2 px-4 outline-none w-full focus:ring-2 rounded-md focus:ring-gray-200 bg-gray-100 text-gray-700"
        placeholder="Email"
        name='email'
         />
      </div>
      <div className="grid  grid-cols-1 gap-4 mb-4">
          <div className="ml-5">
            <input 
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
             />
             <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">Save my informations for the next time</label>
          </div>

      </div>
      {error && <p className="text-xs text-red-500">All Fields are required</p>}
      <div className="mt-8">
          <button
          className="transition duration-500 ease rounded-full hover:bg-blue-900 inline-block bg-cyan-300 text-lg text-white px-6 p-2 cursor-pointer"
          type="button"
          onClick={handleCommentSubmission}>
            Send Comment
          </button>
          {showSuccessMessage && (
                    <span className="text-xl float-right  mt-3 text-green-400">
                      We will review your comment and post it ASAP. Did you forget anything?
                    </span>
          )}
      </div>
    </div>
  )
}

export default Commentsform