import type { Meta, StoryObj } from '@storybook/react';

import Card from '.';
import CardHeader from '../CardHeader';
import Typography from '../Typography';
import Button from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    header: <CardHeader title="Word of the Day" />,
    hasHeaderDivider: true,
    children: (
      <Typography variant="caption">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    ),
    actions: (
      <>
        <Button variant="secondary">Share</Button>
        <Button variant="secondary">Learn more</Button>
      </>
    ),
  },
  parameters: {
    controls: {
      include: ['hasHeaderDivider', 'variant'],
    },
  },
};

export const Media: Story = {
  args: {
    imgUrl:
      'https://i.pinimg.com/736x/34/df/ee/34dfeed20d644ba572bd2d8d31bc8d77.jpg',
    children: (
      <>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="caption">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </>
    ),
    actions: (
      <>
        <Button variant="secondary">Share</Button>
        <Button variant="secondary">Learn more</Button>
      </>
    ),
  },
  parameters: {
    controls: {
      include: ['variant', 'imgUrl', 'imgHeight'],
    },
  },
};

export default meta;
