import { render, screen } from '@testing-library/react';
import { it, expect, describe, vi } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';
import GenreList from '../../src/components/GenreList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // إضافة QueryClientProvider
import { server } from '../mocks/server';
import { http, HttpResponse } from'msw';

describe('GenreList', () => {
  const queryClient = new QueryClient();

  it('should render the list of genres', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <GenreList />
      </QueryClientProvider>
    );

    const genreItems = screen.getAllByRole('listitem');
    expect(genreItems.length).toBeGreaterThan(0);
  });
  



  
});
