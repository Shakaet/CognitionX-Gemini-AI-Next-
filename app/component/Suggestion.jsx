"use client"
import React from 'react'
import { aii, handleSubmit } from '../action/action'




const Suggestion = () => {


   
  return (
    <div className="space-y-3 w-full max-w-2xl">
            <form
  action={handleSubmit}
  className="space-y-4"
>
  <button
    type="submit"
    name="question"
    value="It looks like you're writing an email, would you like help drafting it?"
    className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left"
  >
    <i data-lucide="zap" className="w-5 h-5 text-yellow-500 flex-shrink-0"></i>
    <span className="text-gray-700">It looks like you're writing an email, would you like help drafting it?</span>
  </button>

  <button
    type="submit"
    name="question"
    value="Generate a report on customer feedback for the last 3 months."
    className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left"
  >
    <i data-lucide="zap" className="w-5 h-5 text-yellow-500 flex-shrink-0"></i>
    <span className="text-gray-700">Generate a report on customer feedback for the last 3 months.</span>
  </button>

  <button
    type="submit"
    name="question"
    value="Analyze this month's sales performance"
    className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left"
  >
    <i data-lucide="zap" className="w-5 h-5 text-yellow-500 flex-shrink-0"></i>
    <span className="text-gray-700">Analyze this month's sales performance</span>
  </button>
</form>

          </div>
  )
}

export default Suggestion