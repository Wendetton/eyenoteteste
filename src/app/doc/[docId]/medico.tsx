'use client'

export default function MedicoPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Painel do Médico</h1>
        <p className="text-gray-600 text-sm">Gerencie os pacientes e acompanhe os exames aqui.</p>
      </header>

      <main>
        {/* Aqui futuramente virá a lista de pacientes ativos */}
        <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center text-gray-400">
          Lista de pacientes será exibida aqui.
        </div>
      </main>
    </div>
  )
}
