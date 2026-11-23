import { useState } from "react";
import { useTodos } from "../context/TodoContext.jsx";
import { useRouter } from "../router.jsx";
import TodoFormModal from "../components/TodoFormModal.jsx";
import ConfirmModal from "../components/ConfirmModal.jsx";

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6" />
    </svg>
  );
}

export default function TodoList() {
  const { todos, addTodo, deleteTodo } = useTodos();
  const { navigate } = useRouter();
  const [showAdd, setShowAdd] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  return (
    <main className="container">
      <div className="header">
        <h1 className="title">Todo List</h1>
        <button className="btn btn-blue" onClick={() => setShowAdd(true)}>
          Tambah Todo
        </button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Judul</th>
              <th>Status</th>
              <th>Prioritas</th>
              <th>Deadline</th>
              <th className="center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td className="cell-title" title={todo.title}>
                  {todo.title}
                </td>
                <td>{todo.status}</td>
                <td>{todo.priority}</td>
                <td>{todo.deadline}</td>
                <td>
                  <div className="actions">
                    <button
                      className="btn btn-blue btn-icon"
                      aria-label={`Lihat detail ${todo.title}`}
                      onClick={() => navigate(`/todo/${todo.id}`)}
                    >
                      <EyeIcon />
                    </button>
                    <button
                      className="btn btn-red btn-icon"
                      aria-label={`Hapus ${todo.title}`}
                      onClick={() => setToDelete(todo)}
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {todos.length === 0 && (
          <p className="empty">
            Belum ada tugas. Klik "Tambah Todo" untuk membuat tugas pertama.
          </p>
        )}
      </div>

      {showAdd && (
        <TodoFormModal
          mode="add"
          onClose={() => setShowAdd(false)}
          onSubmit={(data) => {
            addTodo(data);
            setShowAdd(false);
          }}
        />
      )}

      {toDelete && (
        <ConfirmModal
          title="Hapus tugas?"
          message={`Tugas "${toDelete.title}" akan dihapus permanen.`}
          onCancel={() => setToDelete(null)}
          onConfirm={() => {
            deleteTodo(toDelete.id);
            setToDelete(null);
          }}
        />
      )}
    </main>
  );
}