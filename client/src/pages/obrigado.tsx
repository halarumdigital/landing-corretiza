import React from "react";

export default function ObrigadoPage() {
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
        </div>

        {/* Dotted separator */}
        <div className="border-t-2 border-dotted border-gray-300 mt-[-1px]"></div>

        {/* Content Section */}
        <div className="px-6 py-12">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Thank you message */}
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Obrigado pelo seu interesse na Aluga+
          </h2>

          <p className="text-gray-600 text-center text-[14px] leading-relaxed">
            Em breve nosso consultor especializado em imobiliárias irá entrar em
            contato através do WhatsApp informado.
          </p>

          {/* Disclaimer */}
          <p className="text-center text-xs text-gray-400 mt-8 px-4">
            Fique atento ao seu WhatsApp! Nosso time entrará em contato em até 24h.
          </p>
        </div>
      </main>
    </div>
  );
}
