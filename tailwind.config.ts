import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'serif': ['"Playfair Display"', 'serif'],
				'sans': ['"DM Sans"', 'sans-serif'],
			},
			fontSize: {
				'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'h1':      ['3rem',   { lineHeight: '1.15', letterSpacing: '-0.01em' }],
				'h2':      ['2.25rem', { lineHeight: '1.2' }],
				'h3':      ['1.5rem',  { lineHeight: '1.3' }],
				'h4':      ['1.25rem', { lineHeight: '1.4' }],
				'body-lg': ['1.125rem', { lineHeight: '1.7' }],
				'body':    ['1rem',    { lineHeight: '1.7' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Revival-specific named colors
				gold: {
					DEFAULT: 'hsl(var(--gold))',
					light: 'hsl(var(--gold-light))',
					dark: 'hsl(var(--gold-dark))',
				},
				navy: {
					DEFAULT: 'hsl(var(--navy))',
					light: 'hsl(var(--navy-light))',
					dark: 'hsl(var(--navy-dark))',
				},
				cream: {
					DEFAULT: 'hsl(var(--cream))',
					dark: 'hsl(var(--cream-dark))',
				},
				fire: {
					DEFAULT: 'hsl(var(--fire))',
					light: 'hsl(var(--fire-light))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'warm-sm': 'var(--shadow-sm)',
				'warm-md': 'var(--shadow-md)',
				'warm-lg': 'var(--shadow-lg)',
				'gold': 'var(--shadow-gold)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					from: { opacity: '0', transform: 'translateX(-30px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					from: { opacity: '0', transform: 'translateX(30px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'gold-glow': {
					'0%, 100%': { boxShadow: '0 4px 20px hsla(42, 72%, 48%, 0.15)' },
					'50%': { boxShadow: '0 4px 30px hsla(42, 72%, 48%, 0.35)' }
				},
				'ken-burns': {
					from: { transform: 'scale(1)' },
					to: { transform: 'scale(1.05)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
				'gold-glow': 'gold-glow 2s ease-in-out infinite',
				'ken-burns': 'ken-burns 20s ease-out forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
