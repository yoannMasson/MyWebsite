import { useEffect } from 'react';
import '../public/css/cursor.css';


// Composant visuelle qui remplace le curseur
export default function Cursor() {

    // Déplace le curseur avec la souris
    useEffect( () => {
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', e => {
            cursor.style.top = e.pageY + "px";
            cursor.style.left = e .pageX + "px";
        })
    })

    return <div className="cursor" id="cursor"></div>
}