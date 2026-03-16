
// This component will render an SVG heart icon.
// It receives a 'filled' prop to determine if it should be filled or outlined.
// It also receives an onClick handler for interactivity.


export default function Heart({ filled, onClick, className }) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={filled ? "red" : "none"} // Fill with red color [currentColor] if filled, otherwise none
          stroke="black" // Always stroke with current color
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={onClick}
          className={className} // Allows for additional styling via props
          style={{ cursor: 'pointer' }} // Indicate it's clickable
      >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
  )
}
