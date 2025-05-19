const theme = {
  colors: {
    primary: "#4F46E5",      // Indigo
    secondary: "#06B6D4",    // Cyan
    accent: "#F59E0B",       // Amber
    background: "#F9FAFB",   // Light gray
    dark: "#111827",         // Dark gray/blue
    light: "#FFFFFF",        // White
    textPrimary: "#1F2937",  // Gray-800
    textSecondary: "#6B7280" // Gray-500
  },

  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif"
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },

  shadows: {
    card: "0 4px 12px rgba(0, 0, 0, 0.1)",
    hover: "0 6px 20px rgba(0, 0, 0, 0.15)"
  },

  borderRadius: {
    sm: "0.375rem",  // rounded-md
    md: "0.5rem",    // rounded-lg
    lg: "1rem",      // rounded-xl
    xl: "1.5rem",    // rounded-2xl
  },

  transitions: {
    default: "all 0.3s ease-in-out"
  }
};

export default theme;
