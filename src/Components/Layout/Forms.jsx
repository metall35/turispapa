import React from 'react'

export default function Forms({ children }) {
    return (

        <section className='w-[90%] md:max-w-[85%] border border-neutral-400/40 m-4 my-36 p-6 shadow-lg shadow-[#14a44e38] rounded-lg '>
            {children}
        </section>
    )
}
