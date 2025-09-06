import { useState, useEffect } from "react";

export default function useOnlineStatus() {
  const [ isOnline, setIsOnline ] = useState(true);

  useEffect(() => {
    function handleOffline() {
      setIsOnline(false);
    }

    function handleOnline() {
      setIsOnline(true);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}
