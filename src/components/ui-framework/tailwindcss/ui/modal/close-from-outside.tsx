'use client'
import React, { useRef } from 'react'

const CloseOutsideModal: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null)
  return (
    <>
      <button className="btn" onClick={() => modalRef.current?.showModal()}>open modal</button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default CloseOutsideModal