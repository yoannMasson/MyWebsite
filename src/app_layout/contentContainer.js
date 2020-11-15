import { useState, useEffect } from 'react';
import '../../public/css/sidebar.scss';
import SidebarLink from '../sidebar/sidebar_link';
import milkyWay from '../../public/img/workspace.jpeg';
import ParcoursPanel from '../panels/parcoursPanel';
import ContactPanel from '../panels/contactPanel';
import ServicePanel from '../panels/servicePanel';
import TarifPanel from '../panels/tarifPanel';


export default function ContentContainer({glowCursor}) {

   const links = [["#","Mon parcours","accessibility","parcours"],
    ["#","Services","","service"],
    ["#","A propos & Contact","","contact"],
    ["#","Les tarifs","","tarif"]];

    let [activePanel, setActivePanel] = useState("parcours");

    const goToLink = (link) => {
      setActivePanel(link)
    }

    // Style for background image
    var sectionStyle = {
        background:  `url(${milkyWay}) no-repeat`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      };

    return (
        <div className="content-container">
            <input type="checkbox" id="check_menu"></input>
            <header>
                <label htmlFor="check_menu" 
                onMouseEnter={e => glowCursor(true)}
                onMouseLeave={e => glowCursor(false)}>
                    <i className="material-icons" id="sidebar_btn">menu</i>
                </label>
                <h3>Yoann <span>Masson</span></h3>
            </header>
            <div className="sidebar">
                { links.map((link, i) => {
                    return <SidebarLink     
                                key={i}
                                link={link[0]}
                                text={link[1]}
                                icon={link[2]}
                                glowCursor={glowCursor}
                                goToLink={() => goToLink(link[3])}                           
                                />
                    })
                }
            </div>
            <div className="main_panel" style={sectionStyle}>
             { activePanel == "parcours" && <ParcoursPanel></ParcoursPanel>}
             { activePanel == "service" && <ServicePanel></ServicePanel>}
             { activePanel == "tarif" && <TarifPanel></TarifPanel>}
             { activePanel == "contact" && <ContactPanel></ContactPanel>}
                
                
            </div> 
        </div>
    )
}