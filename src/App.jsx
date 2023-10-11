import './App.css'
import Atropos from 'atropos/react';
import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram, FaSquareWhatsapp, FaPhoneVolume, FaSquarePhone } from "react-icons/fa6";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImFacebook2, ImMail } from "react-icons/im";

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
          <p>VIAJES Y TURISMO</p>
          <p>PV-2022-139123091-APN-DRAV#MTYD</p>
          <h1>Próximamente...</h1>
        </div>
        {/* ... */}
      </Atropos>
      <footer>
        <nav>
          <a href="https://www.facebook.com/nomadaviajesyturismo/" target='_blank' rel='noopener noreferrer'>
            <p className='face' onClick={() => toast.dark("Próximamente!")}><ImFacebook2 /></p>
          </a>
          <a href="https://www.instagram.com/nomada.evt/" target='_blank' rel='noopener noreferrer'>
            <p className='insta' onClick={() => toast.dark("Próximamente!")}><FaSquareInstagram /></p>
          </a>
          <a href="https://www.facebook.com/nomadaviajesyturismo/" target='_blank' rel='noopener noreferrer'>
            <p className='twit' onClick={() => toast.dark("Próximamente!")}><FaSquareWhatsapp /></p>
          </a>
          <a href="https://www.facebook.com/nomadaviajesyturismo/" target='_blank' rel='noopener noreferrer'>
            <p className='twit' onClick={() => toast.dark("Próximamente!")}><FaSquarePhone /></p>
          </a>
          <a href="https://www.facebook.com/nomadaviajesyturismo/" target='_blank' rel='noopener noreferrer'>
            <p className='twit' onClick={() => toast.dark("Próximamente!")}><ImMail /></p>
          </a>
        </nav>
      </footer>
    </div>  )
}