import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { FavoritesContextProvider } from '../context/FavoritesContext.jsx'

export function renderWithProviders(ui, { route = '/' } = {}) {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <FavoritesContextProvider>{ui}</FavoritesContextProvider>
        </MemoryRouter>
    )
}
