import { useFavorites, FavoritesContextProvider } from './FavoritesContext.jsx'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

function FavoritesProbe() {
    const { favorites, toggleFavorite } = useFavorites()

    return (
        <>
            <button type="button" onClick={() => toggleFavorite('van-1')}>
                Alternar favorito
            </button>
            <p>{favorites.join(',')}</p>
        </>
    )
}

describe('FavoritesContextProvider', () => {
    it('adds and removes a favorite van', async () => {
        const user = userEvent.setup()

        render(
            <FavoritesContextProvider>
                <FavoritesProbe />
            </FavoritesContextProvider>
        )

        await user.click(screen.getByRole('button', { name: 'Alternar favorito' }))
        expect(screen.getByText('van-1')).toBeInTheDocument()

        await user.click(screen.getByRole('button', { name: 'Alternar favorito' }))
        expect(screen.queryByText('van-1')).not.toBeInTheDocument()
    })
})
