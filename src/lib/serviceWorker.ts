/**
 * Service Worker Registration Utility
 * Handles registration and updates of the service worker
 */

export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        
        console.log('Service Worker registered successfully:', registration.scope);

        // Handle service worker updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New service worker is available
                console.log('New service worker available');
                
                // Show update notification to user
                showUpdateNotification();
              }
            });
          }
        });

        // Handle service worker messages
        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data && event.data.type === 'CACHE_UPDATED') {
            console.log('Cache updated:', event.data.payload);
          }
        });

      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    });
  }
}

/**
 * Show update notification to user
 */
function showUpdateNotification() {
  // Create a simple notification
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-gold-start text-ivory-white p-4 rounded-lg shadow-lg z-50 max-w-sm';
  notification.innerHTML = `
    <div class="flex items-start space-x-3">
      <div class="flex-shrink-0">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="text-sm font-medium">Update Available</h3>
        <p class="text-sm mt-1">A new version of the app is available.</p>
        <div class="mt-3 flex space-x-2">
          <button 
            id="update-btn" 
            class="bg-ivory-white text-gold-start px-3 py-1 rounded text-xs font-medium hover:bg-opacity-90 transition-colors"
          >
            Update
          </button>
          <button 
            id="dismiss-btn" 
            class="text-ivory-white hover:text-opacity-80 text-xs font-medium transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(notification);

  // Handle update button click
  const updateBtn = notification.querySelector('#update-btn');
  const dismissBtn = notification.querySelector('#dismiss-btn');

  updateBtn?.addEventListener('click', () => {
    // Reload the page to use the new service worker
    window.location.reload();
  });

  dismissBtn?.addEventListener('click', () => {
    notification.remove();
  });

  // Auto-dismiss after 10 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 10000);
}

/**
 * Unregister service worker (for development)
 */
export function unregisterServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
        console.log('Service Worker unregistered');
      });
    });
  }
}

/**
 * Check if service worker is supported
 */
export function isServiceWorkerSupported(): boolean {
  return typeof window !== 'undefined' && 'serviceWorker' in navigator;
}

/**
 * Get service worker registration
 */
export async function getServiceWorkerRegistration() {
  if (isServiceWorkerSupported()) {
    return await navigator.serviceWorker.getRegistration();
  }
  return null;
}
