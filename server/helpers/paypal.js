const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AQjbfwjef-aqWnsJJ9nQP_KE8-FWsYzJKA9RLXZYpZRPUCCyRyGMHr4R5XlQb9DiWpQu9YsY0SuUR3rx",
  client_secret: "EHN7eWS_pGvJ5bwgutHd-gd498smyr6TpVDqP-VoQsTiTKPq3IM5ZvwNyGSyXEsFX2DMCF53GVhICicS",
});

module.exports = paypal;
