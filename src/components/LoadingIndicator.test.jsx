import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import LoadingIndicator from './LoadingIndicator.jsx'

describe('LoadingIndicator', () => {
    it('announces the current loading message', () => {
        render(<LoadingIndicator message="Cargando flota..." />)

        expect(screen.getByRole('status')).toHaveTextContent('Cargando flota...')
    })
})
