import Link from "next/link";
import { 
  Shield, 
  Brain, 
  Camera, 
  Lock, 
  Smartphone, 
  BarChart3, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Building2,
  Home as HomeIcon
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-gray-950 to-gray-950"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Tecnología de Seguridad con IA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Protección Inteligente
              <br />
              <span className="text-gradient">Más Allá de las Alarmas</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Seguridad electrónica con inteligencia artificial para hogares y negocios. 
              Monitoreo 24/7, detección proactiva y control total desde tu smartphone.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contacto">
                <Button size="lg" variant="primary">
                  Solicitar Demo Gratis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/planes">
                <Button size="lg" variant="outline">
                  Ver Planes
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime Garantizado</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Monitoreo Activo</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">-85%</div>
                <div className="text-gray-400 text-sm">Falsos Positivos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;30s</div>
                <div className="text-gray-400 text-sm">Tiempo de Respuesta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Por Qué Elegir <span className="text-gradient">SecureAI</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tecnología de vanguardia que va más allá de la seguridad tradicional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Inteligencia Artificial",
                description: "Detección inteligente que aprende y se adapta. Diferencia personas, mascotas y objetos con precisión.",
                color: "cyan"
              },
              {
                icon: Camera,
                title: "CCTV Inteligente",
                description: "Análisis de video en tiempo real con reconocimiento facial y detección de comportamientos anómalos.",
                color: "blue"
              },
              {
                icon: Lock,
                title: "Control de Accesos",
                description: "Gestión centralizada de accesos con biometría, tarjetas y códigos. Historial completo de eventos.",
                color: "purple"
              },
              {
                icon: Smartphone,
                title: "App Móvil Avanzada",
                description: "Control total desde tu smartphone. Notificaciones inteligentes y acción inmediata.",
                color: "cyan"
              },
              {
                icon: BarChart3,
                title: "Dashboards en Tiempo Real",
                description: "Visualiza el estado de todos tus dispositivos y ubicaciones desde un solo lugar.",
                color: "blue"
              },
              {
                icon: Shield,
                title: "Monitoreo 24/7",
                description: "Central de monitoreo profesional con respuesta inmediata ante cualquier evento.",
                color: "purple"
              }
            ].map((feature, index) => (
              <Card key={index} hover glow>
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-500`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Soluciones Para Cada Necesidad
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Desde hogares hasta grandes empresas, tenemos la solución perfecta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: HomeIcon,
                title: "Para el Hogar",
                description: "Protege a tu familia con tecnología inteligente y fácil de usar.",
                features: ["Alarma inteligente", "Cámaras HD", "App móvil", "Sensores IoT"],
                link: "/soluciones/hogar"
              },
              {
                icon: Users,
                title: "Para Pymes",
                description: "Seguridad profesional adaptada a pequeñas y medianas empresas.",
                features: ["Control de accesos", "CCTV avanzado", "Reportes", "Múltiples ubicaciones"],
                link: "/soluciones/pyme"
              },
              {
                icon: Building2,
                title: "Para Empresas",
                description: "Soluciones enterprise con integración total y escalabilidad.",
                features: ["Integración completa", "IA avanzada", "API personalizada", "Soporte dedicado"],
                link: "/soluciones/empresa"
              }
            ].map((solution, index) => (
              <Card key={index} hover className="relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full"></div>
                <solution.icon className="w-12 h-12 text-cyan-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={solution.link}>
                  <Button variant="outline" className="w-full group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500">
                    Ver Más
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              SecureAI vs Alarmas Tradicionales
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Descubre por qué somos diferentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-red-500/30">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Alarmas Tradicionales</h3>
              <ul className="space-y-4">
                {[
                  "Muchos falsos positivos",
                  "Sin inteligencia artificial",
                  "Configuración compleja",
                  "Reportes limitados",
                  "Sin integración de sistemas",
                  "Respuesta reactiva"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-400">
                    <span className="text-red-500 mr-2">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="border-cyan-500/50 bg-gradient-to-br from-cyan-950/20 to-gray-900/50">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">SecureAI</h3>
              <ul className="space-y-4">
                {[
                  "85% menos falsos positivos con IA",
                  "Detección inteligente y predictiva",
                  "Instalación y uso intuitivo",
                  "Dashboards y reportes avanzados",
                  "Integración total de sistemas",
                  "Respuesta proactiva automática"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/comparador">
              <Button size="lg" variant="primary">
                Ver Comparación Completa
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Miles de hogares y empresas confían en SecureAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Propietaria de Hogar",
                content: "Desde que instalé SecureAI, duermo tranquila. Las notificaciones son precisas y la app es súper fácil de usar. ¡Ya no tengo falsas alarmas!",
                rating: 5
              },
              {
                name: "Carlos Ramírez",
                role: "CEO, TechStart",
                content: "La integración con nuestros sistemas fue perfecta. Los dashboards nos dan visibilidad total de todas nuestras oficinas. Excelente inversión.",
                rating: 5
              },
              {
                name: "Ana Martínez",
                role: "Gerente de Retail",
                content: "El análisis de video con IA nos ayudó a prevenir varios incidentes. El ROI fue evidente en los primeros 3 meses. Altamente recomendado.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} hover>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
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
            ¿Listo Para Proteger Lo Que Más Importa?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Solicita una demo gratuita y descubre cómo SecureAI puede transformar tu seguridad
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto">
              <Button size="lg" variant="secondary">
                Solicitar Demo Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="https://wa.me/5215512345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20SecureAI" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                Hablar con un Experto
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
