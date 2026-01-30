import {
  Brain,
  Eye,
  Zap,
  Shield,
  TrendingUp,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Activity,
  AlertTriangle,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

// Generate random positions for particles outside of render
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 3,
  duration: 2 + Math.random() * 2
}));

export default function TecnologiaPage() {
  const aiFeatures = [
    {
      icon: Brain,
      title: "Detección Inteligente de Anomalías",
      description: "Nuestra IA aprende los patrones normales de tu hogar o negocio y detecta automáticamente comportamientos inusuales.",
      benefits: [
        "Aprende tus rutinas diarias",
        "Detecta actividad sospechosa",
        "Se adapta a cambios estacionales",
        "Mejora continuamente"
      ],
      technicalDetails: "Algoritmos de machine learning entrenados con millones de eventos reales",
      color: "cyan"
    },
    {
      icon: Eye,
      title: "Reconocimiento Visual Avanzado",
      description: "Análisis de video en tiempo real que diferencia personas, mascotas, vehículos y objetos con precisión.",
      benefits: [
        "Reconocimiento facial",
        "Diferenciación personas vs mascotas",
        "Detección de objetos abandonados",
        "Análisis de comportamiento"
      ],
      technicalDetails: "Redes neuronales convolucionales (CNN) optimizadas para edge computing",
      color: "blue"
    },
    {
      icon: AlertTriangle,
      title: "Reducción de Falsos Positivos",
      description: "85% menos falsas alarmas gracias a la inteligencia artificial que filtra eventos irrelevantes.",
      benefits: [
        "Filtrado inteligente de eventos",
        "Priorización automática",
        "Aprendizaje de preferencias",
        "Alertas solo cuando importa"
      ],
      technicalDetails: "Modelos de clasificación multi-etapa con validación cruzada",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Análisis Predictivo",
      description: "Predice y previene incidentes antes de que ocurran basándose en patrones históricos.",
      benefits: [
        "Predicción de riesgos",
        "Mantenimiento preventivo",
        "Optimización de recursos",
        "Alertas tempranas"
      ],
      technicalDetails: "Modelos de series temporales y análisis de tendencias",
      color: "cyan"
    },
    {
      icon: Target,
      title: "Personalización Automática",
      description: "El sistema se configura automáticamente según tus necesidades y preferencias.",
      benefits: [
        "Configuración inteligente",
        "Recomendaciones personalizadas",
        "Ajuste automático de sensibilidad",
        "Optimización continua"
      ],
      technicalDetails: "Sistemas de recomendación basados en collaborative filtering",
      color: "blue"
    },
    {
      icon: Activity,
      title: "Monitoreo de Salud del Sistema",
      description: "IA que supervisa el estado de todos tus dispositivos y predice fallos antes de que ocurran.",
      benefits: [
        "Detección temprana de fallos",
        "Alertas de mantenimiento",
        "Optimización de batería",
        "Diagnóstico automático"
      ],
      technicalDetails: "Modelos de detección de anomalías en métricas de hardware",
      color: "purple"
    }
  ];

  const comparisonData = [
    {
      feature: "Detección de movimiento",
      traditional: "Básica, muchos falsos positivos",
      secureai: "IA que diferencia personas, mascotas y objetos"
    },
    {
      feature: "Notificaciones",
      traditional: "Todas las alertas por igual",
      secureai: "Priorizadas por importancia con IA"
    },
    {
      feature: "Configuración",
      traditional: "Manual y compleja",
      secureai: "Automática y personalizada"
    },
    {
      feature: "Aprendizaje",
      traditional: "No aprende",
      secureai: "Mejora continuamente con el uso"
    },
    {
      feature: "Mantenimiento",
      traditional: "Reactivo cuando falla",
      secureai: "Predictivo antes de que falle"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-gray-950 to-gray-950"></div>
        
        {/* Animated AI particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-cyan-500 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Inteligencia Artificial Avanzada</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tecnología IA
              <br />
              <span className="text-gradient">Que Piensa Por Ti</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Nuestra inteligencia artificial no solo detecta eventos, los comprende, 
              aprende y se anticipa para protegerte mejor cada día.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contacto">
                <Button size="lg" variant="primary">
                  Ver Demo Interactivo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/5215512345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20la%20tecnología%20IA%20de%20SecureAI" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  Hablar con un Experto
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Capacidades de Nuestra IA
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tecnología de vanguardia que transforma la seguridad tradicional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <Card key={index} hover glow className="flex flex-col">
                <div className={`w-14 h-14 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}-500`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Beneficios:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-500">
                    <span className="text-purple-400 font-semibold">Tecnología:</span> {feature.technicalDetails}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cómo Funciona Nuestra IA
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Un proceso inteligente en 4 pasos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Captura",
                description: "Sensores y cámaras capturan eventos en tiempo real",
                icon: Eye
              },
              {
                step: "02",
                title: "Análisis",
                description: "IA procesa y clasifica cada evento instantáneamente",
                icon: Brain
              },
              {
                step: "03",
                title: "Decisión",
                description: "Determina si es relevante y qué acción tomar",
                icon: Target
              },
              {
                step: "04",
                title: "Acción",
                description: "Notifica, registra o activa respuestas automáticas",
                icon: Zap
              }
            ].map((step, index) => (
              <Card key={index} hover className="text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4 mt-4">
                  <step.icon className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              IA vs Sistemas Tradicionales
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              La diferencia es clara
            </p>
          </div>

          <Card className="max-w-5xl mx-auto overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-4 px-6 text-gray-400 font-semibold">Característica</th>
                    <th className="text-center py-4 px-6 text-red-400 font-semibold">Sistemas Tradicionales</th>
                    <th className="text-center py-4 px-6 text-cyan-400 font-semibold">SecureAI con IA</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-gray-800/50">
                      <td className="py-4 px-6 font-semibold text-gray-300">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-gray-400 text-sm">{row.traditional}</td>
                      <td className="py-4 px-6 text-center text-cyan-300 text-sm font-semibold">{row.secureai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Resultados Comprobados
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Datos reales de nuestros clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "85%", label: "Reducción de falsos positivos", icon: TrendingUp },
              { value: "99.9%", label: "Precisión en detección", icon: Target },
              { value: "< 1s", label: "Tiempo de análisis", icon: Zap },
              { value: "24/7", label: "Aprendizaje continuo", icon: Brain }
            ].map((stat, i) => (
              <Card key={i} hover className="text-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-cyan-500" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
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
            Experimenta el Poder de la IA
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Solicita una demo y descubre cómo nuestra IA puede transformar tu seguridad
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto">
              <Button size="lg" variant="secondary">
                Ver Demo Interactivo
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
