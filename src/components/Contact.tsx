import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Simulate form submission
  //   toast.success("¡Mensaje enviado! Te contactaré pronto.", {
  //     description: "Gracias por tu interés. Responderé lo antes posible.",
  //   });
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  // const contactInfo = [
  //   {
  //     icon: Mail,
  //     label: "Email",
  //     value: "alex.ramirez@example.com",
  //     href: "mailto:alex.ramirez@example.com",
  //     color: "primary",
  //   },
  //   {
  //     icon: Phone,
  //     label: "Teléfono",
  //     value: "+52 555 123 4567",
  //     href: "tel:+525551234567",
  //     color: "secondary",
  //   },
  //   {
  //     icon: MapPin,
  //     label: "Ubicación",
  //     value: "Ciudad de México, México",
  //     href: "#",
  //     color: "accent",
  //   },
  // ];

  // return (
  //   <section id="contact" className="py-20 px-4 relative overflow-hidden">
  //     {/* Background decoration */}
  //     <div className="absolute inset-0 opacity-10">
  //       <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
  //       <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
  //     </div>

  //     <div className="container mx-auto max-w-6xl relative z-10">
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true }}
  //         transition={{ duration: 0.6 }}
  //         className="text-center mb-12"
  //       >
  //         <h2 className="mb-4">
  //           <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
  //             Contacto
  //           </span>
  //         </h2>
  //         <p className="text-muted-foreground max-w-2xl mx-auto">
  //           ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y explorar cómo puedo ayudarte.
  //         </p>
  //       </motion.div>

  //       <div className="grid lg:grid-cols-3 gap-8">
  //         {/* Contact Information */}
  //         <motion.div
  //           initial={{ opacity: 0, x: -30 }}
  //           whileInView={{ opacity: 1, x: 0 }}
  //           viewport={{ once: true }}
  //           transition={{ duration: 0.6 }}
  //           className="space-y-6"
  //         >
  //           {contactInfo.map((info, index) => {
  //             const Icon = info.icon;
  //             return (
  //               <motion.a
  //                 key={info.label}
  //                 href={info.href}
  //                 initial={{ opacity: 0, y: 20 }}
  //                 whileInView={{ opacity: 1, y: 0 }}
  //                 viewport={{ once: true }}
  //                 transition={{ delay: index * 0.1, duration: 0.5 }}
  //                 whileHover={{ scale: 1.05 }}
  //                 className="block"
  //               >
  //                 <Card className={`p-6 border-${info.color}/30 hover:border-${info.color} transition-all duration-300 cursor-pointer`}>
  //                   <div className="flex items-start gap-4">
  //                     <div
  //                       className={`p-3 rounded-lg ${
  //                         info.color === "primary"
  //                           ? "bg-primary/20"
  //                           : info.color === "secondary"
  //                           ? "bg-secondary/20"
  //                           : "bg-accent/20"
  //                       }`}
  //                     >
  //                       <Icon
  //                         className={`h-6 w-6 ${
  //                           info.color === "primary"
  //                             ? "text-primary"
  //                             : info.color === "secondary"
  //                             ? "text-secondary"
  //                             : "text-accent"
  //                         }`}
  //                       />
  //                     </div>
  //                     <div>
  //                       <h4 className="mb-1">{info.label}</h4>
  //                       <p className="text-muted-foreground">{info.value}</p>
  //                     </div>
  //                   </div>
  //                 </Card>
  //               </motion.a>
  //             );
  //           })}

  //           {/* Quick Info */}
  //           <motion.div
  //             initial={{ opacity: 0, y: 20 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             viewport={{ once: true }}
  //             transition={{ delay: 0.4, duration: 0.6 }}
  //           >
  //             <Card className="p-6 border-border bg-gradient-to-br from-primary/5 to-secondary/5">
  //               <h4 className="mb-3">Disponibilidad</h4>
  //               <p className="text-muted-foreground mb-4">
  //                 Actualmente disponible para proyectos freelance y colaboraciones. 
  //                 Tiempo de respuesta: 24-48 horas.
  //               </p>
  //               <div className="flex items-center gap-2">
  //                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
  //                 <span className="text-green-500">Disponible para proyectos</span>
  //               </div>
  //             </Card>
  //           </motion.div>
  //         </motion.div>

  //         {/* Contact Form */}
  //         <motion.div
  //           initial={{ opacity: 0, x: 30 }}
  //           whileInView={{ opacity: 1, x: 0 }}
  //           viewport={{ once: true }}
  //           transition={{ duration: 0.6 }}
  //           className="lg:col-span-2"
  //         >
  //           <Card className="p-8 border-border">
  //             <form onSubmit={handleSubmit} className="space-y-6">
  //               <div className="grid sm:grid-cols-2 gap-6">
  //                 <div className="space-y-2">
  //                   <label htmlFor="name">Nombre</label>
  //                   <Input
  //                     id="name"
  //                     placeholder="Tu nombre"
  //                     value={formData.name}
  //                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
  //                     required
  //                     className="bg-input-background border-border focus:border-primary"
  //                   />
  //                 </div>
  //                 <div className="space-y-2">
  //                   <label htmlFor="email">Email</label>
  //                   <Input
  //                     id="email"
  //                     type="email"
  //                     placeholder="tu@email.com"
  //                     value={formData.email}
  //                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
  //                     required
  //                     className="bg-input-background border-border focus:border-primary"
  //                   />
  //                 </div>
  //               </div>

  //               <div className="space-y-2">
  //                 <label htmlFor="subject">Asunto</label>
  //                 <Input
  //                   id="subject"
  //                   placeholder="¿En qué puedo ayudarte?"
  //                   value={formData.subject}
  //                   onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
  //                   required
  //                   className="bg-input-background border-border focus:border-primary"
  //                 />
  //               </div>

  //               <div className="space-y-2">
  //                 <label htmlFor="message">Mensaje</label>
  //                 <Textarea
  //                   id="message"
  //                   placeholder="Cuéntame sobre tu proyecto..."
  //                   rows={6}
  //                   value={formData.message}
  //                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
  //                   required
  //                   className="bg-input-background border-border focus:border-primary resize-none"
  //                 />
  //               </div>

  //               <Button
  //                 type="submit"
  //                 className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 group"
  //               >
  //                 <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
  //                 Enviar Mensaje
  //               </Button>
  //             </form>
  //           </Card>
  //         </motion.div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
