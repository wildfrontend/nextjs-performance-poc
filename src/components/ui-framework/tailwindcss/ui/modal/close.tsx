"use client"
import { useRef } from "react"

const CloseModal: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null)
  return (
    <>
      <button className="btn" onClick={() => modalRef.current?.showModal()}>open modal</button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  )
}
export default CloseModal