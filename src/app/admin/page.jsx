"use client"

import { useState } from 'react'

import AboutAdminView from '@/components/admin-view/about'
import ContactAdminView from '@/components/admin-view/contact'
import EducationAdminView from '@/components/admin-view/education'
import ExperienceAdminView from '@/components/admin-view/experience'
import HomeAdminView from '@/components/admin-view/home'
import ProjectsAdminView from '@/components/admin-view/projects'

const AdminView = () => {

    const [currentSelectedTab, setCurrentSelectedTab] = useState('home')

    const menuItem = [
        {
            id: 'home',
            label: 'Home',
            component: <HomeAdminView />
        },
        {
            id: 'about',
            label: 'About',
            component: <AboutAdminView />
        },
        {
            id: 'experience',
            label: 'Experience',
            component: <ExperienceAdminView />
        },
        {
            id: 'education',
            label: 'Education',
            component: <EducationAdminView />
        },
        {
            id: 'projects',
            label: 'Projects',
            component: <ProjectsAdminView />
        },
        {
            id: 'contact',
            label: 'Contact',
            component: <ContactAdminView />
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
                        className='p-4 font-bold text-xl text-black'
                        onClick={() => setCurrentSelectedTab(item.id)} >
                        {item.label}
                    </button>
                ))
            }
        </nav>
        <div className="mt-10 p-10">
            {
                menuItem.map(item => item.id === currentSelectedTab && item.component)
            }
        </div>
    </div>
  )
}

export default AdminView