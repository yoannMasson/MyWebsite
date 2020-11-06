

export default function SidebarLink({link, text, glowCursor}) {

    return (
        <a href={link}
        onMouseEnter={glowCursor(true)}
        onMouseLeave={glowCursor(false)}>
        <span className="nav-title">{text}</span></a>
    )
}