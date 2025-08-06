'use client';
import React from 'react';
import { Paciente } from '@/context/paciente-context';

export default function PacienteCard({ paciente }: { paciente: Paciente }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition">
      <h2 className="font-bold text-lg">{paciente.nome}</h2>
      <p className="text-sm text-gray-500 mt-1">Criado às {paciente.criadoEm}</p>
      <div className="mt-2 text-sm text-gray-700 space-y-1">
        <p>AR: {paciente.arUrl ? '✅' : '❌'}</p>
        <p>Tono: {paciente.tonoUrl ? '✅' : '❌'}</p>
      </div>
    </div>
  );
}
