import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import OrderContext from "../../context/order/OrderContext";
import { useContext } from "react";
import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import FollowOrderReview from "./FollowOrderReview";
import FollowOrderBadOrderNumber from "./FollowOrderBadOrderNumber";

export default function FollowOrder() {
  const [activeStep, setActiveStep] = React.useState(0);

  const orderContext = useContext(OrderContext);
  const { orders } = orderContext;

  function getStepContent(step) {
    switch (step) {
      case 1:
        return <FollowOrderReview back={handleBack} orderNumber={orderNumber}/>;
      case 2:
        return <FollowOrderBadOrderNumber back={handleBackToResearch} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleBackToResearch = () => {
    setActiveStep(activeStep - 2);
  };

  const { t } = useTranslation();

  const [orderNumber, setOrderNumber] = useState("")

  const onChangeOrderNumber = (e) => {
    e.preventDefault();
    setOrderNumber(e.target.value)
  }

  const verifyOrder = () => {
    let isOrderExist = orders.some((order) => order.current_order_number === orderNumber)
    setActiveStep(isOrderExist? 1 : 1)
  }
  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            {t("followOrder.titleFollowOrder")}
          </Typography>
          {activeStep === 0 ? (
            <React.Fragment>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="orderNumber"
                  label={t("followOrder.followOrderNumber")}
                  fullWidth
                  autoComplete="orderNumber"
                  name="orderNumber"
                  variant="standard"
                  value={orderNumber}
                  onChange={onChangeOrderNumber}
                />
              </Grid>
              <Button onClick={verifyOrder} sx={{ mt: 3, ml: 1 }}>
                {t("followOrder.searchOrder")}
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
