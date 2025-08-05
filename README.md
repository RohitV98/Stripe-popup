# Stripe Donation Widget

A modern, embeddable donation widget that allows users to set up monthly recurring donations using Stripe Checkout.

## Features

- 💰 **Custom Amount Selection**: Users can choose any monthly donation amount
- 🔄 **Monthly Subscriptions**: Automatic recurring monthly payments
- 🔒 **Secure Payments**: Powered by Stripe Checkout
- 📧 **Email Management**: Users receive confirmation and can manage subscriptions via email
- 🎨 **Modern UI**: Clean, responsive design
- 📱 **Mobile Friendly**: Works seamlessly on all devices

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Stripe

Set your Stripe environment variables:

```bash
export STRIPE_SECRET_KEY="sk_test_your_secret_key"
export STRIPE_PUBLISHABLE_KEY="pk_test_your_publishable_key"
```

For production, use your live keys instead of test keys.

### 3. Start the Server

```bash
npm start
```

The server will run on `http://localhost:3000`

## Usage

### Demo Page

Visit `http://localhost:3000` to see the demo page with the donation widget.

### Embedding the Widget

To embed the widget on any website:

1. Include the widget script:
```html
<script src="http://localhost:3000/widget.js"></script>
```

2. Add a button to trigger the popup:
```html
<button onclick="openDonationPopup()">Start Monthly Donation</button>
```

### API Endpoints

- `POST /api/create-plan` - Creates a Stripe plan for the specified amount
- `POST /api/create-subscription` - Creates a subscription and returns Stripe Checkout URL
- `GET /subscription-success` - Thank you page shown after successful payment
- `GET /subscription-cancelled` - Page shown when payment is cancelled

## How It Works

1. **User clicks donation button** → Popup opens with amount and email form
2. **User enters amount and email** → Form validates input
3. **Server creates Stripe plan** → Dynamically creates a plan for the custom amount
4. **Server creates subscription** → Creates a Stripe Checkout session
5. **User redirected to Stripe** → Completes payment securely on Stripe's servers
6. **Success/cancel redirect** → User returns to appropriate thank you page

## Customization

### Styling

The widget uses inline styles for easy embedding. To customize the appearance, modify the styles in `public/widget.js`.

### Amount Validation

Default minimum amount is $1. Modify the validation in the `createDonationForm()` function.

### Success/Cancel Pages

Customize the thank you and cancellation pages by editing the routes in `server.js`.

## Security Considerations

- Always use HTTPS in production
- Validate all user inputs on the server
- Use environment variables for sensitive keys
- Implement rate limiting for production use
- Add CSRF protection for production deployments

## Production Deployment

1. Set up environment variables for production Stripe keys
2. Use a proper database instead of in-memory plan storage
3. Add logging and monitoring
4. Implement proper error handling
5. Add webhook handling for subscription events
6. Set up SSL/TLS certificates

## Troubleshooting

### Common Issues

1. **Stripe keys not set**: Ensure `STRIPE_SECRET_KEY` is properly set
2. **CORS issues**: The widget is designed to be embedded cross-origin
3. **Plan creation fails**: Check Stripe dashboard for plan limits
4. **Checkout not loading**: Verify Stripe account is properly configured

### Debug Mode

Add console logging by modifying the widget to include more detailed error messages.

## License

MIT License - feel free to use this code for your own projects. 