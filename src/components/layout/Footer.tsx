import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <Shield className="w-8 h-8 text-cyan-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Seti Technology
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Protección inteligente con IA para hogares y negocios. Más allá de las alarmas tradicionales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h3 className="text-white font-semibold mb-4">Soluciones</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/soluciones/hogar" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
                  Para el Hogar
                </Link>
              </li>
              <li>
                <Link href="/soluciones/pyme" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
                  Para Pymes
                </Link>
              </li>
              <li>
                <Link href="/soluciones/empresa" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
                  Para Empresas
                </Link>
              </li>
              <li>
                <Link href="/tecnologia" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
                  Tecnología IA
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/casos-de-uso" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
                  Casos de Uso
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/comparador" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
                  Comparador
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
                  Demo Interactivo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-cyan-500" />
                <span>seti_technology@outlook.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-cyan-500" />
                <span>+51 914 725 255</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-cyan-500" />
                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Seti Technology. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
              Términos
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
