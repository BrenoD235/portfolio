// import React from "react";
// import { ExternalLink, Github, Clock, Code } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";
// import { portfolioData } from "../mock";

// const Projects = () => {
//   const { projects } = portfolioData;

//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case "em planejamento":
//         return "bg-yellow-100 text-yellow-800 border-yellow-200";
//       case "em desenvolvimento":
//         return "bg-blue-100 text-blue-800 border-blue-200";
//       case "concluído":
//         return "bg-green-100 text-green-800 border-green-200";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-200";
//     }
//   };

//   return (
//     <section id="projects" className="py-20 bg-white dark:bg-[#131314]">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Projetos
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
//             Projetos que estou desenvolvendo para aplicar meus conhecimentos
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <Card
//               key={project.id}
//               className="border-0 shadow-sm dark:bg-[#1b1a1f] dark:shadow-lg hover:shadow-md dark:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               <CardHeader className="pb-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <CardTitle className="text-xl text-gray-900 dark:text-white">
//                     {project.title}
//                   </CardTitle>
//                   <Badge
//                     variant="outline"
//                     className={`${getStatusColor(
//                       project.status
//                     )} flex items-center`}
//                   >
//                     <Clock size={12} className="mr-1" />
//                     {project.status}
//                   </Badge>
//                 </div>
//               </CardHeader>

//               <CardContent className="pt-0">
//                 <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
//                   {project.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="mb-6">
//                   <p className="text-sm font-medium text-#1E1E1E dark:text-gray-300 mb-2">
//                     Tecnologias:
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, index) => (
//                       <Badge
//                         key={index}
//                         variant="secondary"
//                         className="text-xs bg-gray-200 dark:bg-[#2a2a2f] text-gray-700 dark:text-[#e5e5e5] border-gray-300 dark:border-[#3a3a3f]"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex gap-2">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="flex-1 text-gray-500 dark:text-[#a3a3a3] cursor-not-allowed border-gray-300 dark:border-[#2a2a2f] dark:bg-[#1b1a1f]"
//                     disabled
//                   >
//                     <Github size={16} className="mr-1" />
//                     Em breve
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="flex-1 text-gray-500 dark:text-[#a3a3a3] cursor-not-allowed border-gray-300 dark:border-[#2a2a2f] dark:bg-[#1b1a1f]"
//                     disabled
//                   >
//                     <ExternalLink size={16} className="mr-1" />
//                     Em breve
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Future Projects Section */}
//         <div className="mt-16">
//           <Card className="border-0 shadow-sm dark:bg-[#1b1a1f] dark:shadow-lg max-w-4xl mx-auto">
//             <CardContent className="p-8 text-center">
//               <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Code size={32} className="text-gray-600 dark:text-gray-300" />
//               </div>
//               <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
//                 Próximos Projetos
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
//                 Estou planejando desenvolver projetos que demonstrem minhas
//                 habilidades em diferentes áreas do desenvolvimento web.
//               </p>

//               <div className="grid md:grid-cols-3 gap-6 mt-8">
//                 <div className="text-center">
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
//                     Landing Page
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-400 text-sm">
//                     Uma página responsiva com HTML, CSS e JavaScript
//                   </p>
//                 </div>
//                 <div className="text-center">
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
//                     Calculadora
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-400 text-sm">
//                     Aplicação interativa para praticar lógica de programação
//                   </p>
//                 </div>
//                 <div className="text-center">
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
//                     To-Do App
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-400 text-sm">
//                     Gerenciador de tarefas com localStorage
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
