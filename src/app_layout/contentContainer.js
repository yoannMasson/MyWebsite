import '../../public/css/sidebar.scss'
import SidebarLink from '../sidebar/sidebar_link'
import PanelInfo from '../panels/panelInfo'
import milkyWay from '../../public/img/workspace.jpeg';


export default function ContentContainer({glowCursor}) {

   const links = [["#","Mon parcours","accessibility"],
    ["#","Services"],
    ["#","A propos & Contact"],
    ["#","Les tarifs"]];

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
                                />
                    })
                }
            </div>
            <div className="main_panel" style={sectionStyle}>
                <PanelInfo
                    startPosition="center"/> 
                
            </div> 
        </div>
    )
}