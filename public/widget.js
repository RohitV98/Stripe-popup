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
    popup.style.padding = '30px';
    popup.style.borderRadius = '12px';
    popup.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    popup.style.position = 'relative';
    popup.style.maxWidth = '400px';
    popup.style.width = '90%';
    popup.style.textAlign = 'center';

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '15px';
    closeBtn.style.border = 'none';
    closeBtn.style.background = 'transparent';
    closeBtn.style.fontSize = '24px';
    closeBtn.style.cursor = 'pointer';

    closeBtn.onclick = () => {
      overlay.remove();
      const prev = localStorage.getItem('lastValidPath') || '/';
      history.replaceState({}, '', prev);
    };

    const msg = document.createElement('div');
    msg.textContent = '👋 Hello from App1!';
    msg.style.fontSize = '18px';
    msg.style.color = '#333';

    popup.appendChild(closeBtn);
    popup.appendChild(msg);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  }

  function handlePathChange(path) {
    if (path === '/test') {
      showPopup();
    } else {
      // Save the last known valid route
      localStorage.setItem('lastValidPath', path);
    }
  }

  // On initial load
  const currentPath = window.location.pathname;
  const lastValid = localStorage.getItem('lastValidPath') || '/';

  if (currentPath === '/test') {
    // Immediately push back to last known path
    history.replaceState({}, '', lastValid);
    setTimeout(() => {
      showPopup();
      history.pushState({}, '', '/test'); // visually show test
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
