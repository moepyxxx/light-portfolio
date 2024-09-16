import type { Meta, StoryObj } from "@storybook/react";

import { TextBox } from "./TextBox";

export type Story = StoryObj<typeof TextBox>;

const meta = {
  title: "TextBox",
  component: TextBox,
  args: {
    inputType: "password",
  },
} satisfies Meta<typeof TextBox>;

export default meta;

export const Base: Story = {};
