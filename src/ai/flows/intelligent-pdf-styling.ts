'use server';

/**
 * @fileOverview Implements the Intelligent PDF Styling flow using Genkit.
 *
 * - intelligentPdfStyling - Main function to customize PDF styling.
 * - IntelligentPdfStylingInput - Input type for the function.
 * - IntelligentPdfStylingOutput - Output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentPdfStylingInputSchema = z.object({
  baseTemplate: z
    .string()
    .describe('The base template to use for styling the PDF.'),
  fontFamily: z
    .string()
    .optional()
    .describe('The font family to use for the PDF content.'),
  primaryColor: z
    .string()
    .optional()
    .describe('The primary color to use for the PDF theme (hex code).'),
  backgroundColor: z
    .string()
    .optional()
    .describe('The background color to use for the PDF (hex code).'),
  headerText: z
    .string()
    .optional()
    .describe('Text to include in the PDF header.'),
  footerText: z
    .string()
    .optional()
    .describe('Text to include in the PDF footer.'),
  marginSize: z
    .string()
    .optional()
    .describe('Size of the margin to use in the PDF, e.g., small, medium, large.'),
  spacingSize: z
    .string()
    .optional()
    .describe('Size of the spacing to use in the PDF, e.g., small, medium, large.'),
});

export type IntelligentPdfStylingInput = z.infer<
  typeof IntelligentPdfStylingInputSchema
>;

const IntelligentPdfStylingOutputSchema = z.object({
  pdfStylingSchema: z
    .string()
    .describe('The generated PDF styling schema in JSON format.'),
});

export type IntelligentPdfStylingOutput = z.infer<
  typeof IntelligentPdfStylingOutputSchema
>;

export async function intelligentPdfStyling(
  input: IntelligentPdfStylingInput
): Promise<IntelligentPdfStylingOutput> {
  return intelligentPdfStylingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentPdfStylingPrompt',
  input: {schema: IntelligentPdfStylingInputSchema},
  output: {schema: IntelligentPdfStylingOutputSchema},
  prompt: `You are an AI assistant designed to generate PDF styling schemas based on user preferences.

  The user will provide a base template and optional styling parameters such as font family, colors, header/footer text, margins and spacing sizes.

  Your goal is to create a JSON-formatted PDF styling schema that incorporates these parameters in a format-compliant way.

  Here are the parameters provided by the user:
  Base Template: {{{baseTemplate}}}
  Font Family: {{{fontFamily}}}
  Primary Color: {{{primaryColor}}}
  Background Color: {{{backgroundColor}}}
  Header Text: {{{headerText}}}
  Footer Text: {{{footerText}}}
  Margin Size: {{{marginSize}}}
  Spacing Size: {{{spacingSize}}}

  Ensure the output is a valid JSON object that can be directly used to style a PDF document.
  {
    "fontFamily": "Inter, sans-serif",
    "primaryColor": "#2D3748",
    "backgroundColor": "#F1F3F5",
    "header": {
      "text": "Your Header Text",
      "style": {
        "fontSize": 12,
        "color": "#1A202C"
      }
    },
    "footer": {
      "text": "Your Footer Text",
      "style": {
        "fontSize": 10,
        "color": "#718096"
      }
    },
    "margins": {
      "top": 20,
      "bottom": 20,
      "left": 25,
      "right": 25
    },
    "spacing": {
      "paragraph": 10,
      "line": 1.5
    }
  }
  Follow the base template and optional styling parameters.
  Do not make up options, only use what has been provided.
  If optional styling parameters are left blank, use reasonable defaults.
`,
});

const intelligentPdfStylingFlow = ai.defineFlow(
  {
    name: 'intelligentPdfStylingFlow',
    inputSchema: IntelligentPdfStylingInputSchema,
    outputSchema: IntelligentPdfStylingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
