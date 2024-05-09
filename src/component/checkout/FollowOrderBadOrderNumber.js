import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";

export default function FollowOrderBadOrderNumber({back = null}) {

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Typography variant="h6" align="center">
          {t("followOrder.badOrderNumber")}
        </Typography>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={back} sx={{ mt: 3, ml: 1 }}>
          {t("followOrder.backToResearchButton")}
        </Button>
      </Box>
    </React.Fragment>
  );
}
