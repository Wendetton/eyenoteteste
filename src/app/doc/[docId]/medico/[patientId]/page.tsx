'use client';
import { useParams } from 'next/navigation';
import { usePacienteContext, Paciente } from '@/context/paciente-context';
import { useState, useEffect } from 'react';

export default function PacientePage() {
  const { patientId } = useParams<{ docId: string; patientId: string }>();
  const { pacientes } = usePacienteContext();
  const [paciente, setPaciente] = useState<Paciente | null>(null);

  useEffect(() => {
    const found = pacientes.find(p => p.id === patientId);
    setPaciente(found ?? null);
  }, [pacientes, patientId]);

  if (!paciente) return <p>Paciente não encontrado.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{paciente.nome}</h1>
      {/* Editor colaborativo existente */}

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Exames</h2>
        {/* Painel de abas Tono / AR e visualizador de imagens */}
      </section>
    </div>
  );
}
