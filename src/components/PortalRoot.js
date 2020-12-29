import React from 'react'
import ReactDom from 'react-dom';

function PortalRoot() {
    return ReactDom.createPortal(
        <h1>
            Portal Demo
        </h1>,
        document.getElementById('portal-root')
    )
}

export default PortalRoot
