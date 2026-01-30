"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    clientType: "hogar",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        clientType: "hogar",
        message: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-cyan-950/10 to-gray-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hablemos de Tu
            <br />
            <span className="text-gradient">Seguridad</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Nuestros expertos están listos para ayudarte a encontrar la solución perfecta
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>
              <p className="text-gray-400 mb-8">
                Estamos disponibles 24/7 para atender tus consultas y emergencias.
              </p>

              <div className="space-y-6 mb-8">
                <Card hover className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">contacto@secureai.com</p>
                    <p className="text-gray-400">ventas@secureai.com</p>
                  </div>
                </Card>

                <Card hover className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-gray-400">+52 (55) 1234-5678</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </Card>

                <Card hover className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Oficinas</h3>
                    <p className="text-gray-400">Ciudad de México, México</p>
                    <p className="text-gray-400">Av. Reforma 123, Col. Centro</p>
                  </div>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 border-cyan-500/30">
                <h3 className="text-xl font-bold mb-4">Horarios de Atención</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-semibold">10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergencias:</span>
                    <span className="font-semibold text-cyan-400">24/7</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <h2 className="text-3xl font-bold mb-6">Envíanos un Mensaje</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-green-400">¡Mensaje Enviado!</h3>
                    <p className="text-gray-400">
                      Gracias por contactarnos. Te responderemos pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="juan@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="+52 55 1234 5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Empresa (opcional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Mi Empresa S.A."
                      />
                    </div>

                    <div>
                      <label htmlFor="clientType" className="block text-sm font-medium mb-2">
                        Tipo de Cliente *
                      </label>
                      <select
                        id="clientType"
                        name="clientType"
                        required
                        value={formData.clientType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="hogar">Hogar</option>
                        <option value="pyme">Pyme</option>
                        <option value="empresa">Empresa</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                        placeholder="Cuéntanos sobre tus necesidades de seguridad..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar Mensaje
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Al enviar este formulario, aceptas nuestra política de privacidad
                    </p>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿Cuánto tiempo tarda la instalación?",
                a: "La instalación típica toma entre 2-4 horas dependiendo del tamaño de la propiedad y la cantidad de dispositivos."
              },
              {
                q: "¿Ofrecen servicio de mantenimiento?",
                a: "Sí, todos nuestros planes incluyen mantenimiento preventivo y soporte técnico 24/7."
              },
              {
                q: "¿Puedo probar el sistema antes de comprarlo?",
                a: "Sí, ofrecemos demos gratuitas y periodo de prueba de 30 días con garantía de devolución."
              },
              {
                q: "¿Qué pasa si me mudo de casa?",
                a: "Puedes llevarte el sistema contigo. Ofrecemos servicio de reinstalación a precio preferencial."
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
    </div>
  );
}
