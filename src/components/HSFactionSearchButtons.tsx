import React from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

import { useUIContext } from 'hooks/useUIContext'
import { useDeckContext } from 'hooks/useDeckContext'

export const HSFactionSearchButtons = () => {
  const { setFilters } = useDeckContext()
  const { darkMode } = useUIContext()
  return (
    <>
      <Badge
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        as={Button}
        style={{ backgroundColor: 'var(--valkrill)' }}
        onClick={() => setFilters([{ value: 'valkrill', fields: 'general' }])}
      >
        VALKRILL
      </Badge>
      <Badge
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        as={Button}
        style={{ backgroundColor: 'var(--jandar)' }}
        onClick={() => setFilters([{ value: 'jandar', fields: 'general' }])}
      >
        JANDAR
      </Badge>
      <Badge
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        as={Button}
        style={{ backgroundColor: 'var(--ullar)' }}
        onClick={() => setFilters([{ value: 'ullar', fields: 'general' }])}
      >
        ULLAR
      </Badge>
      <Badge
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        as={Button}
        style={{ backgroundColor: 'var(--vydar)' }}
        onClick={() => setFilters([{ value: 'vydar', fields: 'general' }])}
      >
        VYDAR
      </Badge>
      <Badge
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        as={Button}
        style={{ backgroundColor: 'var(--einar)' }}
        onClick={() => setFilters([{ value: 'einar', fields: 'general' }])}
      >
        EINAR
      </Badge>
      <Badge
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        as={Button}
        style={{ backgroundColor: 'var(--utgar)' }}
        onClick={() => setFilters([{ value: 'utgar', fields: 'general' }])}
      >
        UTGAR
      </Badge>
      <Badge
        variant={`${darkMode ? 'dark' : 'light'} `}
        className={`m-1`}
        as={Button}
        style={{ backgroundColor: 'var(--aquilla)' }}
        onClick={() => setFilters([{ value: 'aquilla', fields: 'general' }])}
      >
        AQUILLA
      </Badge>
    </>
  )
}
