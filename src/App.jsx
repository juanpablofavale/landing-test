import './App.css'
import Atropos from 'atropos/react';
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

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
          <img className='logoppal' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSDebnVp2ZY1mgA5KfuKMs-vqU3lTegd7CGroS2Kyfq4yIf5g8T7l1AL4htgMVlHsegA&usqp=CAU" alt="nomada img" />
          <h1>Coming Soon...</h1>
        </div>
        {/* ... */}
      </Atropos>
      <footer>
        <nav>
          <a className='face' target='_blank' href="http://www.facebook.com"><CiFacebook /></a>
          <a className='insta' target='_blank' href="http://www.instagram.com"><CiInstagram /></a>
          <a className='twit' target='_blank' href="http://www.twitter.com"><CiTwitter /></a>
        </nav>
      </footer>
    </div>  )
}