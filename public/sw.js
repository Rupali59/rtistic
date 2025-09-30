// Service Worker for RTistic Portfolio
// This service worker provides caching for better performance and offline functionality

const CACHE_NAME = "rtistic-v1";
const STATIC_CACHE_URLS = [
  "/",
  "/images/logo.jpeg",
  "/images/art1.jpeg",
  "/images/art2.jpeg",
  "/images/art3.jpeg",
  "/images/art4.jpeg",
  "/images/art5.jpeg",
  "/images/art6.jpeg",
  "/images/art7.jpeg",
  "/images/art8.jpeg",
  "/images/art9.jpeg",
  "/images/art10.jpeg",
];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Service Worker: Caching static assets");
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => {
        console.log("Service Worker: Installation complete");
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error("Service Worker: Installation failed", error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...");

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("Service Worker: Deleting old cache", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log("Service Worker: Activation complete");
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith("http")) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached version if available
      if (cachedResponse) {
        console.log("Service Worker: Serving from cache", event.request.url);
        return cachedResponse;
      }

      // Otherwise fetch from network
      console.log("Service Worker: Fetching from network", event.request.url);
      return fetch(event.request)
        .then((response) => {
          // Don't cache non-successful responses
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          // Clone the response for caching
          const responseToCache = response.clone();

          // Cache the response for future use
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch((error) => {
          console.error("Service Worker: Fetch failed", error);

          // Return offline page for navigation requests
          if (event.request.destination === "document") {
            return caches.match("/");
          }

          throw error;
        });
    })
  );
});

// Background sync for contact form submissions
self.addEventListener("sync", (event) => {
  if (event.tag === "contact-form-sync") {
    console.log("Service Worker: Background sync triggered");
    event.waitUntil(
      // Handle offline form submissions here
      handleOfflineFormSubmissions()
    );
  }
});

// Handle offline form submissions
async function handleOfflineFormSubmissions() {
  try {
    // Get stored form data from IndexedDB
    const formData = await getStoredFormData();

    if (formData && formData.length > 0) {
      console.log("Service Worker: Processing offline form submissions");

      for (const data of formData) {
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            console.log("Service Worker: Offline submission successful");
            // Remove from storage
            await removeStoredFormData(data.id);
          }
        } catch (error) {
          console.error("Service Worker: Failed to submit offline form", error);
        }
      }
    }
  } catch (error) {
    console.error("Service Worker: Error handling offline submissions", error);
  }
}

// IndexedDB helpers for offline form storage
async function getStoredFormData() {
  // Implementation would depend on your IndexedDB setup
  // This is a placeholder for the actual implementation
  return [];
}

async function removeStoredFormData(id) {
  // Implementation would depend on your IndexedDB setup
  // This is a placeholder for the actual implementation
}

// Push notification handling (for future use)
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json();
    console.log("Service Worker: Push notification received", data);

    const options = {
      body: data.body,
      icon: "/images/logo.jpeg",
      badge: "/images/logo.jpeg",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey,
      },
      actions: [
        {
          action: "explore",
          title: "Explore",
          icon: "/images/logo.jpeg",
        },
        {
          action: "close",
          title: "Close",
          icon: "/images/logo.jpeg",
        },
      ],
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// Notification click handling
self.addEventListener("notificationclick", (event) => {
  console.log("Service Worker: Notification clicked");

  event.notification.close();

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/"));
  }
});
