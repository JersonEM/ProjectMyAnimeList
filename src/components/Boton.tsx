// src/components/Boton.tsx
type BotonProps = {
  texto: string;
};

export const Boton = ({ texto }: BotonProps) => {
  return <button>{texto}</button>;
};
