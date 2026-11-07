import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'
import { renderWithProviders } from './test/test-utils.jsx'

describe('App', () => {
    it('shows the not-found page for an unknown route', () => {
        renderWithProviders(<App />, { route: '/ruta-inexistente' })

        expect(screen.getByRole('heading', { name: 'Esta página no existe' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Volver al inicio' })).toHaveAttribute('href', '/')
    })
})
