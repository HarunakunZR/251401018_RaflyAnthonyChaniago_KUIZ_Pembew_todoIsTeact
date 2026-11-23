import { useState } from "react";
import { STATUS_OPTIONS, PRIORITY_OPTIONS } from "../data/dummyTodos";

const emptyForm = {
  title: "",
  description: "",
  status: "to-do",
  priority: "low",
  deadline: "",
};

// mode: "add" | "edit"
export default function TodoFormModal({ mode, initial, onClose, onSubmit }) {
  const [form, setForm] = useState(initial ?? emptyForm);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return setError("Judul wajib diisi");
    if (!form.deadline) return setError("Deadline wajib diisi");
    onSubmit({ ...form, title: form.title.trim() });
  };

  const isEdit = mode === "edit";

  return (
    <div className="overlay">
      <form className="modal" onSubmit={handleSubmit}>
        <h2>{isEdit ? "Update Todo" : "Tambah Todo"}</h2>

        <label htmlFor="title">Judul</label>
        <input
          id="title"
          name="title"
          className="input"
          value={form.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Deskripsi</label>
        <textarea
          id="description"
          name="description"
          rows={3}
          className="input"
          value={form.description}
          onChange={handleChange}
        />

        <div className="grid-2">
          <div>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              className="input"
              value={form.status}
              onChange={handleChange}
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="priority">Prioritas</label>
            <select
              id="priority"
              name="priority"
              className="input"
              value={form.priority}
              onChange={handleChange}
            >
              {PRIORITY_OPTIONS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        <label htmlFor="deadline">Deadline</label>
        <input
          id="deadline"
          type="date"
          name="deadline"
          className="input"
          value={form.deadline}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}

        <div className="modal-actions">
          <button type="button" className="btn btn-red" onClick={onClose}>
            Batal
          </button>
          <button type="submit" className="btn btn-blue">
            {isEdit ? "Update" : "Tambah"}
          </button>
        </div>
      </form>
    </div>
  );
}