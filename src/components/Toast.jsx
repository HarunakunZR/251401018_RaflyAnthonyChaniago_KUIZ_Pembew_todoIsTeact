import { useEffect } from "react";
import { useTodos } from "../context/TodoContext.jsx";

export default function Toast() {
  const { toast, clearToast } = useTodos();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(clearToast, 2500);
    return () => clearTimeout(timer);
  }, [toast, clearToast]);

  if (!toast) return null;

  return (
    <div
      role="status"
      className={`toast ${toast.type === "error" ? "toast-error" : "toast-success"}`}
    >
      {toast.message}
    </div>
  );
}