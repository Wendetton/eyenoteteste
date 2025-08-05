'use client'

import { useState } from 'react'
import { usePacienteContext } from '@/context/paciente-context'

export default function ModalCriarPaciente({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [nome, setNome] = useState('')
  const { adicionarPaciente } = usePacienteContext()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Criar Novo Paciente</h2>
        <input
          type="text"
          placeholder="Nome do paciente"
          className="w-full border p-2 rounded mb-4"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200">Cancelar</button>
          <button
            onClick={() => {
              if (nome.trim()) {
                adicionarPaciente(nome.trim())
                setNome('')
                onClose()
              }
            }}
            className="px-4 py-2 rounded bg-blue-500 text-white"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}
