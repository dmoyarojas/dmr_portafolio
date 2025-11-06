import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Code, Database, Layout, Server, Smartphone, Zap } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    color: "primary",
    skills: ["React", "TypeScript", "Bootstrap", "Tailwind CSS", "Thymeleaf" ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "secondary",
    skills: ["Node.js", "Python", "Java",  "Django", "Spring Boot" ],
  },
  {
    icon: Database,
    title: "Base de Datos",
    color: "accent",
    skills: ["PostgreSQL", "SQL Server", "Redis", "MySQL", "Supabase"],
  },
  // {
  //   icon: Smartphone,
  //   title: "Mobile",
  //   color: "primary",
  //   skills: ["React Native", "Flutter", "Ionic", "PWA"],
  // },
  {
    icon: Layout,
    title: "UI/UX",
    color: "secondary",
    skills: ["Figma",  "Responsive Design"],
  },
  {
    icon: Zap,
    title: "DevOps",
    color: "accent",
    skills: ["Docker", "CI/CD", "Git","Scrum"],
  },
];

export function Skills() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experiencia en diversas tecnologías y frameworks modernos para desarrollar soluciones completas y escalables.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = {
              primary: "border-primary/30 hover:border-primary bg-primary/5",
              secondary: "border-secondary/30 hover:border-secondary bg-secondary/5",
              accent: "border-accent/30 hover:border-accent bg-accent/5",
            };

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  colorClasses[category.color as keyof typeof colorClasses]
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      category.color === "primary"
                        ? "bg-primary/20"
                        : category.color === "secondary"
                        ? "bg-secondary/20"
                        : "bg-accent/20"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        category.color === "primary"
                          ? "text-primary"
                          : category.color === "secondary"
                          ? "text-secondary"
                          : "text-accent"
                      }`}
                    />
                  </div>
                  <h3>{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-card/50 hover:bg-card transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            // { value: "5+", label: "Años de Experiencia" },
            // { value: "50+", label: "Proyectos Completados" },
            // { value: "30+", label: "Clientes Satisfechos" },
            // { value: "15+", label: "Tecnologías" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <div className="text-3xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
