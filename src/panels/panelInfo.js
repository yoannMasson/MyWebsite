import classNames from 'classnames'

export default function PanelInfo({startPosition}) {

    return (
        <div className= {classNames(
            "info-panel",
            startPosition
        )}></div>
    )
}