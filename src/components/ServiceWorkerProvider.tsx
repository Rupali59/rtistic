"use client";

import { useEffect } from "react";
import { registerServiceWorker } from "@/lib/serviceWorker";

interface ServiceWorkerProviderProps {
  children: React.ReactNode;
}

export default function ServiceWorkerProvider({
  children,
}: ServiceWorkerProviderProps) {
  useEffect(() => {
    // Only register service worker in production
    if (process.env.NODE_ENV === "production") {
      registerServiceWorker();
    }
  }, []);

  return <>{children}</>;
}
