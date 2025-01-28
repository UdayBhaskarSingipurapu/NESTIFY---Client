import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
          <nav className="shadow px-6 py-3 bg-white">
              <div className="flex justify-between items-center">
                  <div className="flex gap-7 items-center">
                      <div className="text-lg font-bold">Logo</div>
                      <div>
                          <Link to="" className=" nav-link text-gray-700 hover:text-black hover:underline">
                              Home
                          </Link>
                      </div>
                      <div>
                          <Link to="About" className="nav-link text-gray-700 hover:text-black hover:underline">
                              About
                          </Link>
                      </div>
                      <div>
                          <Link to="Contact" className="nav-linktext-gray-700 hover:text-black hover:underline">
                              Contact
                          </Link>
                      </div>
                  </div>
                  <div>
                      <Link to="#" className=" nav-link bg-black text-white border-2 border-black px-3 py-1 cursor-pointer hover:bg-gray-100 hover:text-black transition">
                          Sign UP
                      </Link>
                  </div>
              </div>
          </nav>
    </div>
  )
}

export default Header
