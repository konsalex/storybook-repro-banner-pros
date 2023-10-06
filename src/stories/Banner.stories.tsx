import type { Meta, StoryObj, StoryFn } from '@storybook/react';

import Banner from './Banner';
import {ComponentProps} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta:  Meta<typeof Banner>= {
  title: 'Example/Banner',
  component: Banner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} ;

export default meta;

const Template: StoryFn<ComponentProps<typeof Banner>> = (args) => (
    <Banner {...args} />
);

export const DefaultBanner = Template.bind({});
DefaultBanner.args = {
  title: 'Banner Title',
  description: 'Banner description',
  closeable: true,
};
