import { Card, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { AuthorisedPage } from "../pages/AuthorisedPage";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const FAQs = () => {
  return (
    <>
      <AuthorisedPage>
        <Header />

        <Container >
          <Typography variant="h4">Frequently Asked Questions</Typography>
          <Card  sx={{height: "100%", paddingTop: "8px"}}>
            <Typography variant="h5">GENERAL</Typography>
            <Typography variant="h6">
              How do I contact customer service?
            </Typography>
            <Typography paragraph>
              Customer service can only be reached via email. Please contact
              info@ghiblicollection.com.
            </Typography>
            <Typography>
              Customer service is available 9 a.m. to 5 p.m., Monday through
              Friday [Pacific Time]. Customer service is not available on
              weekends or major holidays.
            </Typography>
          </Card>
          <Card>
            <Typography variant="h6">
              How do I create an account on your site?
            </Typography>
            <Typography paragraph>
              What are your shipping options and how much do they cost? We offer
              standard and expedited shipping. The cost of shipping is
              determined by the dollar value of your cart. Please note that even
              if the value of your cart is zero dollars, shipping costs will
              still apply. If your order is over a certain weight it will be
              upgraded to ship via Federal Express™. If we are delivering to a
              residential address, your order will ship via FedEx Home
              Delivery®, which only delivers Tuesday through Saturday (no Monday
              deliveries).
            </Typography>
          </Card>
          <Card>
            <Typography variant="h6">
              When will I be charged for my order?
            </Typography>
            <Typography>
              As of January 9, 2019, when you place an order, you will be
              charged immediately. Please note that all charges will appear on
              your credit card/PayPal/Amazon Pay billing statement as being
              charged to "SHOUT! FACTORY." For orders placed before on or before
              January 8, 2019, please note the following: If you use PayPal,
              your account will be charged immediately upon order. Please be
              aware that many banks will freeze funds when you make a purchase
              with a debit card. For this reason, we do not recommend placing
              pre-orders with a debit card. If you use a credit card or Amazon
              Pay, you will be preauthorized for the purchase amount when you
              place your order. This preauthorization will appear as a “pending”
              charge on your billing statement, and will fall off that statement
              in accordance to your credit card company’s policies. If your
              order includes any pre-orders, you will see an additional
              preauthorization on your billing statement when we are ready to
              ship those pre-orders. Your card will only be charged when an item
              has been confirmed as shipped by our warehouse. If your credit
              card account has been closed, your card has been reported lost or
              stolen, or your authorization does not clear, you will receive an
              email notifying you that your order has been cancelled. Once you
              have received this email you will have to create a new order.
              Please note that all charges will appear on your credit
              card/PayPal/Amazon Pay billing statement as being charged to
              "SHOUT! FACTORY."
            </Typography>
          </Card>
        </Container>
        <Footer />
      </AuthorisedPage>
    </>
  );
};
