const formSx = {
  mx: "auto",
  flexGrow: 1,
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      borderWidth: "1.5px",
    },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& fieldset": {
      borderColor: "white",
      borderWidth: "1.5px",
    },
  },
  "& .MuiInputBase-formControl": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "#606060",
  },
  "& .MuiOutlinedInput-root:focus-within": {
    "& fieldset": {
      borderColor: "white",
      borderWidth: "1.5px",
    },
  },
  ".MuiSelect-icon": {
    color: "white",
  },
};

const timeSx = {
  mx: "auto",
  flexGrow: 1,
};

export { formSx, timeSx };
