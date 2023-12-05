import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import ReactModal, Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

const DetailsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }
  useEffect(() => {
    function keyDownHandler(event) {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }

      document.addEventListener("keydown", keyDownHandler)

      return () => {
        document.removeEventListener("keydown", keyDownHandler)
      }
    }
  }, [])
  return <div>
    <button onClick={openModal}>Open Modal</button>
    <ReactModal isOpen={isModalOpen} onRequestClose={closeModal}>

    </ReactModal>
  </div>
}

export default DetailsModal
