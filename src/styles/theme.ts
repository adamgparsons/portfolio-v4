const theme = {
  breakpoints: ["500px", "850px", "1170px"],
  space: [
    "0px",
    "4px",
    "8px",
    "16px",
    "24px",
    "32px",
    "64px",
    "128px",
    "256px",
    "512px",
  ],
  fontSizes: [
    "12px",
    "16px",
    "20px",
    "24px",
    "36px",
    "48px",
    "80px",
    "96px",
    "128px",
  ],
  borderWidths: [0, "1px", "2px", "4px", "8px", "16px", "32px"],
  radii: [0, "2px", "4px", "16px", "9999px", "100%"],
  lineHeights: ["1.0", "1.25", "1.5"],
  measures: ["20em", "30em", "34em"],
  typeface: "soleil, sans-serif",
  textStyles: {
    heading1: {
      fontFamily: "soleil, sans-serif",
      fontSize: "42px",
      lineHeight: "56px",
      fontWeight: "800",
      color: "#2D3748",
      marginTop: "0px",
      marginBottom: "0px",
    },
    heading2: {
      fontFamily: "soleil, sans-serif",
      fontSize: "36px",
      lineHeight: "48px",
      fontWeight: "800",
      color: "#2D3748",
      marginTop: "0px",
      marginBottom: "0px",
    },
    heading3: {
      fontFamily: "soleil, sans-serif",
      color: "#4A5568",
      fontSize: "24px",
      lineHeight: "28px",
      fontWeight: "800",
    },
    body: {
      fontFamily: "soleil, sans-serif",
      fontSize: "16px",
      lineHeight: "30px",
      fontWeight: "400",
      color: "#4A5568",
      marginTop: "0px",
      marginBottom: "0px",
    },
  },
  colors: {
    grey100: "#F7FAFC",
    grey200: "#EDF2F7",
    grey300: "#E2E8F0",
    grey400: "#CBD5E0",
    grey500: "#A0AEC0",
    grey600: "#718096",
    grey700: "#4A5568",
    grey800: "#2D3748",
    grey900: "#1A202C",
    white0125: "rgba(255,255,255,.0125)",
    brandBlue: "#4E97D0",
    validationRed: "#E53E3E",
    // Dark mode specific colors
    darkColors: {
      background: "#1A202C", // Using grey900
      text: "#F7FAFC", // Using grey100
      secondaryText: "#A0AEC0", // Using grey500
      primaryBackground: "#2D3748", // Using grey800
      secondaryBackground: "#1A202C", // Using grey900
      // Borders and dividers
      border: "#4A5568", // Using grey700
      // Brand colors - might need adjustment for contrast later
      brandBlue: "#4E97D0",
      validationRed: "#E53E3E",
      // Greyscale for dark mode
      grey100: "#1A202C", // Darkest
      grey200: "#2D3748",
      grey300: "#4A5568",
      grey400: "#718096",
      grey500: "#A0AEC0",
      grey600: "#CBD5E0",
      grey700: "#E2E8F0",
      grey800: "#EDF2F7",
      grey900: "#F7FAFC", // Lightest
    },
  },
};

export default theme;
