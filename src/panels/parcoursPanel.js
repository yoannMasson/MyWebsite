import classNames from 'classnames'
import '../../public/css/infoPanel.scss';

export default function ParcoursPanel() {

    return (
        <div className= {classNames(
            "info-panel"
        )}>
            Bonjour,<br/>
            Ingénieur, titulaire d'un double diplôme, je vous propose des développer votre site.<br/>
            En tant qu'interlocuteur unique, je vous accompagnerai de la première version de votre site jusqu'à la maintenance.<br/>
        </div>
    )
}