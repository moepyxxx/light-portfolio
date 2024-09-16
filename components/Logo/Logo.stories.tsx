import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "./Logo";

const meta = {
  title: "Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  decorators: (Story) => <div className="bg-primary p-10">{Story()}</div>,
  args: {},
  argTypes: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
