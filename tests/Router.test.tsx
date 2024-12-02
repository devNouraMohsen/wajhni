import '@testing-library/jest-dom';
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react';
import router from '../src/routes';
import LandingLayout from '../src/pages/LandingLayout';
import LandingPage from '../src/components/LandingPage';
import ErrorPage from '../src/pages/ErrorPage';
import GameDetailPage from '../src/pages/GameDetailPage';
import HomePage from '../src/pages/HomePage';
import Layout from '../src/pages/Layout';
import LayoutTerms from '../src/pages/LayoutTerms';
import TermsAndConditions from '../src/pages/TermsAndConditions';

describe('Router', () => {
    const queryClient = new QueryClient();
    it('should render the home page for /', () => {
        const router = createMemoryRouter([
            { path: '', element: <LandingLayout /> ,
                children: [
                    { path: '', element: <LandingPage /> }
                ]
            },
        
            { path: '/terms-and-conditions', element: <LayoutTerms />,
                children: [
                    { path: '', element: <TermsAndConditions /> }
                ]
              },
        
            {
                path: '/',
                element: <Layout />,
                errorElement: <ErrorPage />,
                children: [
                    { path: '/games' , element: <HomePage /> },
                    { path: '/games/:slug' , element: <GameDetailPage /> },
                ]
            }
        ], {
            initialEntries: ['/'],
        })
        render(<RouterProvider router={router} />)
        expect(screen.getByRole('heading',  {name: /Wajhni/i} )).toBeInTheDocument()
    })
      
    
})