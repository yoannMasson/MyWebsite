import '../../public/css/sidebar.scss'
import SidebarLink from './sidebar_link'

export default function Sidebar({glowCursor}) {

   const links = [["#","Mon parcours"],
    ["#","Services"],
    ["#","A propos & Contact"],
    ["#","Les tarifs"]];

    return (
        <div className="sidebar">
            { links.map((link, i) => {
                return <SidebarLink     
                            key={i}
                            link={link[0]}
                            text={link[1]}
                            glowCursor={glowCursor}                           
                            />
                })
            }
        </div>
    )
}