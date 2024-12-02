import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest';

import TermsAndConditionsDialog from '../../src/components/TermsAndConditionsDialog';

describe('TermsAndConditionsDialog', () => {
    it('should render with correct text and initial state', () => {
        const onCloseMock = vi.fn(); 
        render(<TermsAndConditionsDialog isOpen={true} onClose={onCloseMock} />)
        const heading = screen.getByText(/You must read the terms and conditions before agreeing to them./);
        expect(heading).toBeInTheDocument();

        const checkbox = screen.getByLabelText('I agree to the terms and conditions');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        const button = screen.getByRole('button', { name: /agree/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Agree');
        expect(button).toBeDisabled();
    })

    it('should enable the agree button when the checkbox is checked', () => {
        const onCloseMock = vi.fn(); 
        render(<TermsAndConditionsDialog isOpen={true} onClose={onCloseMock} />)
        const checkbox = screen.getByLabelText('I agree to the terms and conditions');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        checkbox.click();
        expect(checkbox).toBeChecked();

        const button = screen.getByRole('button', { name: /agree/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Agree');
        expect(button).not.toBeDisabled();
    })
})
