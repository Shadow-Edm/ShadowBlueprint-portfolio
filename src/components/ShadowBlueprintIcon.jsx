function ShadowBlueprintIcon({ size = 40 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={size}
            height={size}
            className="transition-all duration-300"
            aria-label="Logo Edmond"
            role="img"
        >
            {/* Fond */}
            <rect
                width="512"
                height="512"
                rx="112"
                className="fill-white dark:fill-[#0B0F19] transition-colors duration-300"
            />

            {/* Effet de lueur diffuse */}
            <rect
                x="116"
                y="116"
                width="280"
                height="280"
                rx="24"
                className="hidden dark:block fill-[#00D2FF] opacity-15"
                style={{ filter: 'blur(20px)' }}
            />

            {/* Cadre principal */}
            <rect
                x="116"
                y="116"
                width="280"
                height="280"
                rx="24"
                fill="none"
                strokeWidth="12"
                strokeLinejoin="round"
                className="stroke-[#004B87] dark:stroke-[#00D2FF] transition-colors duration-300"
            />

            {/* Lignes internes */}
            <path
                d="M 116 256 L 216 256"
                strokeWidth="8"
                strokeLinecap="round"
                className="stroke-[#004B87] dark:stroke-[#1E293B] transition-colors duration-300"
            />

            <path
                d="M 256 116 L 256 216"
                strokeWidth="8"
                strokeLinecap="round"
                className="stroke-[#004B87] dark:stroke-[#1E293B] transition-colors duration-300"
            />

            {/* Diagonale principale */}
            <path
                d="M 150 362 L 362 150"
                strokeWidth="10"
                strokeLinecap="round"
                className="stroke-[#004B87] dark:stroke-[#00D2FF] transition-colors duration-300"
            />

            {/* Ligne de contournement */}
            <path
                d="M 216 150 L 320 150 L 362 192 L 362 296"
                fill="none"
                strokeWidth="6"
                strokeLinejoin="round"
                className="stroke-[#004B87] dark:stroke-[#1E293B] transition-colors duration-300"
            />

            {/* Nœuds */}
            <circle
                cx="256"
                cy="150"
                r="14"
                className="fill-white dark:fill-[#0B0F19] stroke-[#004B87] dark:stroke-[#1E293B] transition-colors duration-300"
                strokeWidth="6"
            />

            <circle
                cx="150"
                cy="256"
                r="14"
                className="fill-white dark:fill-[#0B0F19] stroke-[#004B87] dark:stroke-[#1E293B] transition-colors duration-300"
                strokeWidth="6"
            />

            <circle
                cx="362"
                cy="150"
                r="18"
                className="fill-white dark:fill-[#0B0F19] stroke-[#004B87] dark:stroke-[#00D2FF] transition-colors duration-300"
                strokeWidth="8"
            />

            <circle
                cx="150"
                cy="362"
                r="18"
                className="fill-white dark:fill-[#0B0F19] stroke-[#004B87] dark:stroke-[#00D2FF] transition-colors duration-300"
                strokeWidth="8"
            />

            {/* Carré central */}
            <rect
                x="216"
                y="216"
                width="80"
                height="80"
                rx="12"
                className="fill-[#00A3FF] dark:fill-[#00D2FF] transition-colors duration-300"
            />

            {/* Effet de pliure */}
            <path
                d="M 356 396 C 356 396 366 356 396 356 L 396 396 Z"
                className="fill-[#D2E4F2] dark:fill-[#1E293B] transition-colors duration-300"
            />

            <path
                d="M 356 396 L 396 356"
                strokeWidth="10"
                strokeLinecap="round"
                className="stroke-[#004B87] dark:stroke-[#00D2FF] transition-colors duration-300"
            />
        </svg>
    )
}

export default ShadowBlueprintIcon