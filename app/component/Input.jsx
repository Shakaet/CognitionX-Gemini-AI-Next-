import React from 'react'
import { handleSubmit } from '../action/action'




 
const Input =  () => {

  


    
  return (
  <form
  action={handleSubmit} // route that handles the server-side POST request
  
  className="p-6 border-t border-gray-200"
>
  <div className="relative">
    <input
      type="text"
      name="question" // input name to be sent in form
      placeholder="Ask me Anything"
      className="w-full p-4 pr-20 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      maxLength={1000}
      required
    />
    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
      <i data-lucide="sparkles" className="w-5 h-5 text-purple-500"></i>
    </div>
  </div>
  <div className="flex items-center justify-end mt-3">
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-500">0/1000</span>
     <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors cursor-pointer"
              >
                <span className="text-sm">Send</span>
                <i data-lucide="arrow-right" className="w-4 h-4"></i>
              </button>
    </div>
  </div>
</form>

  )
}

export default Input