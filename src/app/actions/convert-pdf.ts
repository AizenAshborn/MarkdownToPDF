'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';
// @ts-ignore
import pdf from 'pdf-parse';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY || '');

export async function convertPdfToMarkdown(base64Pdf: string): Promise<string> {
    try {
        // Fallback: Gemini 1.5 might not be enabled for this key. 
        // We will extract text manually using pdf-parse and send TEXT to gemini-pro (1.0).
        // This is more robust for older keys.

        const buffer = Buffer.from(base64Pdf, 'base64');
        const pdfData = await pdf(buffer);
        const textContent = pdfData.text;

        // Truncate if too long (Gemini Pro has 30k token limit approx, approx 100k chars safe)
        const safeText = textContent.slice(0, 100000);

        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

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

        const result = await model.generateContent(prompt);
        return result.response.text();

    } catch (error: any) {
        console.error('AI PDF Conversion Error:', error);

        // Detailed error for client
        const errorMessage = error.message || 'Unknown error';
        const isKeyMissing = !process.env.GOOGLE_GENAI_API_KEY;

        return `# Error\n\nFailed to convert PDF.\n\n**Debug Info:**\n- Method: Text Extraction + Gemini Pro\n- Message: ${errorMessage}\n- API Key: ${isKeyMissing ? 'No' : 'Yes'}`;
    }
}
