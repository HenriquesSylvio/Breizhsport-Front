const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/create-checkout-session', async(req, res) =>{
  try {
    const session = await stripe.checkout.sessions.create({
    
      line_items: req.body.lineItems,
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: 'http://localhost:3000/checkout/3',
      cancel_url: 'http://localhost:3000/checkout/4'
    })
    return res.status(201).json(session)
    
  } catch( error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser 
      // and an instance of http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error else', error.message);
    }
   
  }/*
  catch (error) {

    
    return res.status(500).json(error.response.data)
  }*/
})

app.listen(process.env.PORT, () => console.log('server is running successfully'))