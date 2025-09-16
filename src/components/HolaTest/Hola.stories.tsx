import type { Meta, StoryObj } from '@storybook/react';
import { Hola } from './Hola';

const meta: Meta<typeof Hola> = {
  component: Hola,
  title: 'Ejemplo/Hola',
};
export default meta;

type Story = StoryObj<typeof Hola>;

export const Saludo: Story = {
  args: {
    mensaje: '¡Hola desde Storybook!',
  },
};
