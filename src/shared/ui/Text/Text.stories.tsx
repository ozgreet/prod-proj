import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextProps, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template:ComponentStory<typeof Text> = (args: TextProps) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text',
};

export const Title = Template.bind({});
Title.args = {
    title: 'Title',
};

export const TextOnly = Template.bind({});
TextOnly.args = {
    text: 'Text',
};

export const TitleAndTextDark = Template.bind({});
TitleAndTextDark.args = {
    title: 'Title',
    text: 'Text',
};
TitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR,
};
