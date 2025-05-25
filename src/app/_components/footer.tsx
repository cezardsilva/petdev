import Image from "next/image";
import royal from "../../../public/royal.png";
import golden from "../../../public/golden.png";
import primier from "../../../public/primier.png";
import natural from "../../../public/natural.png";
import whiskas from "../../../public/whiskas.png";
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr";

const brands = [
    {name: "Royal Canin", logo: royal},
    {name: "Golden", logo: golden},
    {name: "Primier", logo: primier},
    {name: "Formula Natural", logo: natural},
    {name: "Whiskas", logo: whiskas},
    {name: "Golden", logo: golden},
]

export function Footer() {
    return (
        <section className="bg-[#E84c3D] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center">Marcas que trabalhamos</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}
                                    className="object-contain w-32 h-16"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
                        <p className="mb-4">Cuidado do seu melhor amigo com amor e dedicação.</p>
                        <a
                            href="#"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                            <WhatsappLogoIcon className='w-5 h-5' />
                            Contato via WhatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
                        <p><a href="mailto:teste@teste.com" target="_blank">Email: teste@teste.com</a></p>
                        <p><a href="tel: +552112341234567" target="_blank">Telefone: (21) 12341234567</a></p>
                        <p><a href="googlemaps://?q=Rua+Qualquer,+numero,+Bairro,+Rio+de+Janeiro,+RJ" target="_blank">Rua x, Centro, Rio de Janeiro - RJ</a></p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                            >
                                <FacebookLogoIcon className="w-8 h-8"/>
                            </a>

                            <a
                                href="#"
                            >
                                <InstagramLogoIcon className="w-8 h-8"/>
                            </a>

                            <a
                                href="#"
                            >
                                <YoutubeLogoIcon className="w-8 h-8"/>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
            
        </section>

    )
}