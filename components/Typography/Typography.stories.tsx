import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta = {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "ご覧いただき、ありがとうございます😊",
    element: "h1",
    size: "large",
    color: "primary",
  },
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {};

export const Heading2: Story = {
  args: {
    size: "medium",
    element: "h2",
    color: "text",
    children: "スマートフォンサイト『あいうえおんがく』",
  },
};

export const Paragraph: Story = {
  args: {
    element: "p",
    size: "medium",
    children:
      "スマートフォンサイト『あいうえおんがく』は、スマートフォンで音楽を楽しむためのサイトです。",
  },
};

export const English: Story = {
  args: {
    element: "p",
    size: "small",
    children: "Welcome to My Portfolio Site",
    family: "en",
  },
};
