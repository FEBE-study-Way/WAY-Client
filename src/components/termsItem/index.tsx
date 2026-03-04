'use client';
import { useState } from 'react';
import { ArrowButton } from '@/assets';
import Modal from '@/components/modal';

interface TermItemProps {
  text: string;
  modalTitle: string;
  modalContent: React.ReactNode;
}

export default function TermItem({ text, modalTitle, modalContent }: TermItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-5 h-5 border border-gray-300 rounded cursor-pointer"
          />
          <span className="body2 text-gray-500">{text}</span>
        </div>
        <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
          <ArrowButton />
        </div>
      </div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} title={modalTitle}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
}
