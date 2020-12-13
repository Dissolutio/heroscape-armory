import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'

export const HSFactionSearchButtons = () => {
  const { setFilters } = useDeckContext()
  const { darkMode } = useUIContext()
  return (
    <>
      <Button
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        size="sm"
        style={{ borderWidth: '3px', borderColor: 'var(--valkrill)' }}
        onClick={() => setFilters([{ value: 'valkrill', fields: 'general' }])}
      >
        VALKRILL
      </Button>
      <Button
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        size="sm"
        style={{ borderWidth: '3px', borderColor: 'var(--jandar)' }}
        onClick={() => setFilters([{ value: 'jandar', fields: 'general' }])}
      >
        JANDAR
      </Button>
      <Button
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        size="sm"
        style={{ borderWidth: '3px', borderColor: 'var(--ullar)' }}
        onClick={() => setFilters([{ value: 'ullar', fields: 'general' }])}
      >
        ULLAR
      </Button>
      <Button
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        size="sm"
        style={{ borderWidth: '3px', borderColor: 'var(--vydar)' }}
        onClick={() => setFilters([{ value: 'vydar', fields: 'general' }])}
      >
        VYDAR
      </Button>
      <Button
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        size="sm"
        style={{ borderWidth: '3px', borderColor: 'var(--einar)' }}
        onClick={() => setFilters([{ value: 'einar', fields: 'general' }])}
      >
        EINAR
      </Button>
      <Button
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        size="sm"
        style={{ borderWidth: '3px', borderColor: 'var(--utgar)' }}
        onClick={() => setFilters([{ value: 'utgar', fields: 'general' }])}
      >
        UTGAR
      </Button>
      <Button
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        size="sm"
        style={{ borderWidth: '3px', borderColor: 'var(--aquilla)' }}
        onClick={() => setFilters([{ value: 'aquilla', fields: 'general' }])}
      >
        AQUILLA
      </Button>
    </>
  )
}
