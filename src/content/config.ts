//
//  config.ts
//  CV Hub
//
//  Created by Alexander Gusarov on 03.03.2026.
//  @spartan121
//
import { defineCollection, z } from 'astro:content';

// TEMP: relaxed schemas to unblock development.
// Once content is stable, we can re-introduce strict schemas section-by-section.

const cv = defineCollection({
  type: 'data',
  schema: z.any(),
});

const showcase = defineCollection({
  type: 'data',
  schema: z.any(),
});

export const collections = {
  cv,
  showcase,
};