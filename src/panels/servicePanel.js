import classNames from 'classnames'
import '../../public/css/infoPanel.scss';

export default function ServicePanel() {

    return (
        <div className= {classNames(
            "info-panel"
        )}>
            <p>
            Site Web, freelance, massage
            </p>
        </div>
    )
}