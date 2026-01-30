"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  Plus, 
  Edit, 
  Trash2, 
  Shield,
  Search
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AdminServiciosPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin_logged_in");
    if (!isLoggedIn) {
      router.push("/admin/login");
    }
  }, [router]);

  // Datos de ejemplo (en producción vendrían de la base de datos)
  const servicios = [
    { id: 1, title: "Alarmas con Monitoreo 24/7", category: "monitoring", isActive: true },
    { id: 2, title: "CCTV Inteligente con IA", category: "cctv", isActive: true },
    { id: 3, title: "Control de Accesos Inteligente", category: "access", isActive: true },
    { id: 4, title: "Integración Total de Sistemas", category: "integration", isActive: true },
    { id: 5, title: "App Móvil Avanzada", category: "app", isActive: true },
    { id: 6, title: "Notificaciones Inteligentes", category: "notifications", isActive: true },
    { id: 7, title: "Sensores de Incendio y Humo", category: "sensors", isActive: true },
    { id: 8, title: "Sensores de Inundación", category: "sensors", isActive: true },
    { id: 9, title: "Sensores Ambientales IoT", category: "iot", isActive: true },
    { id: 10, title: "Geolocalización GPS", category: "gps", isActive: true },
    { id: 11, title: "Automatizaciones Inteligentes", category: "automation", isActive: true },
  ];

  const filteredServicios = servicios.filter(servicio =>
    servicio.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard">
                <Button size="sm" variant="ghost">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold">Gestión de Servicios</h1>
                <p className="text-xs text-gray-400">{servicios.length} servicios totales</p>
              </div>
            </div>
            <Button size="sm" variant="primary">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Servicio
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar servicios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServicios.map((servicio) => (
            <Card key={servicio.id} hover>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{servicio.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      servicio.isActive 
                        ? 'bg-green-500/10 text-green-400' 
                        : 'bg-gray-500/10 text-gray-400'
                    }`}>
                      {servicio.isActive ? 'Activo' : 'Inactivo'}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-400">
                      {servicio.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-4 border-t border-gray-800">
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="w-4 h-4 mr-2" />
                  Editar
                </Button>
                <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredServicios.length === 0 && (
          <Card className="text-center py-12">
            <p className="text-gray-400">No se encontraron servicios</p>
          </Card>
        )}

        {/* Info Box */}
        <Card className="mt-8 bg-cyan-950/20 border-cyan-500/30">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Panel de Administración - Demo</h4>
              <p className="text-sm text-gray-300 mb-2">
                Este es un panel de administración de demostración. En producción, las funcionalidades incluirían:
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Crear, editar y eliminar servicios conectados a la base de datos</li>
                <li>• Subir imágenes e iconos para cada servicio</li>
                <li>• Gestionar características y beneficios de forma dinámica</li>
                <li>• Ordenar servicios mediante drag & drop</li>
                <li>• Activar/desactivar servicios sin eliminarlos</li>
                <li>• Historial de cambios y auditoría</li>
              </ul>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
