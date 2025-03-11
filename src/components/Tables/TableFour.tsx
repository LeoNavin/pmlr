import React from 'react'
const TableFour = () => {
      
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Moderator" },
        // Add more users as needed
      ];
    
      return (
        <div className="container mx-auto px-2 sm:px-6">
          <div className="py-8">
          <div className="flex justify-between items-center mb-4">
                <div className="flex-1 flex justify-center">
                    <h2 className="text-xl font-semibold leading-tight text-center">Product List</h2>
                </div>
                </div>
               <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                         <thead className="text-xs text-white uppercase bg-graydark dark:bg-gray-700 dark:text-gray-400">
                             <tr>
                             <th scope="col" className="px-6 py-3">
                                     Product name
                                 </th>
                                <th scope="col" className="px-6 py-3">
                                     <div className="flex items-center">
                                         Color
                                         <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                </svg></a>
                                     </div>
                                 </th>
                                 <th scope="col" className="px-6 py-3">
                             <div className="flex items-center">
                                         Category
                                         <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                 </svg></a>
                                    </div>
                                </th>
                                 <th scope="col" className="px-6 py-3">
                                     <div className="flex items-center">
                                         Price
                                         <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                         <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                     </svg></a>
                                    </div>
                                 </th>
                                 <th scope="col" className="px-6 py-3">
                                     <div className="flex items-center">
                                         Action
                                    </div>
                                 </th>
                                 {/* <th scope="col" class="px-6 py-3">
                                     <span class="sr-only">Edit</span>
                                 </th> */}
                             </tr>
                         </thead>
                         <tbody>
                             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                     Apple MacBook Pro 17"
                                 </th>
                                 <td className="px-6 py-4">
                                     Silver
                                 </td>
                                 <td className="px-6 py-4">
                                     Laptop
                                 </td>
                                 <td className="px-6 py-4">
                                     $2999
                                 </td>
                                 <td className="px-6 py-4 text-right">
                                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                     <a href="#" className="font-medium ml-3 text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                 </td>
                             </tr>
                             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                     Microsoft Surface Pro
                                 </th>
                                 <td className="px-6 py-4">
                                     White
                                 </td>
                                 <td className="px-6 py-4">
                                     Laptop PC
                                 </td>
                                 <td className="px-6 py-4">
                                     $1999
                                 </td>
                                 <td className="px-6 py-4 text-right">
                                   <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                   <a href="#" className="font-medium ml-3 text-red-600 dark:text-red-500 hover:underline">Delete</a>
                               </td>
                           </tr>
                           <tr className="bg-white dark:bg-gray-800">
                               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                   Magic Mouse 2
                               </th>
                               <td className="px-6 py-4">
                                   Black
                               </td>
                               <td className="px-6 py-4">
                                   Accessories
                               </td>
                               <td className="px-6 py-4">
                                   $99
                               </td>
                               <td className="px-6 py-4 text-right ">
                                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                     <a href="#" className="font-medium ml-3 text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                 </td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
          </div>

          <div>
                <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{clipPath:"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"}}></div>
        </div>
        <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{clipPath:"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"}}></div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">GeneriCon 2023</strong><svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Join us in Denver from June 7 – 9 to see what’s coming next.
            </p>
            {/* <a href="#" className="flex-none rounded-full bg-graydark px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-graydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-graydark">Register now <span aria-hidden="true">&rarr;</span></a> */}
        </div>
        <div className="flex flex-1 justify-end">
            <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
            <svg className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
            </button>
        </div>
        </div>

          </div>
        </div>
      );
    };
    
export default TableFour;
    
