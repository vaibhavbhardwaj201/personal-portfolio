"use client"

import React from 'react'

const AdminView = () => {

    const menuItem = [
        {
            id: 'home',
            label: 'Home'
        },
        {
            id: 'about',
            label: 'About'
        },
        {
            id: 'experience',
            label: 'Experience'
        },
        {
            id: 'education',
            label: 'Education'
        },
        {
            id: 'projects',
            label: 'Projects'
        },
        {
            id: 'contact',
            label: 'Contact'
        },
    ]

  return (
    <div className='border-b border-gray-200'>
        <nav className='-mb-0.5 flex justify-center space-x-6' role='tablist'>
            {
                menuItem.map(item => (
                    <button 
                        key={item.id} 
                        type='button'
                        className='p-4 font-bold text-xl text-black'>
                        {item.label}
                    </button>
                ))
            }
        </nav>
        
    </div>
  )
}

export default AdminView