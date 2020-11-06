import '../../public/css/sidebar.scss'
import SidebarLink from './sidebar_link'

export default function Sidebar({glowCursor}) {

   const links = [["#","Mon parcours",glowCursor],
    ["#","Services",glowCursor],
    ["#","A propos & Contact",glowCursor],
    ["#","Les tarifs",glowCursor]];
    return (
        <div className="sidebar">
            { links.map((link, i) => {
                console.log(link)
                return <SidebarLink
                            key={i}
                            link={link[0]}
                            text={link[1]}
                            glowCursor={() => glowCursor}                           
                            />
                })
            }
        </div>
    )
}