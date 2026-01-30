import { 
  Shield, 
  Camera, 
  Lock, 
  Wifi, 
  Smartphone, 
  Bell, 
  Flame, 
  Droplet,
  Wind,
  MapPin,
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export default function ServiciosPage() {
  const services = [
    {
      icon: Shield,
      title: "Alarmas con Monitoreo 24/7",
      description: "Sistema de alarma inteligente con monitoreo profesional las 24 horas del día, los 7 días de la semana.",
      features: [
        "Monitoreo profesional 24/7",
        "Respuesta inmediata ante eventos",
        "Notificaciones en tiempo real",
        "Historial completo de eventos",
        "Integración con policía y emergencias"
      ],
      benefits: [
        "Tranquilidad total",
        "Respuesta rápida",
        "Reducción de riesgos"
      ],
      color: "cyan"
    },
    {
      icon: Camera,
      title: "CCTV Inteligente con IA",
      description: "Cámaras de seguridad con análisis de video mediante inteligencia artificial para detección precisa.",
      features: [
        "Análisis de video en tiempo real",
        "Reconocimiento facial",
        "Detección de comportamientos anómalos",
        "Diferenciación personas vs mascotas",
        "Grabación en la nube y local",
        "Visión nocturna HD"
      ],
      benefits: [
        "85% menos falsos positivos",
        "Detección proactiva",
        "Evidencia de calidad"
      ],
      color: "blue"
    },
    {
      icon: Lock,
      title: "Control de Accesos Inteligente",
      description: "Gestión centralizada de accesos con múltiples métodos de autenticación y registro completo.",
      features: [
        "Biometría (huella, facial)",
        "Tarjetas RFID y códigos",
        "Control remoto desde app",
        "Historial de accesos",
        "Permisos por horarios",
        "Integración con nómina"
      ],
      benefits: [
        "Control total",
        "Auditoría completa",
        "Gestión eficiente"
      ],
      color: "purple"
    },
    {
      icon: Wifi,
      title: "Integración Total de Sistemas",
      description: "Conecta todos tus sistemas de seguridad en una sola plataforma centralizada.",
      features: [
        "Alarmas + CCTV + Accesos unificados",
        "Dashboard centralizado",
        "Automatizaciones inteligentes",
        "API para integraciones custom",
        "Sincronización en tiempo real"
      ],
      benefits: [
        "Visibilidad total",
        "Gestión simplificada",
        "Mayor eficiencia"
      ],
      color: "cyan"
    },
    {
      icon: Smartphone,
      title: "App Móvil Avanzada",
      description: "Control total de tu seguridad desde tu smartphone, en cualquier momento y lugar.",
      features: [
        "Control remoto completo",
        "Notificaciones push inteligentes",
        "Visualización de cámaras en vivo",
        "Gestión de accesos",
        "Reportes y estadísticas",
        "Modo offline"
      ],
      benefits: [
        "Control desde cualquier lugar",
        "Respuesta inmediata",
        "Información en tiempo real"
      ],
      color: "blue"
    },
    {
      icon: Bell,
      title: "Notificaciones Inteligentes",
      description: "Alertas priorizadas y accionables basadas en inteligencia artificial.",
      features: [
        "Priorización automática",
        "Filtrado de falsos positivos",
        "Múltiples canales (push, email, SMS)",
        "Acciones rápidas desde notificación",
        "Personalización avanzada"
      ],
      benefits: [
        "Solo alertas importantes",
        "Acción inmediata",
        "Sin saturación"
      ],
      color: "purple"
    },
    {
      icon: Flame,
      title: "Sensores de Incendio y Humo",
      description: "Detección temprana de incendios con sensores inteligentes conectados.",
      features: [
        "Detección de humo y calor",
        "Alertas inmediatas",
        "Integración con bomberos",
        "Pruebas automáticas",
        "Batería de respaldo"
      ],
      benefits: [
        "Protección de vidas",
        "Detección temprana",
        "Cumplimiento normativo"
      ],
      color: "cyan"
    },
    {
      icon: Droplet,
      title: "Sensores de Inundación",
      description: "Detecta fugas y inundaciones antes de que causen daños mayores.",
      features: [
        "Detección de agua",
        "Alertas instantáneas",
        "Múltiples puntos de monitoreo",
        "Integración con válvulas automáticas",
        "Historial de eventos"
      ],
      benefits: [
        "Prevención de daños",
        "Ahorro en reparaciones",
        "Tranquilidad"
      ],
      color: "blue"
    },
    {
      icon: Wind,
      title: "Sensores Ambientales IoT",
      description: "Monitoreo de calidad del aire, temperatura, humedad y más.",
      features: [
        "CO2, temperatura, humedad",
        "Alertas por umbrales",
        "Gráficos históricos",
        "Integración con climatización",
        "Reportes automáticos"
      ],
      benefits: [
        "Ambiente saludable",
        "Eficiencia energética",
        "Cumplimiento normativo"
      ],
      color: "purple"
    },
    {
      icon: MapPin,
      title: "Geolocalización GPS",
      description: "Rastrea vehículos, activos y personal en tiempo real.",
      features: [
        "Tracking en tiempo real",
        "Geocercas inteligentes",
        "Historial de rutas",
        "Alertas de movimiento",
        "Reportes de actividad"
      ],
      benefits: [
        "Control de flota",
        "Seguridad de personal",
        "Optimización de rutas"
      ],
      color: "cyan"
    },
    {
      icon: Zap,
      title: "Automatizaciones Inteligentes",
      description: "Crea escenarios automáticos basados en eventos y condiciones.",
      features: [
        "Reglas personalizables",
        "Acciones automáticas",
        "Integración con IoT",
        "Horarios y condiciones",
        "Escenarios complejos"
      ],
      benefits: [
        "Eficiencia operativa",
        "Respuesta automática",
        "Ahorro de tiempo"
      ],
      color: "blue"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-cyan-950/10 to-gray-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Servicios Completos</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Servicios de Seguridad
            <br />
            <span className="text-gradient">Inteligente e Integrada</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Soluciones modulares y escalables que se adaptan a tus necesidades. 
            Desde alarmas básicas hasta sistemas enterprise completos.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} hover glow className="flex flex-col">
                <div className={`w-14 h-14 rounded-xl bg-${service.color}-500/10 flex items-center justify-center mb-4`}>
                  <service.icon className={`w-7 h-7 text-${service.color}-500`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Características:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Beneficios:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, i) => (
                      <span key={i} className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Todo Integrado en Una Sola Plataforma
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Combina los servicios que necesites y gestiónalos desde un solo lugar
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-cyan-950/20 to-gray-900/50 border-cyan-500/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ventajas de la Integración</h3>
                <ul className="space-y-3">
                  {[
                    "Dashboard único para todo",
                    "Automatizaciones entre sistemas",
                    "Reportes consolidados",
                    "Gestión simplificada",
                    "Mayor eficiencia operativa",
                    "Reducción de costos"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Integraciones Disponibles</h3>
                <div className="space-y-3">
                  {[
                    "Google Home & Alexa",
                    "Sistemas de climatización",
                    "Control de iluminación",
                    "Sistemas de nómina",
                    "ERPs empresariales",
                    "APIs personalizadas"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center text-gray-300 bg-white/5 rounded-lg px-4 py-2">
                      <Zap className="w-4 h-4 text-cyan-500 mr-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-950 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Necesitas Ayuda Para Elegir?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nuestros expertos te ayudarán a diseñar la solución perfecta para tus necesidades
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/5215512345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20SecureAI" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                Hablar con un Experto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link href="/planes">
              <Button size="lg" variant="outline">
                Ver Planes y Precios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
