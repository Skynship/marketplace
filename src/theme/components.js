import { dark, grey } from "./themeColors";
import { fontFamily, fontSize } from "./typography";

// ========================================================

// =========================================================

export const components = {
  MuiCssBaseline: {
    styleOverrides: theme => ({
      html: {
        scrollBehavior: "smooth"
      },
      p: {
        lineHeight: 1.75
      },
      button: {
        fontFamily,
        fontSize
      },
      ".MuiRating-sizeSmall": {
        fontSize: "20px"
      },
      a: {
        textDecoration: "none",
        color: "inherit"
      },
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      "#nprogress .bar": {
        overflow: "hidden",
        height: "3px !important",
        zIndex: "99999999 !important",
        background: `${theme.palette.primary.main} !important`
      }
    })
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        zIndex: 0
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 8
      }
    }
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "25px",
        backgroundColor: '#fffff9'
      }
    }
  },
  MuiPagination: {
    defaultProps: {
      variant: "outlined",
      color: "primary"
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        paddingTop: 8,
        paddingBottom: 8
      }
    }
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        "& .secondary": {
          opacity: 0.4
        }
      }
    }
  },
  MuiAutocomplete: {
      styleOverrides: {
        // Name of the slot
        inputRoot: {
          borderRadius: "20px",
          fontWeight: 600
        }
      }
  },
  MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        notchedOutline: {
          border: "1px solid grey.900",
          fontWeight: 600
        }
      }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "20px",
        fontWeight: 600,
        color: 'grey.900'
      }
    }
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
      variant: "outlined"
    },
    styleOverrides: {
      root: ({
        ownerState
      }) => ({
        ...(ownerState.color === "info" && {
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            fontWeight: 600,
            color: 'grey.900'
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "20px",
            borderColor: 'grey.900',
            color: 'grey.900'
          }
        })
      })
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({
        ownerState
      }) => ({
        minWidth: 0,
        minHeight: 0,
        fontWeight: 800,
        fontSize: '15px',
        textTransform: "capitalize",
        ...(ownerState.color === "primary" && ownerState.variant === 'contained' && {
          borderRadius: '25px',
          padding: '12px 20px'
        }),
        ...(ownerState.color === "primary" && ownerState.variant === "outlined" && {
          borderRadius: '25px',
          padding: '10px 20px',
          border: '1.5px solid #FF2F17',
          backgroundColor: '#fffff9'
        }),
        ...(ownerState.color === "info" && {
          borderRadius: "20px"
        }),
        ...(ownerState.color === "dark" && {
          color: "#fff",
          borderRadius: '20px',
          transition: "all 0.3s",
          ":hover": {
            backgroundColor: "#343434"
          }
        }),
        ...(ownerState.color === "dark" && ownerState.variant === "outlined" && {
          color: dark.main,
          borderRadius: "20px",
          transition: "all 0.3s",
          ":hover": {
            backgroundColor: dark.main,
            color: "white"
          }
        })
      }),
      sizeLarge: {
        padding: ".6rem 2.5rem"
      }
    },
    defaultProps: {
      color: "inherit"
    }
  }
};