import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { IoHeartCircle } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import "./header.scss"


const Header = () => {
  return (
    <header>
        <nav>
            <div className="top">
                <div className="top-left">
                    <p>GUCCI</p>
                    <p>DOLCE&GABBANA</p>
                    <p>PRADA</p>
                    <p>VERSACE</p>
                    <p>LACOSTE</p>
                    <p>HERMES</p>
                </div>

                <div className="top-right">
                    <div className="search">
                    <FiSearch />
                    </div>

                    <div className="favourites">
                        <IoHeartCircle />
                    </div>

                    <div className="basket">
                        <SlBasket />
                    </div>

                    <p>Login</p>
                </div>
            </div>

            <div className="middle">
                <h1>LUXE AVENUE</h1>
            </div>
        </nav>
    </header>
  )
}

export default Header