'use client'

export default function AssistentePage() {
  return (
    <div className="min-h-screen p-6 bg-white">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Painel do Assistente</h1>
        <p className="text-gray-600 text-sm">
          Crie pacientes e envie os exames.
        </p>
      </header>
      <main>
        {/* Aqui virá o formulário de criação e upload no modo Assistente */}
        <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center text-gray-400">
          Interface de envio de exames será exibida aqui.
        </div>
      </main>
    </div>
  )
}
