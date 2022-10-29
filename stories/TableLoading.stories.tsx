import React from 'react';
import { Meta, Story } from '@storybook/react';

import { TableLoading, TableLoadingProps } from '../src';

const meta: Meta = {
  title: 'React Bootstrap Table Loading',
  component: TableLoading,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TableLoadingProps> = args => <table width="100%"><TableLoading {...args} /></table>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  columns: 4,
  lines: 4
};

export const CustomColumnSizes = Template.bind({});

CustomColumnSizes.args = {
  columns: [
    { min: 2, max: 4 }, 
    { min: 4, max: 10 }, 
    { min: 4, max: 12 },
    { min: 4, max: 8 }
  ],
  lines: 4
};