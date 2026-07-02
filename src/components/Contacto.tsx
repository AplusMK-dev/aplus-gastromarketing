import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="bg-[#FAF9F6] text-black min-h-screen pt-28 md:pt-36 pb-24 font-sans selection:bg-[#B2D3C2] selection:text-black">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="space-y-4 max-w-3xl text-left">
          <span className="font-mono text-xs text-[#4a725e] tracking-[0.25em] block uppercase font-bold">
            [ CONTACTO // CONEXIÓN DIRECTA ]
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl tracking-tight leading-none text-black uppercase">
            HABLEMOS DE TU PROYECTO
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-700 font-light leading-relaxed pt-2">
            El ecosistema HORECA y agroalimentario exige respuestas con criterio, carácter y pulso real del sector. Ponte en contacto con nosotros directamente.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* COLUMNA IZQUIERDA: CONTACTO DIRECTO */}
          <div className="lg:col-span-5 bg-white border border-gray-150 p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="space-y-3 text-left border-b border-gray-100 pb-6">
                <span className="font-mono text-[10px] text-[#4a725e] tracking-widest font-black uppercase">
                  [ CONTACTO DIRECTO ]
                </span>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-black uppercase tracking-tight">
                  Canales de contacto
                </h2>
              </div>

              {/* Contact channels list */}
              <div className="space-y-6 text-left">
                
                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center text-[#4a725e] mt-1">
                    <Mail className="w-4 h-4 text-[#4a725e]" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block">
                      EMAIL PRINCIPAL
                    </span>
                    <a
                      href="mailto:clientes@aplusmk.com"
                      className="font-sans text-base font-bold text-black border-b border-transparent hover:border-black transition-all"
                    >
                      clientes@aplusmk.com
                    </a>
                  </div>
                </div>

                {/* TELEFONO */}
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center text-[#4a725e] mt-1">
                    <Phone className="w-4 h-4 text-[#4a725e]" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block">
                      TELÉFONO DE CONTACTO
                    </span>
                    <a
                      href="tel:+34917324866"
                      className="font-sans text-base font-bold text-black border-b border-transparent hover:border-black transition-all"
                    >
                      917 32 48 66
                    </a>
                  </div>
                </div>

                {/* DIRECCION */}
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center text-[#4a725e] mt-1">
                    <MapPin className="w-4 h-4 text-[#4a725e]" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block">
                      NUESTRA OFICINA
                    </span>
                    <div className="font-sans text-base font-bold text-black leading-tight">
                      C/ Tarragona, 30 Local
                    </div>
                    <div className="font-sans text-sm text-gray-500">
                      28045 Madrid
                    </div>
                  </div>
                </div>

                {/* HORARIO */}
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center text-[#4a725e] mt-1">
                    <Clock className="w-4 h-4 text-[#4a725e]" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block">
                      HORARIO DE ATENCIÓN
                    </span>
                    <div className="space-y-1">
                      <div className="font-sans text-sm text-gray-800 font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4a725e]" />
                        Lunes a jueves de 9:00 a 18:00
                      </div>
                      <div className="font-sans text-sm text-gray-800 font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4a725e]" />
                        Viernes de 9:00 a 14:00
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* OPEN IN GOOGLE MAPS LINK */}
            <div className="pt-8 border-t border-gray-100 flex justify-start">
              <a
                href="https://www.google.com/maps/search/?api=1&query=C/+Tarragona,+30+Local,+28045+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="btn-curtain btn-curtain-black flex items-center gap-2.5 px-9 py-4 font-display font-extrabold text-[13px] tracking-widest uppercase transition-all duration-200 cursor-pointer"
              >
                ABRIR EN GOOGLE MAPS
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: UBICACIÓN Y MAPA EMBEBIDO */}
          <div className="lg:col-span-7 bg-white border border-gray-150 p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-6 text-left h-full flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-[#4a725e] tracking-widest font-black uppercase">
                  [ UBICACIÓN // SEDE CENTRAL ]
                </span>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-black uppercase tracking-tight">
                  Dónde estamos
                </h2>
                <p className="font-sans text-sm md:text-base text-gray-500 font-light leading-relaxed">
                  Tenemos equipo en Madrid y Barcelona, pero nuestras oficinas centrales están en Madrid, muy cerca de Atocha.
                </p>
              </div>

              {/* EMBEDDED GOOGLE MAP */}
              <div className="bg-[#FAF9F6] border border-gray-150 p-1 w-full h-[320px] md:h-[380px] mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5445209798835!2d-3.6961445!3d40.4024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42262cc29df83f%3A0xe54d8721c83fa81b!2sCalle%20de%20Tarragona%2C%2030%2C%2028045%20Madrid!5e0!3m2!1ses!2ses!4v1718712345678!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out"
                  title="Google Maps - Aplus Gastromarketing"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
