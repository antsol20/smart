import Typography from "@mui/material/Typography";

export default function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        Split-z.com {new Date().getFullYear()}
      </Typography>
    );
  }