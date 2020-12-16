import React from 'react'
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'
import { useUIContext, modalStates } from 'hooks/useUIContext'

export default function ModalDisplay() {
  const {
    darkMode,
    darkModeBSClassNames,
    modalState,
    modalAbility,
    closeModal,
  } = useUIContext()
  const isAbilityModal = modalState === modalStates.ability
  if (isAbilityModal) {
    return (
      <ModalStyleWrapper darkMode={darkMode}>
        <Modal
          size="lg"
          show={isAbilityModal}
          onHide={closeModal}
          aria-labelledby="ability-card-title"
          centered
        >
          <Modal.Header className={`${darkModeBSClassNames}`} closeButton>
            <Modal.Title id="ability-card-title">
              {modalAbility.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={`${darkModeBSClassNames}`}>
            {modalAbility.desc}
          </Modal.Body>
        </Modal>
      </ModalStyleWrapper>
    )
  }
  return null
}

const ModalStyleWrapper = styled.div<{ darkMode: boolean }>`
  .close {
    color: ${(props) => (props.darkMode ? 'var(--bs-light)' : 'var(--bs-dark')};
  }
`
