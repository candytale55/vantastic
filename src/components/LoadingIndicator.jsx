import { LoaderCircle } from 'lucide-react'

export default function LoadingIndicator({ message, className = '' }) {
    return (
        <div className={`loading-indicator ${className}`} role="status" aria-live="polite">
            <LoaderCircle className="loading-indicator-icon" aria-hidden="true" />
            <p>{message}</p>
        </div>
    )
}
