'use client'

import { useState } from 'react'
import { PacienteProvider } from '@/context/paciente-context'
import ListaPacientes from '@/components/ui/pacientes/ListaPacientes'
import ModalCriarPaciente from '@/components/ui/pacientes/ModalCriarPaciente' isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </PacienteProvider>
  )
}
