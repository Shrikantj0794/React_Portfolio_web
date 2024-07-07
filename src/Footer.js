import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <>
        <footer className='w-full bg-light text-center'>
            <p>© {year} | Shrikant Jamale | Portfolio </p>
        </footer> 
    </>
  )

}
export default Footer
