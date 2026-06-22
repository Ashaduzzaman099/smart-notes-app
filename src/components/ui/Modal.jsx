export default function Modal({ isOpen, title, message, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-3">{title}</h2>

        <p className="mb-5">{message}</p>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-600 rounded">
            Cancel
          </button>

          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 rounded">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
