import React from 'react'
import './Model.css'

export default function Model({ onClose }) {
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    {/* Content of your modal */}
                    <button className="close-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </>
    )
}
