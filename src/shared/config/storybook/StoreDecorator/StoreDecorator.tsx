import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (store: DeepPartial<StateSchema>) => (Story: Story) => (
    <StoreProvider initialState={store}>
        <Story />
    </StoreProvider>
);
