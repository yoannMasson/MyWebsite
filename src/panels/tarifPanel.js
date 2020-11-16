import classNames from 'classnames'
import '../../public/css/infoPanel.scss';

export default function TarifPanel() {

    return (
        <div className= {classNames(
            "info-panel"
        )}>
        <p>
        Bonjour,<br/>
         TJM: 250€
         Site Vitrine: 800€
         Hebergement 20€/an
        </p>
        </div>
    )
}