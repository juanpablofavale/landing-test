import './App.css'
import Atropos from 'atropos/react';
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import {RiTwitterXFill, RiFacebookBoxLine, RiInstagramLine} from "react-icons/ri"
import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";

export default function App () {
  return (
    <div id="app">
      <Atropos
        className='my-atropos'
        activeOffset={50}
        shadow={false}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
        <div className="contenido">
          <img className='logoppal' src="./Logo2.png" alt="nomada img" />
          <h1>Proximamente...</h1>
        </div>
        {/* ... */}
      </Atropos>
      <footer>
        <nav>
          <a className='face' target='_blank' href="http://www.facebook.com"><FaSquareFacebook /></a>
          <a className='insta' target='_blank' href="http://www.instagram.com"><FaSquareInstagram /></a>
          <a className='twit' target='_blank' href="http://www.twitter.com"><FaSquareXTwitter /></a>
        </nav>
      </footer>
    </div>  )
}