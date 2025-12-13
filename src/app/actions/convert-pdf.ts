'use server';

import { ai } from '@/ai/genkit';
// @ts-ignore
const PDFParser = require('pdf2json');

export async function convertPdfToMarkdown(base64Pdf: string): Promise<string> {
    try {
        // Use pdf2json for text extraction (Node-native)
        const buffer = Buffer.from(base64Pdf, 'base64');

        const textContent = await new Promise<string>((resolve, reject) => {
            const pdfParser = new PDFParser(null, 1);
            pdfParser.on("pdfParser_dataError", (errData: any) => reject(new Error(errData.parserError)));
            pdfParser.on("pdfParser_dataReady", (pdfData: any) => {
                const text = pdfParser.getRawTextContent();
                resolve(text);
            });
            pdfParser.parseBuffer(buffer);
        });

        const safeText = textContent.slice(0, 50000); // 50k chars to be safe

        const prompt = `
            You are an expert Markdown formatter.
            Refine the following raw text extracted from a PDF into clean, structured Markdown.
            
            Raw Text:
            ${safeText}
            
            Rules:
            1. Detect headers and format with #.
            2. Format lists and tables if they appear structured.
            3. Detect code blocks.
            4. Return ONLY the markdown.
        `;

        // Use Genkit generate
        const { text } = await ai.generate({
            prompt: prompt,
            config: {
                temperature: 0.3,
            }
        });

        return text;

    } catch (error: any) {
        console.error('AI PDF Conversion Error:', error);

        const errorMessage = error.message || 'Unknown error';

        return `# Error\n\nFailed to convert PDF.\n\n**Debug Info:**\n- Method: Text Extraction + Genkit\n- Message: ${errorMessage}`;
    }
}
