export default function ConfirmModal({ title, message, onCancel, onConfirm }) {
  return (
    <div className="overlay">
      <div className="modal modal-sm">
        <h2>{title}</h2>
        <p className="msg">{message}</p>
        <div className="modal-actions">
          <button className="btn btn-gray" onClick={onCancel}>
            Batal
          </button>
          <button className="btn btn-red" onClick={onConfirm}>
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}