/**
 * Mantine Theme Configuration
 *
 * Customize the look and feel of the application by modifying this file.
 * Documentation: https://mantine.dev/theming/theme-object/
 */

export const mantineTheme = {
  /** Color scheme: 'light' | 'dark' | 'auto' */
  colorScheme: 'dark',

  /** Primary color used for buttons, links, etc. */
  primaryColor: 'gold',

  /** Custom color palette */
  colors: {
    // Dark mode colors - warmer tones to match gold theme
    dark: [
      '#C9C5BD',
      '#B0ACA3',
      '#979389',
      '#6B6660',
      '#4A4540',
      '#3A3530',
      '#2D2925',
      '#221F1B',
      '#1A1714',
      '#12100E',
    ],
    // Primary gold/bronze palette (based on #e6c388)
    gold: [
      '#FFF8E7',  // Lightest - backgrounds
      '#FFEEC4',  // Very light
      '#F5DCA4',  // Light
      '#E6C388',  // Base color
      '#D9AD6D',  // Medium
      '#CC9752',  // Darker
      '#B8823A',  // Dark
      '#9A6D2E',  // Very dark
      '#7D5824',  // Deeper
      '#5F421A',  // Darkest
    ],
    // Complementary teal/cyan for contrast
    teal: [
      '#E6F7F7',
      '#B8E9E9',
      '#8ADADA',
      '#5CCBCB',
      '#3BBDBD',
      '#2AA9A9',
      '#1F8F8F',
      '#177575',
      '#0F5B5B',
      '#0A4242',
    ],
    // Earthy green for success states
    sage: [
      '#F0F4EC',
      '#D9E5CC',
      '#C2D6AC',
      '#ABC78C',
      '#94B86C',
      '#7DA94C',
      '#669A3D',
      '#4F7B2E',
      '#385C1F',
      '#213D10',
    ],
    // Deep blue for info/links
    ocean: [
      '#E8F1F8',
      '#C4DBF0',
      '#9FC5E8',
      '#7AAFE0',
      '#5599D8',
      '#3583D0',
      '#286DB0',
      '#1B5790',
      '#0E4170',
      '#072B50',
    ],
    // Warm red for errors/warnings
    terracotta: [
      '#FCF0ED',
      '#F5D4CB',
      '#EDB8A9',
      '#E69C87',
      '#DE8065',
      '#D66443',
      '#B85236',
      '#9A4029',
      '#7C2E1C',
      '#5E1C0F',
    ],
  },

  /** Default border radius for all components */
  defaultRadius: 'md', // xs | sm | md | lg | xl

  /** Font configuration */
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, sans-serif',

  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    fontWeight: 700,
    sizes: {
      h1: { fontSize: '2.125rem', lineHeight: 1.3 },
      h2: { fontSize: '1.625rem', lineHeight: 1.35 },
      h3: { fontSize: '1.375rem', lineHeight: 1.4 },
      h4: { fontSize: '1.125rem', lineHeight: 1.45 },
      h5: { fontSize: '1rem', lineHeight: 1.5 },
      h6: { fontSize: '0.875rem', lineHeight: 1.5 },
    },
  },

  /** Spacing scale (used for margins, paddings, etc.) */
  spacing: {
    xs: '0.625rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '2rem',
  },

  /** Component-specific defaults */
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        shadow: 'sm',
        padding: 'lg',
        radius: 'md',
        withBorder: true,
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    Textarea: {
      defaultProps: {
        radius: 'md',
      },
    },
    Select: {
      defaultProps: {
        radius: 'md',
      },
    },
    MultiSelect: {
      defaultProps: {
        radius: 'md',
      },
    },
  },

  /** Global styles */
  globalStyles: (theme) => ({
    body: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    },
  }),
};

/**
 * Availability badge color mapping
 * Used for color-coding user availability status
 */
export const availabilityColors = {
  'Full-time': 'sage',
  'Part-time': 'ocean',
  'Weekends': 'gold',
  'Evenings': 'teal',
  'Flexible': 'teal',
  'Unavailable': 'gray',
};

/**
 * Color palette reference for components
 * Use these semantic color names throughout the app
 */
export const themeColors = {
  primary: 'gold',       // Primary actions, branding
  success: 'sage',       // Success states, confirmations
  info: 'ocean',         // Information, links
  warning: 'gold',       // Warnings, cautions
  error: 'terracotta',   // Errors, destructive actions
  accent: 'teal',        // Highlights, secondary actions
};

/**
 * Profile completeness calculation
 * Returns a score from 0-100 based on profile fields
 */
export function calculateProfileCompleteness(profile) {
  let score = 0;
  if (profile?.name) score += 20;
  if (profile?.email) score += 20;
  if (profile?.image_url) score += 20;
  if (profile?.bio && profile.bio.length > 50) score += 15;
  if (profile?.skills?.length >= 3) score += 15;
  if (profile?.interests?.length >= 2) score += 10;
  return score;
}
