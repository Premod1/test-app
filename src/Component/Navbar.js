import React from 'react'
import Logo from "../assest/Logo .png";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <div className="w-full h-16">
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center flex-none gap-1">
        <div className="logo">
          <img src={Logo} alt="" className='pl-5 sm:pl-7' />
        </div>
        <div className="flex items-center w-40 p-1 ml-6 bg-black border-2 border-solid rounded-3xl md:w-96">
          <Input placeholder="Search for web3 Domain website" className="p-1 border-none w-96 placeholder:text-sm" style={{color:"white"}} />
          <SearchIcon style={{ color: "gray", fontSize: 16 }} />
        </div>
      </div>
      <div className="flex items-center gap-20">
        <div className="menuItem"> Web3 Websites</div>
        <div className="menuItem"> About</div>
        <div className="menuItem"> FAQs</div>
        <div className="menuItem"> Useful</div>
        <div className="menuItem"> Blog</div>
        <div className="menuItem"> Login</div>
        <div className="menuItem"> Contact</div>
        <Button variant="contained">List</Button>
      </div>
    </div>
  </div>
  )
}

export default Navbar