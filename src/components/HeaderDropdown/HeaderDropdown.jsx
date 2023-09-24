import React from 'react'

function HeaderDropdown({setOpenDropdown}) {
  return (
    <div
    className='py-10 px-6 absolute left-0 right-0 bottom-[-100vh] top-16 bg-[#00000080]' onClick={
        (e) => {
            if (e.target !== e.currentTarget){
                return
            }
            setOpenDropdown(false)
        }
    } >
        {/* Dropdown model */}
        <div className='bg-white dark:bg-[#2b2c37] shadow-md shadow-[#364e7e1a] w-full py-4 rounded-xl'>
            <h3 className='dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8'>
                All Boards
            </h3>
            <div>

            </div>
        </div>

    </div>
  )
}

export default HeaderDropdown