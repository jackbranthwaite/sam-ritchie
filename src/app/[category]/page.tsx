'use client';

import { useParams } from 'next/navigation';
import React from 'react';

export default function CategoryPage() {
  const router = useParams();
  return <div>{router.category}</div>;
}
