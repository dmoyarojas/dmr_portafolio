import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ExternalLink, Github, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Plataforma E-commerce Amora Joyeria",
    description: "Plataforma de compra rápida de joyeria con API de Whatsapp",
    image: "/public/amora.jpg",
    tags: ["React", "Node.js", "Tailwind CSS", "TypeScript"],
    category: "Full-Stack",
    repoURL: "https://github.com/dmoyarojas/Diseotiendawebjoyera",
    demoURL: "https://amorajoyeria.vercel.app/",
    details: {
      overview:
        "Una plataforma de e-commerce diseñada para una pequeña empresa de joyas",
      features: [
        "Elección de productos favoritos",
        "Compra rapida mediante API de Whatsapp",
        "Filtro de productos",
      ],
      challenges:
        "El mayor desafío fue el diseño responsivo y que le gustara al cliente.",
      results:
        "Aumento el 20% en las compras mediante Whatsapp en el primer mes.",
    },
  },
  {
    id: 2,
    title: "Sistema de gestión de inventario y ventas",
    description:
      "Desarrollo total de un sistema para gestionar inventarios y ventas para la tienda de ropa Blande Store",
    image:
      "/public/sistemaBlnde.jpg",
    tags: ["MySQL", "Java", "SpringBoot", "Thymeleaf", "Supabase"],
    category: "Escritorio",
    repoURL: "https://github.com/dmoyarojas/BlandeStoreAPP",
    demoURL: "",
    details: {
      overview:
        "Aplicación de escritorio completa para gestionar inventarios, ventas y reportes en una tienda de ropa.",
      features: [
        "Gestión de inventario en tiempo real con escaner",
        "Administración de usuarios y roles",
        "Análisis de ventas y stock",
        "Control de productos y categorías",
        "Generación de reportes en PDF y Excel",

      ],
      challenges:
        "Implementación de seguridad con Spring Security. Optimización de consultas a la base de datos para manejar grandes volúmenes de datos.",
      results:
        "Mayor productividad en la gestión de inventario. Orden y control eficiente de ventas.",
    },
  },
  {
    id: 3,
    title: "Sistema de recomendación de recetas (Aun en desarrollo)",
    description:
      "Recomendador de recetas peruanas basado en los ingredientes que tengas en casa.",
    image:
      "/public/sistemadeRecetas.jpg",
    tags: ["Django", "Python", "Figma", "SQLite"],
    category: "",
    details: {
      overview:
        "Web que sugiere recetas tradicionales peruanas basadas en los ingredientes disponibles en el hogar del usuario.",
      features: [
      
        "Ingreso de ingredientes disponibles",
        "Recomendación de recetas personalizadas",
        "Instrucciones paso a paso",
        "Integración de IA",
        "Diseño responsivo y atractivo",
        
      ],
      challenges:
        "",
      results:
        "",
    },
  },
  
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en
            desarrollo de software y gestión de proyectos.
          </p>
        </motion.div>

        {/* Filter buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={
                filter === category
                  ? "bg-primary hover:bg-primary/90"
                  : "border-primary/30 hover:bg-primary/10"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div> */}

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300 group h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Ver Detalles
                    </Button>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 text-primary"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a
                        href={project.repoURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-primary/30 hover:bg-primary/10"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </Button>
                      </a>
                      <a
                        href={project.demoURL} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1" 
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-secondary/30 hover:bg-secondary/10"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} className="bg-primary/20 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div>
                  <h4 className="mb-2">Descripción General</h4>
                  <p className="text-muted-foreground">
                    {selectedProject.details.overview}
                  </p>
                </div>

                <div>
                  <h4 className="mb-3">Características Principales</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2">Desafíos Técnicos</h4>
                  <p className="text-muted-foreground">
                    {selectedProject.details.challenges}
                  </p>
                </div>

                <div>
                  <h4 className="mb-2">Resultados</h4>
                  <p className="text-muted-foreground">
                    {selectedProject.details.results}
                  </p>
                </div>

                <div className="flex gap-3 pt-4"></div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
