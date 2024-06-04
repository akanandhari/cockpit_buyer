'use client'
import React from "react";
import supplierList from "../services/data";
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    } else {
        return num.toString();
    }
}
const SupplierGroupList=(props:any)=>
{
   let supplierGroupList= supplierList;
   
   return (<>
   {supplierGroupList.map((supplier,index)=>{return (<>
    <div  key={index} className="w-full mx-auto mt-10 p-6 bg-stone-200 rounded-lg shadow-md">
        <div className="mb-4">
        <h1 className="text-xl font-bold"> {supplier.SupplierGroupName}</h1>
        </div>
        <div className="flex flex-wrap gap-4">
            {/* <!-- Turnover --> */}
            <div className="flex  bg-stone-100 rounded-lg shadow p-2">
               <div className=" items-center m-2">
                <h2 className="text-md font-medium mb-2">Turnover</h2>
                <p className="text-3xl font-bold">{formatNumber(supplier.trunover[0].purchased)}€</p>
                <p className="text-sm font-medium">purchased</p>
                </div>
                <div className=" items-center self-end m-2">
                    <span className="text-green-500 text-md mr-1">▲</span>
                    <span className="text-green-500 font-bold text-xl">3%</span>
                    <p className="text-sm text-gray-500 ml-1">VS 2023</p>
                </div>
           
            <div className=" m-2 border-l-2 border-neutral-300 p-1">
                <h2 className="text-md font-medium mb-2">Performance</h2>
                <p className="text-3xl font-bold">{formatNumber(supplier.performance[0].impact)}€</p>
                <p className="text-sm font-medium">in impact</p>
                </div>
                <div className="flex items-center self-end m-2 flex-col">
                   <p> <span className="text-green-500 text-md mr-1">▲</span>
                    <span className="text-green-500 font-bold text-xl">3%</span>
                    </p>
                    <p className="text-sm text-gray-500 ml-1">VS 2023</p>
                </div>
                <div className=" self-end m-2 border-r-2 pr-2 border-neutral-300"><p className="font-bold text-xl">2,3%</p> 
                <p>in height</p></div>
                <div className="flex items-center self-end m-2 flex-col">
                    <p><span className="text-red-500 text-md mr-1">▼</span>
                    <span className="text-red-500 font-bold text-xl">3%</span>
                    </p>
                    <p className="text-sm text-gray-500 ml-1">VS 2023</p>
                </div>
            </div>
            {/* <!-- SRQ and After Sales --> */}
            <div className="flex space-y-4">
                {/* <!-- SRQ --> */}
                <div className="p-2 bg-stone-100 rounded-lg shadow">
                    <h2 className="text-md font-md mb-2">SRQ</h2>
                    <div className="flex items-center">
                        <div className="flex flex-col items-center mr-8">
                        <span className="text-sm">Q</span>
                            <p className="text-3xl font-bold bg-green-500 p-2 rounded-md">5</p>
                            
                        </div>
                        <div className="flex flex-col items-center">
                        <span className="text-sm">D</span>
                            <p className="text-3xl font-bold bg-yellow-300  p-2 rounded-md">2,5</p>
                            
                        </div>
                    </div>
                </div>
            </div>
                {/* <!-- After Sales --> */}
                <div className="flex space-y-4">
                <div className="p-2 bg-stone-100 rounded-lg shadow">
                    <h2 className="text-md font-md mb-2">After Sales</h2>
                    <div className="flex items-center">
                        <div className="flex flex-col items-center mr-8">
                        <span className="text-sm">VOR</span>
                            <p className="text-3xl font-bold bg-yellow-300 p-2 rounded-md">80</p>                           
                        </div>
                        <div className="flex flex-col items-center">
                        <span className="text-sm">BO</span>
                            <p className="text-3xl font-bold bg-red-500 p-2 rounded-md">1200</p>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        
    </div>
    </>)})}
   </>);}
export default SupplierGroupList;