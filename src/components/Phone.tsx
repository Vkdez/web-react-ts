import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image"; // Importando o componente Image do Next.js

// Interface para definir as propriedades que o componente Phone pode receber
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string; // Caminho da imagem principal
  dark?: boolean; // Indica se o tema escuro deve ser usado
}

// Componente funcional que cria a visualização de um "celular"
const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      // Container principal do componente
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}
    >
      <Image
        // Imagem de fundo do "celular"
        src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"}
        className="pointer-events-none z-50 select-none"
        alt="phone image"
        width={300} // Largura e altura especificadas para otimização
        height={600}
      />

      <div className="absolute -z-10 inset-0">
        <Image
          className="object-cover"
          src={imgSrc}
          alt="overlaying phone image"
          fill // Para que a imagem ocupe todo o espaço disponível
        />
      </div>
    </div>
  );
};

export default Phone;
