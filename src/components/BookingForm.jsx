// Formulario de reserva: coordina los datos, el envio y la confirmacion.
import { useEffect, useRef, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import useFetch from '../hooks/useFetch.jsx'
import LoadingIndicator from './LoadingIndicator.jsx'
import BookingSuccessModal from './booking/BookingSuccessModal.jsx'
import ContactFields from './booking/ContactFields.jsx'
import RentalFields from './booking/RentalFields.jsx'

export default function BookingForm({ firstInputRef }) {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const closeModalButtonRef = useRef(null);
    const submitButtonRef = useRef(null);
    const { register, handleSubmit, reset, control, formState } = useForm();
    const {
        data: locationsData,
        loading: locationsLoading,
        error: locationsError
    } = useFetch("/api/locations");
    const pickupDate = useWatch({
        control,
        name: "pickupDate"
    });
    const today = new Date().toISOString().split('T')[0];

    const submit = () => {
        reset();
        setIsSuccessModalOpen(true);
    }

    const closeSuccessModal = () => {
        setIsSuccessModalOpen(false);
        submitButtonRef.current?.focus();
    }

    useEffect(() => {
        if (!isSuccessModalOpen) return;

        closeModalButtonRef.current?.focus();
        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isSuccessModalOpen]);

    function handleKeyDown(event) {
        if (event.key === "Escape") closeSuccessModal();
    }

    if (locationsLoading) return <LoadingIndicator message="Cargando ciudades..." />
    if (locationsError) return <p>Error al cargar ciudades: {locationsError}</p>;

    return (
        <>
            <form onSubmit={handleSubmit(submit)} className="booking-form">
                <div className="booking-form-grid">
                    <ContactFields
                        register={register}
                        errors={formState.errors}
                        firstInputRef={firstInputRef} />
                    <RentalFields
                        register={register}
                        errors={formState.errors}
                        locations={locationsData?.locations || []}
                        today={today}
                        pickupDate={pickupDate} />
                    <div className="booking-form-actions">
                        <button
                            type="submit"
                            className="cta-button"
                            ref={submitButtonRef}>
                            Envia formulario
                        </button>
                    </div>
                </div>
            </form>

            {isSuccessModalOpen ? (
                <BookingSuccessModal
                    onClose={closeSuccessModal}
                    closeButtonRef={closeModalButtonRef} />
            ) : null}
        </>
    )
}
