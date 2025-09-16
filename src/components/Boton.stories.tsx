// src/components/Boton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Boton } from './Boton';

const meta: Meta<typeof Boton> = {
  component: Boton,
  title: 'Ejemplo/Boton',
};

export default meta;

type Story = StoryObj<typeof Boton>;

export const Primario: Story = {
  args: {
    texto: 'Click aquí',
  },
};
