

export default function SidebarLink({text, icon, glowCursor, goToLink}) {

    return (       
        <a href="#"
        onMouseEnter={e => glowCursor(true)}
        onMouseLeave={e => glowCursor(false)}
        onClick={goToLink}>
        { icon && <i className="material-icons">{icon}</i> }
            <span className="nav-title" >
            {text}
            </span></a> 
    )

    
}