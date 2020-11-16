import classNames from 'classnames'
import '../../public/css/infoPanel.scss';

export default function ContactPanel() {

    return (
        <div className= {classNames(
            "info-panel"
        )}>
        <p>    
        <a href="mailto:yoann.masson95@mail.com">Mail</a><br/>
            Tel: 07 79 80 09 94
        </p>
        </div>
    )
}