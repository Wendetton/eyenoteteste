'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function AssistentePacientePage() {
  const { patientId } = useParams<{ docId: string; patientId: string }>()
  const [file, setFile] = useState<File | null>(null)

  const handleUpload = async () => {
    if (!file) return
    // Lógica de upload para Firebase Storage ou Vercel Blob
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Enviar exames para paciente</h1>
      <input
        type="file"
        accept="image/*"
        onChange={e => setFile(e.target.files?.[0] || null)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleUpload}
        disabled={!file}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
      >
        Enviar
      </button>
    </div>
}
