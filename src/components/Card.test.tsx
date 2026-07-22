import { expect, test, describe} from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import React from 'react';


describe('Card test', () => {
    test('should show text', () => {
        const textTest = "test"
        render(<Card text={textTest} />)
        const getText = screen.getByText(textTest)
        expect(getText).to.exist
    })
})