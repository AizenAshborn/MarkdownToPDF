'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY || '');

export async function convertPdfToMarkdown(base64Pdf: string): Promise<string> {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const prompt = `
            You are an advanced document converter. 
            Convert the attached PDF document into clean, valid Markdown.
            
            Rules:
            1. Use # for headers based on visual hierarchy.
            2. Convert tables to Markdown tables.
            3. Detect code blocks and wrap them in \`\`\` blocks with language hints if possible.
            4. Do not include any conversational text like "Here is the markdown", just return the content.
        `;

        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: base64Pdf,
                    mimeType: 'application/pdf',
                },
            },
        ]);

        return result.response.text();
    } catch (error: any) {
        console.error('AI PDF Conversion Error:', error);
        const errorMessage = error.message || 'Unknown error occurred';
        // Check if it's an API key issue
        const isKeyMissing = !process.env.GOOGLE_GENAI_API_KEY;
        return `# Error\n\nFailed to convert PDF.\n\n**Debug Details:**\n- Message: ${errorMessage}\n- API Key Present: ${isKeyMissing ? 'No' : 'Yes'}\n- Model: gemini-1.5-flash`;
    }
}
