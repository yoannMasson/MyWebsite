import classNames from 'classnames'
import '../../public/css/infoPanel.scss';

export default function PanelInfo({startPosition}) {

    return (
        <div className= {classNames(
            "info-panel",
            startPosition
        )}>
            Bonjour, engagez moi svp
        </div>
    )
}