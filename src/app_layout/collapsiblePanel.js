import { useEffect, useState } from 'react';
import photo from '../../public/img/PHOTO_Rond.png';
import '../../public/css/collapsible.scss';
import '../../public/css/particles.scss';
import '../../public/css/MyStyle.scss';
import Particles from 'react-particles-js';
import param from '../../public/js/particlesParam.js';
export default function CollapsiblePanel() {

    useEffect(() => {
        let collapsible = ["top-panel","bottom-panel"];
        //Any collapsible collapses all the other
        document.body.addEventListener('click', hideCollapsible, true); 

        function hideCollapsible() {
            collapsible.map( collapsible => {
              document.getElementById(collapsible).classList.add("hidden");
          })
        }
    })

    return  (
    <div className="collapsiblePanel">
      <div className="top-panel-container hidden"  id="top-panel">
      <Particles params={param()}/>

        <div className="top-panel">
          <h1>Yoann Masson</h1>
          <h2>Développeur Full-Stack</h2>
          <span className="opening-page-img"><img id="moi" src={photo} /></span>
        </div>
      </div> 

      <div className="bottom-panel hidden" id="bottom-panel">
        <div className="info"><h2>Info1</h2></div>
        <div className="info"><h2>Info2</h2></div>
        <div className="info"><h2>Info3</h2></div>
      </div>
    </div>
    )
  }