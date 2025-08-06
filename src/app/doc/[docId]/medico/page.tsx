'use client';
import { useState } from 'react';
import { PacienteProvider } from '@/context/paciente-context';
import ListaPacientes from '@/components/ui/pacientes/ListaPacientes';
import ModalCriarPaciente from '@/components/ui/pacientes/ModalCriarPaciente';

export default function MedicoPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <PacienteProvider>
      <div className="min-h-screen p-6 bg-gray-50">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Painel do Médico</h1>
            <p className="text-gray-600 text-sm">Gerencie pacientes e exames.</p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Criar Paciente
          </button>
        </header>
        <main>
          <ListaPacientes />
        </main>
        <ModalCriarPaciente isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </PacienteProvider>
  );
}
