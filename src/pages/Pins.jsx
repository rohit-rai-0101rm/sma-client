import React,{useState} from 'react'
import{Routes,Route} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import logo from '../assets/logo.png';
import { CreatePin, Feed, Navbar, PinDetails, Search } from '../components';
const Pins = ({user}) => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="px-2 md:px-5">
            <div className="bg-gray-50">
                <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user}/>
            <div className='h-full'>
                <Routes>
                    <Route path="/" element={<Feed/>}/>
                    <Route path="/category/:categoryId" element={<Feed/>}/>
                    <Route path="/pin-detail/:pinId" element={<PinDetails user={user}/>}/>
                    <Route path="/create-pin" element={<CreatePin user={user}/>}/>
                    <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm=
                    {searchTerm} />}/>

                </Routes>

            </div>
            </div>
        </div>
    )
}

export default Pins
