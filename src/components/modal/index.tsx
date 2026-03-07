import XButton from '@/assets/svg/XButton';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
  width?: string;
  height?: string;
}

export default function Modal({
  children,
  onClose,
  title,
  width = '800px',
  height = '600px',
}: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700/30 z-50">
      <div className="bg-white-100 rounded-3xl px-8 py-8 flex flex-col" style={{ width, height }}>
        <div className="flex items-center justify-between mb-6">
          {title && <h2 className="h2 text-gray-700">{title}</h2>}
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-400 hover:text-gray-600 ml-auto"
          >
            <XButton />
          </button>
        </div>
        <div className="overflow-y-auto flex-1 pr-2">{children}</div>
      </div>
    </div>
  );
}
