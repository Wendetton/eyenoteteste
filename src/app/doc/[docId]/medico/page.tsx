'use client'

import ListaPacientes from '@/components/pacientes/ListaPacientes'

export default function MedicoPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Painel do Médico</h1>
        <p className="text-gray-600 text-sm">
          Gerencie os pacientes e acompanhe os exames aqui.
        </p>
      </header>
      <main>
        <ListaPacientes />
      </main>
    </div>
  )
}
