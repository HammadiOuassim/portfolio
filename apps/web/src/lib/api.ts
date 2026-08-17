import type { Portfolio } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export async function getPortfolio(): Promise<Portfolio> {
  const res = await fetch(`${API_URL}/api/portfolio`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch portfolio data');
  }

  return res.json();
}
