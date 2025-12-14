import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-[#F0F2F5] min-h-screen font-['Poppins'] flex items-center justify-center p-4">
      <main className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="relative">
          <div 
            className="h-44 bg-cover bg-center" 
            style={{ 
              backgroundImage: 'url("https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/13/afee2fee-9626-4260-bc4e-179bfb17af11.png")',
              height: '176px',
              width: '100%'
            }}
          >
            <div className="h-full bg-black/50 flex flex-col justify-center items-center text-center px-4">
              <p className="text-sky-400 font-bold text-sm tracking-widest uppercase">
                IA criada exclusivamente para
              </p>
              <h1 className="text-white text-4xl font-black tracking-wider uppercase">
                Imobiliárias
              </h1>
            </div>
          </div>
          {/* Overlapping Info Box */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-11/12">
            <div className="bg-white px-4 py-3 rounded-lg shadow-lg text-center">
              <p className="text-gray-700 font-semibold text-[13px]">
                A IA que atende seus leads de aluguel 24h e transforma conversas
                em visitas
              </p>
            </div>
          </div>
        </div>
        
        {/* Dotted separator */}
        <div className="border-t-2 border-dotted border-gray-300 mt-[-1px]"></div>
        
        {/* Content Section */}
        <div className="px-6 pt-12 pb-6">
          {/* Paragraph */}
          <p className="text-gray-600 text-center text-[13px] mb-6 leading-relaxed">
            A Aluga+ é uma inteligência artificial criada para imobiliárias que
            querem escalar locações e vendas sem aumentar a equipe. Ela responde
            em segundos, faz as perguntas certas, filtra curiosos e organiza os
            leads para você focar apenas no fechamento.
          </p>
          
          {/* Form */}
          <div>
            <h3 className="font-bold text-gray-800 text-center mb-4 text-base">
              Deixe seus dados para conhecer a IA da Aluga+
            </h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Digite seu nome" 
                className="w-full px-5 py-3 bg-gray-100 rounded-full text-gray-700 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <input 
                type="text" 
                placeholder="Digite seu melhor WhatsApp" 
                className="w-full px-5 py-3 bg-gray-100 rounded-full text-gray-700 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <input 
                type="text" 
                placeholder="Digite o nome da sua imobiliária" 
                className="w-full px-5 py-3 bg-gray-100 rounded-full text-gray-700 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <button 
                type="submit" 
                className="w-full mt-2 bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm cursor-pointer"
              >
                QUERO CONHECER A IA DE ALUGUEL
              </button>
            </form>
          </div>
          
          {/* Disclaimer */}
          <p className="text-center text-xs text-gray-400 mt-6 px-4">
            Prometemos não usar nenhuma informação de contato para enviar
            qualquer tipo de SPAM. Os dados são protegidos.
          </p>
        </div>
      </main>
    </div>
  );
}