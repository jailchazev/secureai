import Link from "next/link";
import { 
  Check, 
  X, 
  Star, 
  Shield, 
  Zap, 
  Crown,
  ArrowRight,
  TrendingUp,
  Award,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function PlanesPage() {
  const plans = [
    {
      name: "Starter",
      slug: "starter",
      price: 29,
      period: "mes",
      description: "Perfecto para comenzar a proteger tu hogar",
      icon: Shield,
      color: "cyan",
      popular: false,
      features: [
        { name: "Hasta 5 sensores", included: true },
        { name: "2 cámaras HD", included: true },
        { name: "App móvil", included: true },
        { name: "Notificaciones push", included: true },
        { name: "Monitoreo 24/7", included: true },
        { name: "Grabación 7 días", included: true },
        { name: "1 ubicación", included: true },
        { name: "Soporte por email", included: true },
        { name: "Control de accesos", included: false },
        { name: "Análisis IA avanzado", included: false },
        { name: "API personalizada", included: false },
        { name: "Seguro incluido", included: false },
      ],
      securityScore: 65,
      idealFor: "Departamentos y casas pequeñas"
    },
    {
      name: "Smart Home",
      slug: "smart-home",
      price: 59,
      period: "mes",
      description: "Protección completa con inteligencia artificial",
      icon: Zap,
      color: "blue",
      popular: true,
      features: [
        { name: "Hasta 15 sensores", included: true },
        { name: "5 cámaras HD con IA", included: true },
        { name: "App móvil avanzada", included: true },
        { name: "Notificaciones inteligentes", included: true },
        { name: "Monitoreo 24/7 prioritario", included: true },
        { name: "Grabación 30 días", included: true },
        { name: "Hasta 2 ubicaciones", included: true },
        { name: "Soporte prioritario", included: true },
        { name: "Control de accesos básico", included: true },
        { name: "Análisis IA avanzado", included: true },
        { name: "API personalizada", included: false },
        { name: "Seguro incluido", included: false },
      ],
      securityScore: 85,
      idealFor: "Casas y pequeños negocios"
    },
    {
      name: "Pro Office",
      slug: "pro-office",
      price: 149,
      period: "mes",
      description: "Solución profesional para empresas",
      icon: Award,
      color: "purple",
      popular: false,
      features: [
        { name: "Sensores ilimitados", included: true },
        { name: "15 cámaras HD con IA", included: true },
        { name: "App móvil + Dashboard web", included: true },
        { name: "Notificaciones personalizadas", included: true },
        { name: "Monitoreo 24/7 dedicado", included: true },
        { name: "Grabación 90 días", included: true },
        { name: "Hasta 5 ubicaciones", included: true },
        { name: "Soporte 24/7 dedicado", included: true },
        { name: "Control de accesos avanzado", included: true },
        { name: "Análisis IA predictivo", included: true },
        { name: "API personalizada", included: true },
        { name: "Seguro incluido", included: false },
      ],
      securityScore: 95,
      idealFor: "Oficinas y comercios"
    },
    {
      name: "Protección Total",
      slug: "proteccion-total",
      price: 299,
      period: "mes",
      description: "Máxima protección con seguro y asistencias",
      icon: Crown,
      color: "yellow",
      popular: false,
      features: [
        { name: "Todo ilimitado", included: true },
        { name: "Cámaras ilimitadas con IA", included: true },
        { name: "Plataforma enterprise", included: true },
        { name: "Automatizaciones avanzadas", included: true },
        { name: "Monitoreo 24/7 VIP", included: true },
        { name: "Grabación ilimitada", included: true },
        { name: "Ubicaciones ilimitadas", included: true },
        { name: "Gerente de cuenta dedicado", included: true },
        { name: "Control de accesos enterprise", included: true },
        { name: "IA personalizada", included: true },
        { name: "API y webhooks", included: true },
        { name: "Seguro hasta $50,000 USD", included: true },
      ],
      securityScore: 100,
      idealFor: "Empresas y corporativos"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Planes Flexibles</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Planes y Precios
            <br />
            <span className="text-gradient">Transparentes</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Sin contratos largos. Sin costos ocultos. Cancela cuando quieras.
            <br />
            Todos los planes incluyen instalación profesional gratuita.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                hover
                glow={plan.popular}
                className={`flex flex-col relative ${
                  plan.popular ? 'border-2 border-cyan-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </div>
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-xl bg-${plan.color}-500/10 flex items-center justify-center mb-4`}>
                  <plan.icon className={`w-6 h-6 text-${plan.color}-500`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">+ IVA</p>
                </div>
                
                {/* Security Score */}
                <div className="mb-6 p-4 bg-gradient-to-r from-cyan-950/30 to-purple-950/30 rounded-lg border border-cyan-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Score de Seguridad</span>
                    <Target className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-800 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r from-cyan-500 to-${plan.color}-500 h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${plan.securityScore}%` }}
                      ></div>
                    </div>
                    <span className="text-lg font-bold text-cyan-400">{plan.securityScore}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-xs text-gray-500 mb-3">
                    <span className="text-cyan-400 font-semibold">Ideal para:</span> {plan.idealFor}
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-gray-600 mr-2 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Link href={`/contacto?plan=${plan.slug}`}>
                    <Button 
                      variant={plan.popular ? "primary" : "outline"}
                      className="w-full"
                    >
                      Comenzar Ahora
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mejora Tu Score de Seguridad
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Recibe recomendaciones personalizadas cada mes para aumentar tu protección
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Score Mensual</h3>
              <p className="text-gray-400 text-sm mb-4">
                Recibe tu score de seguridad cada mes basado en el uso y configuración de tu sistema
              </p>
              <div className="text-3xl font-bold text-cyan-400">0-100</div>
            </Card>

            <Card hover className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Recomendaciones IA</h3>
              <p className="text-gray-400 text-sm mb-4">
                Consejos personalizados para mejorar tu seguridad basados en patrones detectados
              </p>
              <div className="text-3xl font-bold text-blue-400">Smart</div>
            </Card>

            <Card hover className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Logros y Badges</h3>
              <p className="text-gray-400 text-sm mb-4">
                Desbloquea logros al mejorar tu seguridad y mantener buenas prácticas
              </p>
              <div className="text-3xl font-bold text-purple-400">🏆</div>
            </Card>
          </div>

          <Card className="mt-12 bg-gradient-to-r from-cyan-950/30 to-purple-950/30 border-cyan-500/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ejemplo de Score de Seguridad</h3>
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Tu Score Actual</span>
                  <span className="text-2xl font-bold text-cyan-400">78/100</span>
                </div>
                <div className="bg-gray-800 rounded-full h-4 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-4 rounded-full" style={{ width: '78%' }}></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="font-semibold text-green-400">Bien Hecho</span>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Todas las cámaras activas</li>
                      <li>• Sensores funcionando</li>
                      <li>• App actualizada</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="font-semibold text-yellow-400">Mejora</span>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Agrega sensor de humo</li>
                      <li>• Activa notificaciones</li>
                      <li>• Configura automatizaciones</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿Hay contratos de permanencia?",
                a: "No. Todos nuestros planes son mensuales y puedes cancelar cuando quieras sin penalización."
              },
              {
                q: "¿La instalación tiene costo?",
                a: "No. La instalación profesional está incluida en todos los planes sin costo adicional."
              },
              {
                q: "¿Puedo cambiar de plan después?",
                a: "Sí. Puedes cambiar de plan en cualquier momento. El cambio se aplica en tu próximo ciclo de facturación."
              },
              {
                q: "¿Qué incluye el seguro del plan Protección Total?",
                a: "Cubre daños por robo hasta $50,000 USD, asistencia legal, cerrajería de emergencia y más."
              },
              {
                q: "¿Funciona sin internet?",
                a: "Sí. El sistema tiene respaldo celular y batería para seguir funcionando sin internet o luz."
              }
            ].map((faq, i) => (
              <Card key={i} hover>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
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
            ¿Listo Para Comenzar?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Solicita una demo gratuita y descubre cuál es el plan perfecto para ti
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto">
              <Button size="lg" variant="secondary">
                Solicitar Demo Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="https://wa.me/5215512345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20planes%20de%20SecureAI" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                Hablar con Ventas
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
