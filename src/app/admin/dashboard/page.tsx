"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Package, 
  MessageSquare,
  LogOut,
  Shield,
  TrendingUp,
  Eye,
  Mail
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AdminDashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Verificar si está logueado
    const isLoggedIn = localStorage.getItem("admin_logged_in");
    if (!isLoggedIn) {
      router.push("/admin/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_logged_in");
    router.push("/admin/login");
  };

  const menuItems = [
    { icon: FileText, label: "Servicios", href: "/admin/servicios", color: "cyan" },
    { icon: Users, label: "Soluciones", href: "/admin/soluciones", color: "blue" },
    { icon: Package, label: "Planes", href: "/admin/planes", color: "purple" },
    { icon: MessageSquare, label: "Testimonios", href: "/admin/testimonios", color: "cyan" },
    { icon: FileText, label: "Casos de Uso", href: "/admin/casos-de-uso", color: "blue" },
    { icon: Mail, label: "Contactos", href: "/admin/contactos", color: "purple" },
  ];

  const stats = [
    { label: "Servicios", value: "11", icon: FileText, color: "cyan" },
    { label: "Planes", value: "4", icon: Package, color: "blue" },
    { label: "Testimonios", value: "3", icon: MessageSquare, color: "purple" },
    { label: "Contactos", value: "0", icon: Mail, color: "cyan" },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-cyan-500" />
              <div>
                <h1 className="text-xl font-bold">Panel de Administración</h1>
                <p className="text-xs text-gray-400">SecureAI</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" target="_blank">
                <Button size="sm" variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Sitio
                </Button>
              </Link>
              <Button size="sm" variant="ghost" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Bienvenido al Panel</h2>
          <p className="text-gray-400">Gestiona todo el contenido de tu sitio web desde aquí</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} hover className="relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-20 h-20 bg-${stat.color}-500/10 rounded-bl-full`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${stat.color}-500/10 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Gestión de Contenido</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <Card hover glow className="cursor-pointer group">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-xl bg-${item.color}-500/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-7 h-7 text-${item.color}-500`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{item.label}</h4>
                      <p className="text-sm text-gray-400">Gestionar {item.label.toLowerCase()}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-xl font-bold mb-4">Actividad Reciente</h3>
          <Card>
            <div className="text-center py-12">
              <LayoutDashboard className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No hay actividad reciente</p>
              <p className="text-sm text-gray-500 mt-2">
                Las acciones realizadas aparecerán aquí
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
