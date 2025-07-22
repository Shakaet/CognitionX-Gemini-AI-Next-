import React from 'react'
import img from "../../public/assets/logo.svg"
import Image from 'next/image'
import { getConversation } from '../action/action'
import Link from 'next/link'
import Del from './Del'



const SideBar = async() => {

    let conversation= await getConversation()
//   console.log(conversation.length)
  return (
    

        <div className="w-64 bg-gray-900 text-white flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="font-semibold text-sm">CognitionX</span>
                      </div>
                    </div>
        
                    {/* Navigation Menu */}
                    <nav className="flex-1 p-4 space-y-2 overflow-y-hidden">
                      <div className="space-y-1">
                        <Link href={"/"}
                        
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                        >
                          <i data-lucide="message-circle" className="w-4 h-4"></i>
                          <span className="text-sm">Create Chat</span>
                        </Link>
                      </div>
        
                      {/* Conversations */}
                      <div className="pt-4">
                        <span className="text-gray-500 text-xs uppercase font-semibold">Conversations</span>
                        <div className="space-y-1 mt-3">

                           {
                                [...conversation].reverse().map((talk, index) => (
                                  <div
                                    key={index + 1}
                                    className="flex items-center justify-between gap-1 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                                  >
                                    <Link
                                      href={`/conversation/${talk._id}`}
                                      className="flex items-center space-x-3 cursor-pointer"
                                    >
                                      <span className="text-sm text-zinc-300">{talk.question}</span>
                                    </Link>
                                    <Del id={talk?._id.toString()}></Del>

                                     
                                    

                                    
                                  </div>
                                ))
                              }
                               
                            
                              

                          
                        
                            
                          
                          
                        </div>
                      </div>
                    </nav>
        
                    {/* Footer */}
                    <div className="p-4 border-t border-gray-700 mt-auto">
                      <div className="text-center space-y-2">
                        <span className="text-xs text-gray-400">Powered by</span>
                        <div className="flex items-center justify-center space-x-2">
                          <Image src={img} alt="Logo" className="h-10" />
                        </div>
                        <p className="text-xs text-gray-500">© 2025 All rights reserved</p>
                      </div>
                    </div>
                  </div>
        
    
  )
}

export default SideBar