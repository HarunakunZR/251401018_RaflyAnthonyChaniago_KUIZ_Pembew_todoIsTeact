import { useState } from "react";
import { useTodos } from "../context/TodoContext.jsx";
import { useRouter } from "../router.jsx";
import TodoFormModal from "../components/TodoFormModal.jsx";

export default function TodoDetail({ id }) {
  const { navigate } = useRouter();
  const { todos, updateTodo } = useTodos();
  const [showEdit, setShowEdit] = useState(false);

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return (
      <main className="detail-page column">
        <p style={{ fontSize: 14, color: "#4b5563" }}>Tugas tidak ditemukan.</p>
        <button className="btn btn-red" onClick={() => navigate("/")}>
          Kembali
        </button>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <section className="detail-card">
        <div>
          <h3>Judul</h3>
          <p>{todo.title}</p>
          <h3>Deskripsi</h3>
          <div className="desc-box">{todo.description || "-"}</div>
        </div>

        <div>
          <h3>Status</h3>
          <p>{todo.status}</p>
          <h3>Prioritas</h3>
          <p>{todo.priority}</p>
          <h3>Deadline</h3>
          <p>{todo.deadline}</p>
          <div className="detail-actions">
            <button className="btn btn-red" onClick={() => navigate("/")}>
              Kembali
            </button>
            <button className="btn btn-blue" onClick={() => setShowEdit(true)}>
              Update
            </button>
          </div>
        </div>
      </section>

      {showEdit && (
        <TodoFormModal
          mode="edit"
          initial={{
            title: todo.title,
            description: todo.description,
            status: todo.status,
            priority: todo.priority,
            deadline: todo.deadline,
          }}
          onClose={() => setShowEdit(false)}
          onSubmit={(data) => {
            updateTodo(todo.id, data);
            setShowEdit(false);
          }}
        />
      )}
    </main>
  );
}