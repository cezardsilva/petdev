"use clinet"

import useEmblaCaroussel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react'

const services = [
    {
        title: "Consulta Veterinária",
        description: "Oferecemos atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnõstico de doenças, aplicação de vacinas obrigatórias.",
        duraction: "1h",
        price: "$45",
        icon: <Syringe />,
        linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'    
    },

    {
        title: "Táxi Pet",
        description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para lovomover os animais.",
        duraction: "2h",
        price: "$80",
        icon: <CarTaxiFront />,
        linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'    
    },


    {
        title: "Hotel para pet",
        description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
        duraction: "1h",
        price: "$60",
        icon: <Hotel />,
        linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'    
    },
]


export function Services() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                    <h2 className="text-4xl font-bold mb-12">Serviços</h2>

                    <div className="relative">

                    </div>

            </div>

        </section>
    )
}