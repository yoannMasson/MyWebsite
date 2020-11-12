import { useEffect } from 'react';
import '../../public/css/cursor.scss';
import classNames from 'classnames';

// Composant visuelle qui remplace le curseur
export default function Cursor({glow}) {

    // Déplace le curseur avec la souris
    useEffect( () => {
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', e => {
            cursor.style.top = e.pageY + "px";
            cursor.style.left = e .pageX + "px";
        })
    })

    return <div className={classNames(
        "cursor",
        { "glow": glow }
    )
    } id="cursor"></div>
}