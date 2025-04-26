export default function BilvasoftLogo({ className = "" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 300 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Dense dot grid pattern */}
            <g>
                {Array.from({ length: 11 }, (_, row) =>
                    Array.from({ length: 11 }, (_, col) => (
                        <circle
                            key={`${row}-${col}`}
                            cx={10 + col * 4}
                            cy={20 + row * 4}
                            r={1.5}
                            fill="currentColor"
                            opacity={
                                // Create arrow/diamond shape
                                row + col >= 5 && 
                                row + col <= 15 && 
                                Math.abs(col - 5) <= (10 - Math.abs(row - 5)) 
                                    ? 1 
                                    : 0
                            }
                        />
                    ))
                )}
            </g>

            {/* Vertical separator line */}
            <line x1="65" y1="20" x2="65" y2="60" stroke="currentColor" strokeWidth="1" />

            {/* Bilvasoft text */}
            <text
                x="80"
                y="45"
                style={{
                    fontFamily: 'sans-serif',
                    fontWeight: '600',
                    fontSize: '32px',
                    letterSpacing: '0.5px',
                    fill: 'currentColor'
                }}
            >
                Bilvasoft
            </text>

            {/* Tagline */}
            <text
                x="80"
                y="60"
                style={{
                    fontFamily: 'sans-serif',
                    fontSize: '12px',
                    letterSpacing: '0.5px',
                    fill: 'currentColor'
                }}
            >
                Building a better tomorrow
            </text>
        </svg>
    );
} 