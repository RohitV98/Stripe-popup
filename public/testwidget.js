(function () {
  const POPUP_ID = 'app1-popup';
  let isPopupVisible = false;

  function createPopup() {
    if (document.querySelector(`#${POPUP_ID}`)) return;

    const overlay = document.createElement('div');
    overlay.id = POPUP_ID;
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;

    const popup = document.createElement('div');
    popup.style.backgroundColor = '#fff';
    popup.style.padding = '24px';
    popup.style.borderRadius = '12px';
    popup.style.position = 'relative';
    popup.style.maxWidth = '400px';
    popup.style.textAlign = 'center';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '16px';
    closeBtn.style.border = 'none';
    closeBtn.style.background = 'transparent';
    closeBtn.style.fontSize = '24px';
    closeBtn.style.cursor = 'pointer';

    closeBtn.onclick = () => {
      closePopup();
    };

    const content = document.createElement('div');
    content.textContent = '👋 Hello from App1!';
    content.style.fontSize = '18px';

    popup.appendChild(closeBtn);
    popup.appendChild(content);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    isPopupVisible = true;
  }

  function closePopup() {
    const existing = document.querySelector(`#${POPUP_ID}`);
    if (existing) existing.remove();
    isPopupVisible = false;
    history.replaceState({}, '', '/'); // Go back to home in URL
  }

  function openPopupFlow() {
    if (isPopupVisible) return;

    // Replace current route with /
    if (window.location.pathname === '/test') {
      history.replaceState({}, '', '/');

      // Wait a tick and then show popup + set URL to /test
      setTimeout(() => {
        createPopup();
        history.pushState({}, '', '/test');
      }, 10);
    }
  }

  // Handle first load
  if (window.location.pathname === '/test') {
    openPopupFlow();
  }

  // Handle client-side routing: pushState
  const originalPushState = history.pushState;
  history.pushState = function (state, title, url) {
    originalPushState.apply(this, arguments);
    if (url === '/test') openPopupFlow();
  };

  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    if (window.location.pathname === '/test') {
      openPopupFlow();
    } else {
      closePopup();
    }
  });
})();
