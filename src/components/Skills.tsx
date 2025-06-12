
import React from 'react';
import { Code, Wrench, Users } from 'lucide-react';

const Skills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Habilidades
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Combinando habilidades técnicas com soft skills para criar experiências web excepcionais
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Habilidades Técnicas */}
        <div className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
            <Code className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            Habilidades Técnicas
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              JavaScript & TypeScript
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              React & Next.js
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              HTML5 & CSS3
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Node.js & Express
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Banco de Dados
            </li>
          </ul>
        </div>

        {/* Ferramentas */}
        <div className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
            <Wrench className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            Ferramentas
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Git & GitHub
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              VS Code
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Figma & Adobe XD
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Docker
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Postman
            </li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            Soft Skills
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Comunicação Eficaz
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Trabalho em Equipe
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Resolução de Problemas
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Adaptabilidade
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Gestão de Tempo
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
