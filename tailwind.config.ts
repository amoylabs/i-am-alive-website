import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                // App brand colors from iOS app
                alive: {
                    orange: '#F97316',     // Primary action / alert
                    'orange-dark': '#EA580C',
                    teal: '#14B8A6',       // Safe / success state
                    'teal-dark': '#0D9488',
                    blue: '#3B82F6',       // Accent
                    'blue-dark': '#2563EB',
                }
            },
            animation: {
                'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'pulse-ring': {
                    '0%': { transform: 'scale(0.8)', opacity: '1' },
                    '100%': { transform: 'scale(1.5)', opacity: '0' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    }
}
