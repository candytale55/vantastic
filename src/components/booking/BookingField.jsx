export default function BookingField({ id, label, error, children }) {
    return (
        <div className="form-field">
            <label htmlFor={id} className="form-label">{label}</label>
            {children}
            {error ? <p className="form-error-message">{error}</p> : null}
        </div>
    )
}
