import { getSingleConversation } from '@/app/action/action'
import Input from '@/app/component/Input'
import React from 'react'

const page =async({params}) => {

    let id=await params.id
  let singleData= await getSingleConversation(id)
//   console.log(singleData)
 const time = new Date(singleData?.createdAt).toLocaleTimeString("en-US", {
  timeZone: "Asia/Dhaka",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});
const formattedTime = time.replace(/(\d{1,2}:\d{2})(\s?)([AP]M)/, "$1 $3");

// console.log(formattedTime); // Output: 11:41AM

  return (
    <div>

         <div>
      <div className="flex-1 flex flex-col bg-white">
        <div className="px-8 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h1 className="text-lg font-semibold text-gray-800">Learning CognitionX</h1>
            </div>
            <div className="relative">
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                
              >
                <i data-lucide="more-horizontal" className="w-5 h-5 text-gray-500 group-hover:text-gray-700"></i>
              </button>

              <div
                id="conversationDropdown"
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 hidden z-20"
              >
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                  <i data-lucide="edit" className="w-4 h-4"></i>
                  <span>Rename conversation</span>
                </button>

                <hr className="my-1 opacity-10" />
                <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2">
                  <i data-lucide="trash-2" className="w-4 h-4"></i>
                  <span>Delete conversation</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col p-8 overflow-y-auto space-y-6">
          {/* Human Message */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              H
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-3xl">
                <p className="text-gray-800">
                 {singleData?.question}
                </p>
              </div>
              <span className="text-xs text-gray-500 mt-1 block">{formattedTime}</span>
            </div>
          </div>

          {/* AI Message */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              AI
            </div>
            <div className="flex-1">
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 max-w-3xl">
                {singleData?.answer}
              </div>
              <span className="text-xs text-gray-500 mt-1 block">{formattedTime}</span>
            </div>
          </div>

         

         
        </div>

        {/* Input Area */}

        <Input></Input>
        
      </div>
    </div>




    </div>
  )
}

export default page