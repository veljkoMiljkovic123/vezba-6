import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function NavbarComponent() {
    const routes = [
        {
            path:'/',
            label:'Home'
        },
        {
            path:'/products',
            label:'Products'
        },
        {
            path:'/contact',
            label:'Contact'
        }
    ]
  return (
    <div className=' flex justify-between items-center container mx-auto h-[120px]'>
        <Link to={'/'}>Logo</Link>
        <ul className='flex gap-5'>
           { routes.map((route,i)=>{
                return <li key={i}>
                    <NavLink to={route.path}>{route.label}</NavLink>
                </li>
            })}
        </ul>
    </div>
  )
}

export default NavbarComponent