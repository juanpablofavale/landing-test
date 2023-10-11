import './App.css'
import Atropos from 'atropos/react';
import 'react-toastify/dist/ReactToastify.css';
import { BiLogoFacebook, BiLogoInstagram, BiLogoWhatsapp, BiMailSend, BiPhoneCall } from "react-icons/bi";

export default function App () {
  return (
    <div id="app">
      <Atropos
        className='my-atropos'
        activeOffset={50}
        shadow={false}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
        <div className="contenido">
          <img data-atropos-offset="6" className='logoppal' src="./Nomada.png" alt="nomada img" />
          <p data-atropos-offset="5" className='legajo'>PV-2022-139123091-APN-DRAV#MTYD</p>
          <p data-atropos-offset="5">VIAJES Y TURISMO</p>
          <h1 data-atropos-offset="4">Próximamente...</h1>
        </div>
        {/* ... */}
      </Atropos>
      <footer>
        <nav>
          <a href="https://www.facebook.com/nomadaviajesyturismo/" target='_blank' rel='noopener noreferrer'>
            <p className='face'>
              <BiLogoFacebook />
            </p>
          </a>
          <a href="https://www.instagram.com/nomada.evt/" target='_blank' rel='noopener noreferrer'>
            <p className='insta'>
              <BiLogoInstagram />
            </p>
          </a>
          <a href="https://wa.me/+542916442676" target='_blank' rel='noopener noreferrer'>
            <p className='whats'>
              <BiLogoWhatsapp />
            </p>
          </a>
          <a href="tel:+542916442676" target='_blank' rel='noopener noreferrer'>
            <p className='phone'>
              <BiPhoneCall />
            </p>
          </a>
          <a href="mailto:nomada.evt@gmail.com" target='_blank' rel='noopener noreferrer'>
            <p className='mail'>
              <BiMailSend />
            </p>
          </a>
        </nav>
        <a target='_blank' rel='noopener noreferrer' href="https://tramitesadistancia.gob.ar/tramitesadistancia/detalle-tipo?id=624">📄Denuncia contra una agencia</a>
      </footer>
    </div>  )
}