import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "./Card";

const meta: Meta<CardProps> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    avatar: "avatar.svg",
  },
  tags: ["autodocs"],
  argTypes: {
    avatar: { control: "text" },
    author: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    author: "John Doe",
    avatar: "avatar.svg",
    title: "Sample Title",
    description: "This is a sample description",
  },
};

export const WithDescription: Story = {
  args: {
    author: "Jane Smith",
    avatar: "avatar.svg",
    title: "Another Title",
    description: "Another interesting description",
  },
};

export const WithoutDescription: Story = {
  args: {
    author: "Alex Johnson",
    avatar: "avatar.svg",
    title: "Title Without Description",
  },
};
