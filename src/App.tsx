import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Scale, 
  Database, 
  Search, 
  Edit, 
  Trash, 
  Ban, 
  Share2, 
  AlertTriangle, 
  Building2, 
  Coins,
  CheckCircle2,
  Info
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('derechos');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200">
      
      {/* HEADER / HERO SECTION */}
      <header className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-900 text-white py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10">
          <div className="bg-blue-500/20 p-4 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30">
            <Shield size={64} className="text-blue-300" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Nueva Ley de Protección de Datos
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl font-light">
            Todo lo que necesitas saber sobre la actualización de la Ley 19.628 en Chile y cómo protege tu privacidad en la era digital.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Estándar GDPR Internacional
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 -mt-10 relative z-20">
        
        {/* INTRO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <Scale className="text-indigo-600 mb-4" size={32} />
            <h3 className="text-lg font-bold mb-2">Modernización</h3>
            <p className="text-slate-600 text-sm">
              Actualiza la normativa de 1999 para adaptarla a los estándares internacionales (como el GDPR europeo), otorgando mayor control a los ciudadanos.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <Lock className="text-indigo-600 mb-4" size={32} />
            <h3 className="text-lg font-bold mb-2">Consentimiento Explícito</h3>
            <p className="text-slate-600 text-sm">
              El tratamiento de datos ahora requiere un consentimiento libre, informado y específico. El silencio ya no constituye aceptación.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <Database className="text-indigo-600 mb-4" size={32} />
            <h3 className="text-lg font-bold mb-2">Datos Sensibles</h3>
            <p className="text-slate-600 text-sm">
              Mayor protección para datos biométricos, de salud, perfilamiento ideológico y de menores de edad.
            </p>
          </div>
        </div>

        {/* MAIN TABS */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-16">
          <div className="flex flex-col sm:flex-row border-b border-slate-100">
            <button 
              onClick={() => setActiveTab('derechos')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${activeTab === 'derechos' ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Derechos ARCOP
            </button>
            <button 
              onClick={() => setActiveTab('agencia')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${activeTab === 'agencia' ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Nueva Agencia
            </button>
            <button 
              onClick={() => setActiveTab('multas')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${activeTab === 'multas' ? 'bg-red-50 text-red-700 border-b-2 border-red-600' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Infracciones y Multas
            </button>
          </div>

          <div className="p-8">
            {/* TAB: DERECHOS ARCOP */}
            {activeTab === 'derechos' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <Shield size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Tus Nuevos Derechos (ARCOP)</h2>
                </div>
                <p className="text-slate-600 mb-8 max-w-4xl">
                  La nueva ley consagra los derechos ARCO tradicionales y añade el derecho a la portabilidad y decisiones automatizadas. Como titular, tú eres el dueño de tu información.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <RightCard 
                    icon={<Search size={24} />} 
                    title="Acceso" 
                    desc="Derecho a saber qué datos tuyos tienen las empresas, de dónde los obtuvieron y para qué los usan."
                    color="bg-blue-50 text-blue-700 border-blue-200"
                  />
                  <RightCard 
                    icon={<Edit size={24} />} 
                    title="Rectificación" 
                    desc="Puedes exigir que corrijan tus datos si están incompletos, inexactos o desactualizados."
                    color="bg-emerald-50 text-emerald-700 border-emerald-200"
                  />
                  <RightCard 
                    icon={<Trash size={24} />} 
                    title="Cancelación (Olvido)" 
                    desc="Derecho a pedir que eliminen tus datos cuando ya no sean necesarios para el fin original o revoques tu consentimiento."
                    color="bg-rose-50 text-rose-700 border-rose-200"
                  />
                  <RightCard 
                    icon={<Ban size={24} />} 
                    title="Oposición" 
                    desc="Puedes negarte a que usen tus datos para fines específicos, como marketing directo o publicidad."
                    color="bg-amber-50 text-amber-700 border-amber-200"
                  />
                  <RightCard 
                    icon={<Share2 size={24} />} 
                    title="Portabilidad" 
                    desc="NUEVO: Derecho a recibir tus datos en un formato digital estándar para llevártelos a otro proveedor de servicio."
                    color="bg-purple-50 text-purple-700 border-purple-200"
                  />
                  <div className="flex flex-col justify-center gap-4 p-6 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 h-full">
                    <div className="flex items-center gap-3">
                      <Info size={28} className="text-slate-400" />
                      <h3 className="font-bold text-slate-700">IA y Algoritmos</h3>
                    </div>
                    <p className="text-sm text-slate-500 font-medium">
                      Además, tienes derecho a no ser objeto de decisiones basadas únicamente en el procesamiento automatizado que produzcan efectos jurídicos.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: AGENCIA */}
            {activeTab === 'agencia' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <Building2 size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Agencia de Protección de Datos</h2>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      El gran problema de la antigua Ley 19.628 era que era una "ley sin dientes". Para reclamar, debías ir directamente a tribunales, lo cual era lento y costoso.
                    </p>
                    <p>
                      Con la reforma se crea la <strong>Agencia de Protección de Datos Personales</strong>, una corporación autónoma de derecho público, con patrimonio propio.
                    </p>
                    <ul className="space-y-3 mt-4">
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                        <span><strong>Fiscalización:</strong> Podrá investigar de oficio o por denuncias ciudadanas.</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                        <span><strong>Sanción:</strong> Tiene el poder de aplicar multas millonarias a las empresas infractoras.</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                        <span><strong>Normativa:</strong> Emitirá dictámenes y normativas técnicas sobre cómo aplicar la ley.</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                        <span><strong>Registro Público:</strong> Mantendrá un registro de sanciones y bases de datos estatales.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/3 bg-blue-50 p-6 rounded-2xl border border-blue-100 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                      <Scale size={40} className="text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-900 mb-2">Entidad Autónoma</h4>
                    <p className="text-sm text-blue-700">Velará de forma independiente por el cumplimiento estricto de la ley en el sector público y privado.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: MULTAS */}
            {activeTab === 'multas' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg text-red-600">
                    <AlertTriangle size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Un Régimen Sancionatorio Estricto</h2>
                </div>
                <p className="text-slate-600 mb-8">
                  Para asegurar el cumplimiento, la ley establece un sistema de multas muy severo, categorizando las infracciones en tres niveles.
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl border-l-4 border-yellow-400 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="bg-yellow-50 p-3 rounded-full text-yellow-600 shrink-0">
                      <Coins size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800">Infracciones Leves</h4>
                      <p className="text-sm text-slate-600">Ej: No responder a tiempo solicitudes ARCOP menores.</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-extrabold text-slate-800">Hasta 5.000 UTM</span>
                      <span className="text-xs text-slate-500">(Aprox. $330 millones CLP)</span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border-l-4 border-orange-500 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="bg-orange-50 p-3 rounded-full text-orange-600 shrink-0">
                      <Coins size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800">Infracciones Graves</h4>
                      <p className="text-sm text-slate-600">Ej: Tratar datos sin consentimiento o no implementar medidas de seguridad.</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-extrabold text-slate-800">Hasta 10.000 UTM</span>
                      <span className="text-xs text-slate-500">o 2% ingresos brutos anuales</span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border-l-4 border-red-600 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-10 -mt-10 opacity-50"></div>
                    <div className="bg-red-50 p-3 rounded-full text-red-600 shrink-0 relative z-10">
                      <AlertTriangle size={24} />
                    </div>
                    <div className="flex-1 relative z-10">
                      <h4 className="font-bold text-slate-800">Infracciones Gravísimas</h4>
                      <p className="text-sm text-slate-600">Ej: Tratar datos de forma fraudulenta o transferir datos a países sin nivel adecuado de protección tras ser advertidos.</p>
                    </div>
                    <div className="text-right relative z-10">
                      <span className="block text-xl font-extrabold text-red-600">Hasta 20.000 UTM</span>
                      <span className="text-xs text-slate-500">o 4% ingresos brutos anuales</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-sm text-slate-500 text-center bg-slate-50 p-4 rounded-lg">
                  * En caso de reincidencia, las multas pueden llegar hasta las 60.000 UTM o el equivalente al 6% de los ingresos anuales por ventas del infractor.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* COMPLIANCE CHECKLIST PARA EMPRESAS */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          <Database className="absolute right-[-20px] bottom-[-20px] text-white/5" size={300} />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">¿Tienes una empresa o emprendimiento?</h2>
            <p className="text-slate-300 mb-10 max-w-3xl text-lg">
              La ley aplica a todas las entidades que traten datos personales en Chile. Aquí tienes 4 pasos clave para empezar a adaptarte:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="flex flex-col gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Mapea tus datos</h4>
                  <p className="text-slate-400 text-sm">Identifica qué datos recopilas, dónde los guardas y con quién los compartes.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Actualiza Políticas</h4>
                  <p className="text-slate-400 text-sm">Revisa tus términos y condiciones para que sean claros, transparentes y requieran consentimiento explícito.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Seguridad desde el diseño</h4>
                  <p className="text-slate-400 text-sm">Implementa medidas de ciberseguridad para evitar filtraciones (cifrado, control de accesos).</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Mecanismos de respuesta</h4>
                  <p className="text-slate-400 text-sm">Crea canales fáciles para que los usuarios puedan ejercer sus derechos ARCOP rápidamente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-sm border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Shield size={32} className="text-slate-500" />
            <div className="text-left">
              <span className="text-slate-300 font-bold block text-base">Nueva Ley de Datos</span>
              <span className="text-slate-500">Chile</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="mb-1">Infografía sobre la Ley de Protección de Datos Personales en Chile.</p>
            <p>Tus datos son tu identidad digital. Protégelos.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

// Componente auxiliar para las tarjetas de derechos
const RightCard = ({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) => {
  return (
    <div className={`p-5 rounded-xl border ${color} bg-white transition-all hover:shadow-md`}>
      <div className={`mb-3 inline-block p-2 rounded-lg ${color.split(' ')[0]} bg-opacity-20`}>
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2 text-slate-800">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
};

export default App;