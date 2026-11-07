import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import useFetch from '../hooks/useFetch.jsx'
import BookingForm from './BookingForm.jsx'

vi.mock('../hooks/useFetch.jsx', () => ({
    default: vi.fn(),
}))

const locations = [
    { id: 'madrid', name: 'Madrid' },
    { id: 'barcelona', name: 'Barcelona' },
]

function getLocalDate(offsetDays = 0) {
    const date = new Date();
    date.setDate(date.getDate() + offsetDays);

    return date.toISOString().split('T')[0];
}

function fillRequiredFields() {
    fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Ada Lovelace' } })
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'ada@example.com' } })
    fireEvent.change(screen.getByLabelText('Telefono:'), { target: { value: '+34600111222' } })
    fireEvent.change(screen.getByLabelText('Fecha recogida:'), { target: { value: getLocalDate() } })
    fireEvent.change(screen.getByLabelText('Fecha entrega:'), { target: { value: getLocalDate(1) } })
    fireEvent.change(screen.getByLabelText('Ciudad de recogida:'), { target: { value: 'Madrid' } })
    fireEvent.change(screen.getByLabelText('Ciudad de entrega:'), { target: { value: 'Barcelona' } })
}

describe('BookingForm', () => {
    beforeEach(() => {
        vi.mocked(useFetch).mockReturnValue({
            data: { locations },
            loading: false,
            error: null,
        })
    })

    it('shows the locations returned by the API', () => {
        render(<BookingForm />)

        expect(screen.getAllByRole('option', { name: 'Madrid' })).toHaveLength(2)
        expect(screen.getAllByRole('option', { name: 'Barcelona' })).toHaveLength(2)
    })

    it('shows errors for invalid contact data and a past pickup date', async () => {
        render(<BookingForm />)

        fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'A' } })
        fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'email-invalido' } })
        fireEvent.change(screen.getByLabelText('Telefono:'), { target: { value: '123' } })
        fireEvent.change(screen.getByLabelText('Fecha recogida:'), { target: { value: getLocalDate(-1) } })
        fireEvent.submit(screen.getByRole('button', { name: 'Envia formulario' }).closest('form'))

        await waitFor(() => {
            expect(screen.getByText('El nombre debe tener al menos 2 caracteres.')).toBeInTheDocument()
            expect(screen.getByText('El formato del email no es valido.')).toBeInTheDocument()
            expect(screen.getByText('El telefono debe contener entre 9 y 15 digitos')).toBeInTheDocument()
            expect(screen.getByText('La fecha de recogida no puede en el pasado.')).toBeInTheDocument()
        })
    })

    it('opens the confirmation modal after a valid submission and restores focus when closed', async () => {
        const user = userEvent.setup()
        render(<BookingForm />)
        fillRequiredFields()

        const submitButton = screen.getByRole('button', { name: 'Envia formulario' })
        await user.click(submitButton)

        expect(await screen.findByRole('dialog')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Cerrar mensaje de reserva' })).toHaveFocus()

        await user.click(screen.getByRole('button', { name: 'Cerrar' }))
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
        expect(submitButton).toHaveFocus()
    })
})
