import React from 'react'

const ChatBubble = () => {
  return (
   <div>
    <div className='m-3'>
<div className="flex items-start gap-2.5">
   <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
         <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
      </div>
      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Join us for a fun-filled evening of networking and celebration at Freshers' Party being celebrated at LPU 2024 at Unipolis from 4 pm onwards. We've got live music, delicious food, and exciting activities.</p>
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Event Manager</span>
   </div>
   
   
</div>
</div>
<div className='m-3'>
<div className="flex items-start gap-2.5">
   <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="text-sm font-semibold text-gray-900 dark:text-white">Reggie Hargreeves</span>
         <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
      </div>
      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">We're excited to invite you to join us for Computing Seminar by DJ Rajat on 21st of September at 5 pm in Zakir Hussain College of Finance, Delhi.

This networking event will feature inspirational speakers,live entertainment,delicious food.</p>
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Event Manager</span>
   </div>
   
   
</div>
</div>
</div>
  )
}

export default ChatBubble