'use client'
import { useState } from "react";

const Search=(props:any)=>{
    let [search,setSearch]=useState('');
    const handleChange=()=>
    {
        setSearch((prev)=>{return prev});
    }
return (<>
<h3 className={'font-bold text-lg'}>Welcome on your Cockpit {props.user}</h3>
<p className="text-lg">Find and exploit all the procurement data from your scope</p>

<form className="flex items-start w-full">   
<label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative w-6/12 ">
   
        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   onChange={handleChange} placeholder="Look for a data on a supplier or reference..."  />
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
    </div>
  
</form>
</>)}
export default Search;