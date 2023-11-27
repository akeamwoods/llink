import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    LinkComponent: {
      control: {
        type: null, // Disabling control as we don't need to change it via Storybook UI
      },
    },
  },
};

export default meta;


// Ignore this logic, I've had to tweak the way the Header component works to get this hosted on GH Pages
// In reality I wouldn't be using a HashRouter and therefore could use a simple <a> tag for the link
// so the LinkComponent prop is simply to get this hosted.
type MockLinkProps = {
  to: string;
  children: React.ReactNode;
};

const MockLinkComponent: React.FC<MockLinkProps> = ({ children, to }) => (
  <a href={to}>{children}</a>
);

export const Default: StoryObj = {
  args: {
    LinkComponent: MockLinkComponent,
  },
};
