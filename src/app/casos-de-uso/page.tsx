import { 
  Building2, 
  Home, 
  ShoppingBag, 
  Hospital, 
  GraduationCap,
  Factory,
  CheckCircle2,
  TrendingUp,
  Shield,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export default function CasosDeUsoPage() {
  const cases = [
    {
      icon: Home,
      title: "Residencia Familiar en Polanco",
      clientType: "Hogar",
      industry: "Residencial",
      challenge: "Familia con mascotas experimentaba múltiples falsas alarmas diarias, generando estrés y desconfianza en el sistema de seguridad tradicional.",
      solution: "Implementamos SecureAI con cámaras inteligentes que diferencian personas de mascotas, sensores de movimiento con IA y notificaciones priorizadas.",
      results: [
        "95% reducción en falsas alarmas",
        "Detección precisa de intrusos reales",
        "Familia tranquila y mascotas libres",
        "ROI en 4 meses por ahorro en respuestas falsas"
      ],
      testimonial: "Finalmente podemos confiar en nuestro sistema. Las mascotas se mueven libremente y solo recibimos alertas cuando realmente importa.",
      author: "María González, Propietaria",
      image: "🏡",
      color: "cyan"
    },
    {
      icon: ShoppingBag,
      title: "Cadena de Retail con 15 Sucursales",
      clientType: "Empresa",
      industry: "Retail",
      challenge: "Pérdidas por robo hormiga, falta de visibilidad en tiempo real de todas las sucursales y costos elevados de personal de seguridad.",
      solution: "Plataforma centralizada con análisis de video IA, detección de comportamientos sospechosos, control de accesos y dashboards en tiempo real.",
      results: [
        "68% reducción en pérdidas por robo",
        "Visibilidad total de 15 sucursales desde un dashboard",
        "40% reducción en costos de seguridad",
        "Detección proactiva de patrones de robo"
      ],
      testimonial: "La IA detectó patrones de robo que nunca hubiéramos identificado manualmente. El ROI fue evidente en el primer trimestre.",
      author: "Carlos Ramírez, Director de Operaciones",
      image: "🛍️",
      color: "blue"
    },
    {
      icon: Building2,
      title: "Corporativo Tecnológico - 3 Edificios",
      clientType: "Empresa",
      industry: "Tecnología",
      challenge: "Control de accesos manual ineficiente, falta de integración entre sistemas y dificultad para auditorías de seguridad.",
      solution: "Sistema integrado con control de accesos biométrico, CCTV con IA, integración con nómina y reportes automáticos para auditorías.",
      results: [
        "100% trazabilidad de accesos",
        "Integración automática con RH",
        "Reportes de auditoría en 1 click",
        "Cumplimiento normativo garantizado"
      ],
      testimonial: "La integración con nuestros sistemas fue perfecta. Ahora las auditorías que tomaban días se generan en minutos.",
      author: "Ana Martínez, CISO",
      image: "🏢",
      color: "purple"
    },
    {
      icon: Hospital,
      title: "Clínica Médica Privada",
      clientType: "Pyme",
      industry: "Salud",
      challenge: "Necesidad de controlar acceso a áreas restringidas, proteger información sensible y cumplir con normativas de salud.",
      solution: "Control de accesos por zonas, cámaras con reconocimiento facial, sensores ambientales y sistema de alertas médicas integrado.",
      results: [
        "Cumplimiento 100% normativa sanitaria",
        "Control estricto de áreas restringidas",
        "Integración con sistema de emergencias",
        "Tranquilidad para pacientes y personal"
      ],
      testimonial: "La seguridad de nuestros pacientes y el cumplimiento normativo ahora están garantizados. El sistema es intuitivo y confiable.",
      author: "Dr. Roberto Sánchez, Director Médico",
      image: "🏥",
      color: "cyan"
    },
    {
      icon: GraduationCap,
      title: "Universidad Privada - Campus Completo",
      clientType: "Empresa",
      industry: "Educación",
      challenge: "Campus extenso con múltiples edificios, necesidad de proteger estudiantes y controlar accesos sin afectar la experiencia educativa.",
      solution: "Red de cámaras inteligentes, control de accesos con tarjetas estudiantiles, botones de pánico y sistema de alertas masivas.",
      results: [
        "Cobertura total del campus",
        "Tiempo de respuesta < 2 minutos",
        "Sistema de alertas masivas efectivo",
        "Estudiantes y padres tranquilos"
      ],
      testimonial: "La seguridad del campus mejoró dramáticamente sin afectar la experiencia de los estudiantes. Los padres están muy satisfechos.",
      author: "Lic. Patricia Ruiz, Rectora",
      image: "🎓",
      color: "blue"
    },
    {
      icon: Factory,
      title: "Planta Industrial Manufacturera",
      clientType: "Empresa",
      industry: "Manufactura",
      challenge: "Robo de materiales, accidentes laborales y falta de monitoreo de zonas peligrosas en planta de 50,000 m².",
      solution: "Cámaras con IA para detección de EPP, sensores IoT en zonas peligrosas, control de accesos vehicular y monitoreo 24/7.",
      results: [
        "85% reducción en robos de material",
        "60% reducción en accidentes laborales",
        "Detección automática de falta de EPP",
        "Cumplimiento de normas de seguridad"
      ],
      testimonial: "El sistema no solo protege nuestros activos, también cuida a nuestro personal. Los accidentes se redujeron significativamente.",
      author: "Ing. Miguel Torres, Gerente de Planta",
      image: "🏭",
      color: "purple"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/10 to-gray-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Historias de Éxito</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Casos de Uso
            <br />
            <span className="text-gradient">Reales y Comprobados</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Descubre cómo SecureAI ha transformado la seguridad de hogares, 
            pymes y empresas en diferentes industrias
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Clientes Satisfechos" },
              { value: "85%", label: "Reducción Promedio en Incidentes" },
              { value: "99.9%", label: "Uptime del Sistema" },
              { value: "< 3 meses", label: "ROI Promedio" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((useCase, index) => (
              <Card key={index} hover glow className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Icon & Info */}
                  <div className="lg:border-r border-gray-800 pr-8">
                    <div className="text-6xl mb-4">{useCase.image}</div>
                    <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm">
                        <span className="text-gray-400 mr-2">Tipo:</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${useCase.color}-500/10 text-${useCase.color}-400`}>
                          {useCase.clientType}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-400 mr-2">Industria:</span>
                        <span className="text-gray-300">{useCase.industry}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-950/20 to-blue-950/20 rounded-lg p-4 border border-cyan-500/20">
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-2">Resultados Clave</h4>
                          <ul className="space-y-1">
                            {useCase.results.map((result, i) => (
                              <li key={i} className="text-sm text-gray-300 flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Challenge & Solution */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        El Desafío
                      </h4>
                      <p className="text-gray-300">{useCase.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        La Solución
                      </h4>
                      <p className="text-gray-300">{useCase.solution}</p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6 border-l-4 border-cyan-500">
                      <p className="text-gray-300 italic mb-3">&quot;{useCase.testimonial}&quot;</p>
                      <p className="text-sm text-cyan-400 font-semibold">— {useCase.author}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industrias Que Confían en Nosotros
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluciones adaptadas a las necesidades específicas de cada sector
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Retail", icon: "🛍️" },
              { name: "Salud", icon: "🏥" },
              { name: "Educación", icon: "🎓" },
              { name: "Manufactura", icon: "🏭" },
              { name: "Tecnología", icon: "💻" },
              { name: "Hotelería", icon: "🏨" },
              { name: "Logística", icon: "🚚" },
              { name: "Financiero", icon: "🏦" },
              { name: "Gobierno", icon: "🏛️" },
              { name: "Residencial", icon: "🏡" },
              { name: "Restaurantes", icon: "🍽️" },
              { name: "Construcción", icon: "🏗️" }
            ].map((industry, i) => (
              <Card key={i} hover className="text-center p-6">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="text-sm font-semibold text-gray-300">{industry.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-950 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo Para Ser Nuestro Próximo Caso de Éxito?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Agenda una consulta gratuita y descubre cómo podemos transformar tu seguridad
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto">
              <Button size="lg" variant="secondary">
                Agendar Consulta Gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/planes">
              <Button size="lg" variant="outline">
                Ver Planes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
