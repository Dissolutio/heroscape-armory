import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { useUIContext, modalStates } from 'hooks/useUIContext'

export default function ModalDisplay() {
  const { modalState, modalAbility, closeModal } = useUIContext()
  const isAbilityModal = modalState === modalStates.ability
  if (isAbilityModal) {
    return (
      <Modal
        size="lg"
        show={isAbilityModal}
        onHide={closeModal}
        aria-labelledby="ability-card-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="ability-card-title">{modalAbility.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalAbility.desc}</Modal.Body>
      </Modal>
    )
  }
  return null
}
