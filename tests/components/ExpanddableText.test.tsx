import { it, expect, describe } from 'vitest'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import React from 'react';
import ExpanddableText from '../../src/components/ExpanddableText';
import userEvent from '@testing-library/user-event';


describe('ExpanddableText', () => {
    const limit = 300;
    const longText = 'N'.repeat(limit + 1);
    const truncatedText = longText.substring(0, limit) + '...';
    it('should render the full text if leff than 300 characters', () => {
        const text = "This is a sample text.";
        render(<ExpanddableText children={text} />)
        expect(screen.getByText(text)).toBeInTheDocument();
    })
    it('should truncate text if longer than 300 characters', () => {
        render(<ExpanddableText children={longText} />)

        const button = screen.getByText('Read More');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Read More');
    })
    it('shouldexpand text when Show More button is clicked', async () => {
        render(<ExpanddableText children={longText} />)

        const button = screen.getByRole('button');
        const user = userEvent.setup();
        await user.click(button);

        expect(screen.getByText(longText)).toBeInTheDocument();
        expect(button).toHaveTextContent('Show Less');
     
    })
    it('should collapse text when Show Less button is clocked', async() => {
        render(<ExpanddableText children={longText} />)

        const showMoreButton = screen.getByRole('button', { name: /read more/i });
        const user = userEvent.setup();
        await user.click(showMoreButton);


        const showLessButton = screen.getByRole('button', { name: /show less/i });
        await user.click(showLessButton);
        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        expect(showLessButton).toHaveTextContent('Read More');

    })

})