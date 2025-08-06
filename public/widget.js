(function () {
    function showPopup() {
      if (document.querySelector('#app1-popup')) return;
  
      const overlay = document.createElement('div');
      overlay.id = 'app1-popup';
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = '9999';
  
      const popup = document.createElement('div');
      popup.style.background = '#fff';
      popup.style.padding = '0';
      popup.style.borderRadius = '12px';
      popup.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
      popup.style.position = 'relative';
      popup.style.maxWidth = '800px';
      popup.style.width = '90%';
      popup.style.display = 'flex';
      popup.style.overflow = 'hidden';
  
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '&times;';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '15px';
      closeBtn.style.right = '20px';
      closeBtn.style.border = 'none';
      closeBtn.style.background = 'transparent';
      closeBtn.style.fontSize = '28px';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.color = '#333';
      closeBtn.style.zIndex = '10';
  
      closeBtn.onclick = () => {
        overlay.remove();
        const prev = localStorage.getItem('lastValidPath') || '/';
        history.replaceState({}, '', prev);
      };
  
      // Left section - Image and content
      const leftSection = document.createElement('div');
      leftSection.style.flex = '1';
      leftSection.style.background = 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)';
      leftSection.style.padding = '40px 30px';
      leftSection.style.display = 'flex';
      leftSection.style.flexDirection = 'column';
      leftSection.style.justifyContent = 'center';
      leftSection.style.alignItems = 'center';
      leftSection.style.textAlign = 'center';
      leftSection.style.color = '#000';
  
      // Placeholder image
      const imagePlaceholder = document.createElement('div');
      imagePlaceholder.style.width = '120px';
      imagePlaceholder.style.height = '120px';
      imagePlaceholder.style.background = '#000';
      imagePlaceholder.style.borderRadius = '50%';
      imagePlaceholder.style.marginBottom = '20px';
      imagePlaceholder.style.display = 'flex';
      imagePlaceholder.style.alignItems = 'center';
      imagePlaceholder.style.justifyContent = 'center';
      imagePlaceholder.style.fontSize = '48px';
      imagePlaceholder.innerHTML = '💰';
  
      const title = document.createElement('h2');
      title.textContent = 'Start Your Investment Journey';
      title.style.margin = '0 0 15px 0';
      title.style.fontSize = '24px';
      title.style.fontWeight = 'bold';
      title.style.color = '#000';
  
      const subtitle = document.createElement('p');
      subtitle.textContent = 'Join thousands of investors building wealth through smart monthly deposits. Start with just $10/month.';
      subtitle.style.margin = '0';
      subtitle.style.fontSize = '16px';
      subtitle.style.lineHeight = '1.5';
      subtitle.style.color = '#333';
  
      leftSection.appendChild(imagePlaceholder);
      leftSection.appendChild(title);
      leftSection.appendChild(subtitle);
  
      // Right section - Form
      const rightSection = document.createElement('div');
      rightSection.style.flex = '1';
      rightSection.style.background = '#fff';
      rightSection.style.padding = '40px 30px';
      rightSection.style.position = 'relative';
  
      // Step form container
      const formContainer = document.createElement('div');
      formContainer.id = 'step-form-container';
      formContainer.style.height = '100%';
      formContainer.style.display = 'flex';
      formContainer.style.flexDirection = 'column';
  
      // Step indicators
      const stepIndicators = document.createElement('div');
      stepIndicators.style.display = 'flex';
      stepIndicators.style.justifyContent = 'center';
      stepIndicators.style.marginBottom = '30px';
      stepIndicators.style.gap = '10px';
  
      for (let i = 1; i <= 3; i++) {
        const step = document.createElement('div');
        step.className = 'step-indicator';
        step.style.width = '30px';
        step.style.height = '30px';
        step.style.borderRadius = '50%';
        step.style.border = '2px solid #ddd';
        step.style.display = 'flex';
        step.style.alignItems = 'center';
        step.style.justifyContent = 'center';
        step.style.fontSize = '14px';
        step.style.fontWeight = 'bold';
        step.style.color = '#999';
        step.textContent = i;
        
        if (i === 1) {
          step.style.background = '#FFD700';
          step.style.borderColor = '#FFD700';
          step.style.color = '#000';
        }
        
        stepIndicators.appendChild(step);
      }
  
      // Form content
      const formContent = document.createElement('div');
      formContent.id = 'form-content';
      formContent.style.flex = '1';
  
      // Step 1: User Info
      const step1 = document.createElement('div');
      step1.id = 'step-1';
      step1.style.display = 'block';
  
      const step1Title = document.createElement('h3');
      step1Title.textContent = 'Personal Information';
      step1Title.style.margin = '0 0 20px 0';
      step1Title.style.fontSize = '20px';
      step1Title.style.color = '#000';
  
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.placeholder = 'Full Name';
      nameInput.style.width = '100%';
      nameInput.style.padding = '12px';
      nameInput.style.marginBottom = '15px';
      nameInput.style.border = '1px solid #ddd';
      nameInput.style.borderRadius = '6px';
      nameInput.style.fontSize = '14px';
  
      const emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.placeholder = 'Email Address';
      emailInput.style.width = '100%';
      emailInput.style.padding = '12px';
      emailInput.style.marginBottom = '25px';
      emailInput.style.border = '1px solid #ddd';
      emailInput.style.borderRadius = '6px';
      emailInput.style.fontSize = '14px';
  
      const nextBtn1 = document.createElement('button');
      nextBtn1.textContent = 'Next';
      nextBtn1.style.width = '100%';
      nextBtn1.style.padding = '12px';
      nextBtn1.style.background = '#FFD700';
      nextBtn1.style.color = '#000';
      nextBtn1.style.border = 'none';
      nextBtn1.style.borderRadius = '6px';
      nextBtn1.style.fontSize = '16px';
      nextBtn1.style.fontWeight = 'bold';
      nextBtn1.style.cursor = 'pointer';
  
      step1.appendChild(step1Title);
      step1.appendChild(nameInput);
      step1.appendChild(emailInput);
      step1.appendChild(nextBtn1);
  
      // Step 2: Deposit Amount
      const step2 = document.createElement('div');
      step2.id = 'step-2';
      step2.style.display = 'none';
  
      const step2Title = document.createElement('h3');
      step2Title.textContent = 'Deposit Details';
      step2Title.style.margin = '0 0 20px 0';
      step2Title.style.fontSize = '20px';
      step2Title.style.color = '#000';
  
      const amountInput = document.createElement('input');
      amountInput.type = 'number';
      amountInput.placeholder = 'Monthly Amount ($)';
      amountInput.style.width = '100%';
      amountInput.style.padding = '12px';
      amountInput.style.marginBottom = '15px';
      amountInput.style.border = '1px solid #ddd';
      amountInput.style.borderRadius = '6px';
      amountInput.style.fontSize = '14px';
  
      const backBtn2 = document.createElement('button');
      backBtn2.textContent = 'Back';
      backBtn2.style.width = '48%';
      backBtn2.style.padding = '12px';
      backBtn2.style.background = '#f5f5f5';
      backBtn2.style.color = '#333';
      backBtn2.style.border = '1px solid #ddd';
      backBtn2.style.borderRadius = '6px';
      backBtn2.style.fontSize = '16px';
      backBtn2.style.cursor = 'pointer';
      backBtn2.style.marginRight = '4%';
  
      const nextBtn2 = document.createElement('button');
      nextBtn2.textContent = 'Next';
      nextBtn2.style.width = '48%';
      nextBtn2.style.padding = '12px';
      nextBtn2.style.background = '#FFD700';
      nextBtn2.style.color = '#000';
      nextBtn2.style.border = 'none';
      nextBtn2.style.borderRadius = '6px';
      nextBtn2.style.fontSize = '16px';
      nextBtn2.style.fontWeight = 'bold';
      nextBtn2.style.cursor = 'pointer';
  
      step2.appendChild(step2Title);
      step2.appendChild(amountInput);
      step2.appendChild(backBtn2);
      step2.appendChild(nextBtn2);
  
      // Step 3: Payment Options
      const step3 = document.createElement('div');
      step3.id = 'step-3';
      step3.style.display = 'none';
  
      const step3Title = document.createElement('h3');
      step3Title.textContent = 'Payment Method';
      step3Title.style.margin = '0 0 20px 0';
      step3Title.style.fontSize = '20px';
      step3Title.style.color = '#000';
  
      const paymentOptions = document.createElement('div');
      paymentOptions.id = 'payment-options';
      paymentOptions.style.marginBottom = '25px';
  
      // Payment method buttons
      const paymentMethods = [
        { name: 'GPay', icon: '📱', color: '#4285F4' },
        { name: 'Amazon Pay', icon: '🛒', color: '#FF9900' },
        { name: 'Stripe Card', icon: '💳', color: '#6772E5' }
      ];
  
      paymentMethods.forEach((method, index) => {
        const paymentBtn = document.createElement('button');
        paymentBtn.className = 'payment-method';
        paymentBtn.innerHTML = `${method.icon} ${method.name}`;
        paymentBtn.style.width = '100%';
        paymentBtn.style.padding = '15px';
        paymentBtn.style.marginBottom = '10px';
        paymentBtn.style.background = '#f8f9fa';
        paymentBtn.style.color = '#333';
        paymentBtn.style.border = '2px solid #ddd';
        paymentBtn.style.borderRadius = '8px';
        paymentBtn.style.fontSize = '16px';
        paymentBtn.style.cursor = 'pointer';
        paymentBtn.style.transition = 'all 0.3s ease';
  
        paymentBtn.onmouseover = () => {
          paymentBtn.style.background = method.color;
          paymentBtn.style.color = '#fff';
          paymentBtn.style.borderColor = method.color;
        };
  
        paymentBtn.onmouseout = () => {
          paymentBtn.style.background = '#f8f9fa';
          paymentBtn.style.color = '#333';
          paymentBtn.style.borderColor = '#ddd';
        };
  
        paymentBtn.onclick = () => {
          // Remove active class from all buttons
          paymentOptions.querySelectorAll('.payment-method').forEach(btn => {
            btn.style.background = '#f8f9fa';
            btn.style.color = '#333';
            btn.style.borderColor = '#ddd';
          });
          
          // Add active class to selected button
          paymentBtn.style.background = method.color;
          paymentBtn.style.color = '#fff';
          paymentBtn.style.borderColor = method.color;
          
          // Store selected payment method
          window.selectedPaymentMethod = method.name;
          
          // Show Stripe form if Stripe Card is selected
          if (method.name === 'Stripe Card') {
            showStripeForm();
          } else {
            hideStripeForm();
          }
        };
  
        paymentOptions.appendChild(paymentBtn);
      });
  
      // Stripe form container (initially hidden)
      const stripeFormContainer = document.createElement('div');
      stripeFormContainer.id = 'stripe-form-container';
      stripeFormContainer.style.display = 'none';
      stripeFormContainer.style.marginTop = '20px';
      stripeFormContainer.style.padding = '20px';
      stripeFormContainer.style.background = '#f8f9fa';
      stripeFormContainer.style.borderRadius = '8px';
  
      const stripeFormTitle = document.createElement('h4');
      stripeFormTitle.textContent = 'Card Details';
      stripeFormTitle.style.margin = '0 0 15px 0';
      stripeFormTitle.style.fontSize = '16px';
      stripeFormTitle.style.color = '#333';
  
      const cardElement = document.createElement('div');
      cardElement.id = 'card-element';
      cardElement.style.padding = '12px';
      cardElement.style.border = '1px solid #ddd';
      cardElement.style.borderRadius = '6px';
      cardElement.style.background = '#fff';
  
      stripeFormContainer.appendChild(stripeFormTitle);
      stripeFormContainer.appendChild(cardElement);
  
      const backBtn3 = document.createElement('button');
      backBtn3.textContent = 'Back';
      backBtn3.style.width = '48%';
      backBtn3.style.padding = '12px';
      backBtn3.style.background = '#f5f5f5';
      backBtn3.style.color = '#333';
      backBtn3.style.border = '1px solid #ddd';
      backBtn3.style.borderRadius = '6px';
      backBtn3.style.fontSize = '16px';
      backBtn3.style.cursor = 'pointer';
      backBtn3.style.marginRight = '4%';
  
      const submitBtn = document.createElement('button');
      submitBtn.textContent = 'Start Subscription';
      submitBtn.style.width = '48%';
      submitBtn.style.padding = '12px';
      submitBtn.style.background = '#FFD700';
      submitBtn.style.color = '#000';
      submitBtn.style.border = 'none';
      submitBtn.style.borderRadius = '6px';
      submitBtn.style.fontSize = '16px';
      submitBtn.style.fontWeight = 'bold';
      submitBtn.style.cursor = 'pointer';
  
      step3.appendChild(step3Title);
      step3.appendChild(paymentOptions);
      step3.appendChild(stripeFormContainer);
      step3.appendChild(backBtn3);
      step3.appendChild(submitBtn);
  
      formContent.appendChild(step1);
      formContent.appendChild(step2);
      formContent.appendChild(step3);
  
      formContainer.appendChild(stepIndicators);
      formContainer.appendChild(formContent);
  
      rightSection.appendChild(formContainer);
  
      popup.appendChild(closeBtn);
      popup.appendChild(leftSection);
      popup.appendChild(rightSection);
      overlay.appendChild(popup);
      document.body.appendChild(overlay);
  
      // Step navigation logic
      let currentStep = 1;
      const steps = [step1, step2, step3];
      const indicators = stepIndicators.querySelectorAll('.step-indicator');
  
      function updateStep(newStep) {
        steps.forEach((step, index) => {
          step.style.display = index + 1 === newStep ? 'block' : 'none';
        });
  
        indicators.forEach((indicator, index) => {
          if (index + 1 <= newStep) {
            indicator.style.background = '#FFD700';
            indicator.style.borderColor = '#FFD700';
            indicator.style.color = '#000';
          } else {
            indicator.style.background = 'transparent';
            indicator.style.borderColor = '#ddd';
            indicator.style.color = '#999';
          }
        });
  
        currentStep = newStep;
      }
  
      function showStripeForm() {
        stripeFormContainer.style.display = 'block';
        initializeStripe();
      }
  
      function hideStripeForm() {
        stripeFormContainer.style.display = 'none';
      }
  
      // Step navigation event listeners
      nextBtn1.onclick = () => {
        if (nameInput.value.trim() && emailInput.value.trim()) {
          updateStep(2);
        } else {
          alert('Please fill in all fields');
        }
      };
  
      backBtn2.onclick = () => updateStep(1);
      nextBtn2.onclick = () => {
        if (amountInput.value && parseFloat(amountInput.value) > 0) {
          updateStep(3);
        } else {
          alert('Please enter a valid amount');
        }
      };
  
      backBtn3.onclick = () => updateStep(2);
  
      // Stripe integration
      function initializeStripe() {
        // Load Stripe.js if not already loaded
        if (!window.Stripe) {
          const script = document.createElement('script');
          script.src = 'https://js.stripe.com/v3/';
          script.onload = () => {
            setupStripe();
          };
          document.head.appendChild(script);
        } else {
          setupStripe();
        }
      }
  
      function setupStripe() {
        // REPLACE WITH YOUR STRIPE PUBLISHABLE KEY
        // Example: const stripe = Stripe('pk_test_...');
        const stripe = Stripe('pk_test_51O8X8X8X8X8X8X8X8X8X8X8X8X8X8X8X8X8X8X8X8X8X8X');
        const elements = stripe.elements();
        const card = elements.create('card');
        card.mount('#card-element');

        // Optionally, handle real-time validation errors from the card Element.
        card.on('change', function(event) {
          // You can show error messages here if needed
        });

        // Payment Request Button for GPay/Amazon Pay
        const paymentRequest = stripe.paymentRequest({
          country: 'US',
          currency: 'usd',
          total: {
            label: 'Monthly Subscription',
            amount: parseInt(amountInput.value) * 100,
          },
          requestPayerName: true,
          requestPayerEmail: true,
        });

        paymentRequest.canMakePayment().then(function(result) {
          if (result) {
            // Show Payment Request Button if GPay/Amazon Pay is selected
            if (!document.getElementById('payment-request-button')) {
              const prButton = elements.create('paymentRequestButton', {
                paymentRequest: paymentRequest,
                style: {
                  paymentRequestButton: {
                    type: 'default',
                    theme: 'light',
                    height: '44px',
                  },
                },
              });
              const prDiv = document.createElement('div');
              prDiv.id = 'payment-request-button';
              stripeFormContainer.appendChild(prDiv);
              prButton.mount('#payment-request-button');
            }
          }
        });

        // Handle Payment Request events
        paymentRequest.on('paymentmethod', async (ev) => {
          // Here you would create a subscription on your backend and confirm the payment
          // For demo, just complete
          ev.complete('success');
          alert('Payment successful! (Demo)');
        });

        // Handle form submission for Stripe Card
        submitBtn.onclick = async (e) => {
          e.preventDefault();
          if (window.selectedPaymentMethod === 'Stripe Card') {
            // 1. Create a subscription on your backend and get clientSecret
            // 2. Confirm card payment with clientSecret
            // For demo, just show alert
            alert('Stripe Card subscription would be created here (backend required).');
          } else if (window.selectedPaymentMethod === 'GPay' || window.selectedPaymentMethod === 'Amazon Pay') {
            // Payment handled by Payment Request Button
            alert('Use the wallet button above to complete payment.');
          } else {
            alert('Please select a payment method.');
          }
        };
      }

      // Show Stripe form if Stripe Card is selected
      function showStripeForm() {
        stripeFormContainer.style.display = 'block';
        initializeStripe();
      }

      // Hide Stripe form for wallets
      function hideStripeForm() {
        stripeFormContainer.style.display = 'none';
      }
    }

    // Path change logic (unchanged)
    function handlePathChange(path) {
      if (path === '/test') {
        showPopup();
      } else {
        localStorage.setItem('lastValidPath', path);
      }
    }

    // On initial load
    const currentPath = window.location.pathname;
    const lastValid = localStorage.getItem('lastValidPath') || '/';

    if (currentPath === '/test') {
      history.replaceState({}, '', lastValid);
      setTimeout(() => {
        showPopup();
        history.pushState({}, '', '/test');
      }, 100);
    } else {
      localStorage.setItem('lastValidPath', currentPath);
      if (currentPath === '/test') {
        showPopup();
      }
    }

    // Wrap pushState to catch client-side navigations
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      const newPath = args[2];
      if (typeof newPath === 'string') {
        handlePathChange(newPath);
      }
    };

    window.addEventListener('popstate', () => {
      handlePathChange(window.location.pathname);
    });
  })();