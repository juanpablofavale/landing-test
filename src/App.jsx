import './App.css'
import Atropos from 'atropos/react';
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import {RiTwitterXFill, RiFacebookBoxLine, RiInstagramLine} from "react-icons/ri"
import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <div data-atropos-offset="5" className="contenido">
          <img className='logoppal' src="./Nomada.png" alt="nomada img" />
          <p>Todo comienza con tus ganas de viajar</p>
          <h1>Próximamente...</h1>
        </div>
        {/* ... */}
      </Atropos>
      <footer>
        <nav>
          <p className='face' onClick={() => toast.dark("Próximamente!")}><FaSquareFacebook /></p>
          <p className='insta' onClick={() => toast.dark("Próximamente!")}><FaSquareInstagram /></p>
          <p className='twit' onClick={() => toast.dark("Próximamente!")}><FaSquareXTwitter /></p>
        </nav>
      </footer>
    </div>  )
}