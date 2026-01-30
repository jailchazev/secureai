import Link from "next/link";
import { Home, Users, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function SolucionesPage() {
  const solutions = [
    {
      icon: Home,
      title: "Para el Hogar",
      slug: "hogar",
      description: "Protege a tu familia y tu hogar con tecnología inteligente y fácil de usar.",
      idealFor: "Casas, departamentos, residencias",
      features: [
        "Alarma inteligente con IA",
        "Cámaras HD con visión nocturna",
        "App móvil intuitiva",
        "Sensores de puertas y ventanas",
        "Detectores de humo y CO",
        "Control por voz (Alexa/Google)"
      ],
      benefits: [
        "Instalación rápida",
        "Sin contratos largos",
        "Soporte 24/7",
        "Precio accesible"
      ],
      price: "Desde $29/mes",
      color: "cyan"
    },
    {
      icon: Users,
      title: "Para Pymes",
      slug: "pyme",
      description: "Seguridad profesional adaptada a pequeñas y medianas empresas.",
      idealFor: "Oficinas, comercios, consultorios, restaurantes",
      features: [
        "Control de accesos inteligente",
        "CCTV con análisis de video",
        "Múltiples ubicaciones",
        "Reportes y estadísticas",
        "Integración con nómina",
        "Gestión de empleados"
      ],
      benefits: [
        "Escalable",
        "ROI comprobado",
        "Fácil gestión",
        "Soporte prioritario"
      ],
      price: "Desde $99/mes",
      color: "blue"
    },
    {
      icon: Building2,
      title: "Para Empresas",
      slug: "empresa",
      description: "Soluciones enterprise con integración total y escalabilidad ilimitada.",
      idealFor: "Corporativos, industrias, campus, cadenas",
      features: [
        "Integración completa de sistemas",
        "IA avanzada y predictiva",
        "API personalizada",
        "Dashboards enterprise",
        "Múltiples sedes",
        "Cumplimiento normativo"
      ],
      benefits: [
        "Personalizable",
        "Soporte dedicado",
        "SLA garantizado",
        "Consultoría incluida"
      ],
      price: "Cotización personalizada",
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Soluciones Para
            <br />
            <span className="text-gradient">Cada Necesidad</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Desde hogares hasta grandes empresas, tenemos la solución perfecta 
            que se adapta a tu presupuesto y necesidades específicas.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                hover 
                glow 
                className="flex flex-col relative overflow-hidden group"
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-${solution.color}-500/10 to-transparent rounded-bl-full`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-${solution.color}-500/10 flex items-center justify-center mb-6`}>
                    <solution.icon className={`w-8 h-8 text-${solution.color}-500`} />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-3">{solution.title}</h2>
                  <p className="text-gray-400 mb-4">{solution.description}</p>
                  
                  <div className="bg-white/5 rounded-lg px-4 py-2 mb-6 inline-block">
                    <p className="text-sm text-gray-300">
                      <span className="text-cyan-400 font-semibold">Ideal para:</span> {solution.idealFor}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-3">Incluye:</h3>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-purple-400 mb-2">Beneficios:</h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, i) => (
                        <span key={i} className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-6 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-400">Precio</p>
                        <p className="text-2xl font-bold text-cyan-400">{solution.price}</p>
                      </div>
                    </div>
                    
                    <Link href={`/soluciones/${solution.slug}`}>
                      <Button 
                        variant="primary" 
                        className="w-full group-hover:shadow-xl"
                      >
                        Ver Detalles
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Compara Nuestras Soluciones
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Encuentra la opción que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">Característica</th>
                  <th className="text-center py-4 px-4 text-cyan-400 font-semibold">Hogar</th>
                  <th className="text-center py-4 px-4 text-blue-400 font-semibold">Pyme</th>
                  <th className="text-center py-4 px-4 text-purple-400 font-semibold">Empresa</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Alarma inteligente", hogar: true, pyme: true, empresa: true },
                  { feature: "Cámaras CCTV", hogar: "Básico", pyme: "Avanzado", empresa: "Enterprise" },
                  { feature: "Control de accesos", hogar: false, pyme: true, empresa: true },
                  { feature: "App móvil", hogar: true, pyme: true, empresa: true },
                  { feature: "Múltiples ubicaciones", hogar: false, pyme: "Hasta 5", empresa: "Ilimitado" },
                  { feature: "Dashboards", hogar: "Básico", pyme: "Avanzado", empresa: "Personalizado" },
                  { feature: "API personalizada", hogar: false, pyme: false, empresa: true },
                  { feature: "Soporte", hogar: "24/7", pyme: "Prioritario", empresa: "Dedicado" },
                  { feature: "Instalación", hogar: "DIY/Pro", pyme: "Profesional", empresa: "Consultoría" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-800/50">
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.hogar === 'boolean' ? (
                        row.hogar ? (
                          <CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" />
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span className="text-gray-300">{row.hogar}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.pyme === 'boolean' ? (
                        row.pyme ? (
                          <CheckCircle2 className="w-5 h-5 text-blue-500 mx-auto" />
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span className="text-gray-300">{row.pyme}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.empresa === 'boolean' ? (
                        row.empresa ? (
                          <CheckCircle2 className="w-5 h-5 text-purple-500 mx-auto" />
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span className="text-gray-300">{row.empresa}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-950 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿No Estás Seguro Cuál Elegir?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Habla con nuestros expertos y te ayudaremos a encontrar la solución perfecta
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/5215512345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20las%20soluciones%20de%20SecureAI" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                Hablar con un Experto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link href="/contacto">
              <Button size="lg" variant="outline">
                Solicitar Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
