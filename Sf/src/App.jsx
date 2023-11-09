
import { useState } from 'react'
import './App.css'
import {persons} from './Name'
function App() {
 console.log(persons);
  const [search,setSearch]=useState('')
 
  // const {persons}= person

  return (
    <>
      <div>
          <input type='text' placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
         {
          persons.filter((val)=>{ 
            if(search === ''){
              return val }
              else if(val.first_name.toLowerCase().includes(search.toLowerCase())){
                return val;}
            else{
              return null
            }
          } )
          .map((per,index)=>{
            
            return  <div className='map'  key={index}> <p>{per.first_name}</p> </div>
            
          })
         }
      </div>
      
    </>
  )
}

export default App
