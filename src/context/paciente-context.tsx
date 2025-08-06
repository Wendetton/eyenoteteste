'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export interface Paciente {
  id: string;
  nome: string;
  arUrl?: string;
  tonoUrl?: string;
  criadoEm: string;
  status: 'ativo' | 'arquivado';
}

interface PacienteContextType {
  pacientes: Paciente[];
  adicionarPaciente: (nome: string) => void;
}

const PacienteContext = createContext<PacienteContextType | undefined>(undefined);

export function PacienteProvider({ children }: { children: ReactNode }) {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  function adicionarPaciente(nome: string) {
    const newPaciente: Paciente = {
      id: Date.now().toString(),
      nome,
      criadoEm: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'ativo'
    };
    setPacientes(prev => [...prev, newPaciente]);
  }

  return (
    <PacienteContext.Provider value={{ pacientes, adicionarPaciente }}>
      {children}
    </PacienteContext.Provider>
  );
}

export function usePacienteContext() {
  const context = useContext(PacienteContext);
  if (!context) {
    throw new Error('usePacienteContext must be used within PacienteProvider');
  }
  return context;
}
