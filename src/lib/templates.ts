export interface PdfTemplate {
  id: string;
  name: string;
  description: string;
  styles: string;
}

export const templates: PdfTemplate[] = [
  {
    id: 'minimal-clean',
    name: 'Minimal Clean',
    description: 'A clean, simple layout with ample whitespace.',
    styles: `
      .preview-container {
        font-family: 'Inter', sans-serif;
        color: #1A202C;
        line-height: 1.7;
        background-color: #fff;
      }
      .preview-container h1, .preview-container h2, .preview-container h3 {
        font-family: 'Playfair Display', serif;
        color: #2D3748;
        border-bottom: none;
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        line-height: 1.2;
      }
      .preview-container h1 { font-size: 2.5rem; }
      .preview-container h2 { font-size: 2rem; }
      .preview-container h3 { font-size: 1.75rem; }
      .preview-container a { color: hsl(var(--accent)); text-decoration: none; border-bottom: 1px solid hsl(var(--accent) / 0.5); }
      .preview-container a:hover { border-bottom-color: hsl(var(--accent)); }
      .preview-container code {
        font-family: 'JetBrains Mono', monospace;
        background-color: #f3f4f6;
        color: #1f2937;
        padding: 0.2em 0.4em;
        border-radius: 4px;
        font-size: 0.9em;
      }
      .preview-container pre {
        background-color: #f3f4f6;
        color: #1f2937;
        padding: 1em;
        border-radius: 8px;
        overflow-x: auto;
      }
      .preview-container blockquote {
        border-left: 3px solid hsl(var(--accent));
        padding-left: 1em;
        margin-left: 0;
        font-style: italic;
        color: #666;
      }
    `,
  },
  {
    id: 'academic-paper',
    name: 'Academic Paper',
    description: 'A formal template suitable for research papers.',
    styles: `
      .preview-container {
        font-family: 'Times New Roman', Times, serif;
        font-size: 12pt;
        color: #000;
        line-height: 2;
        background-color: #fff;
      }
      .preview-container h1, .preview-container h2, .preview-container h3 {
        font-family: 'Times New Roman', Times, serif;
        color: #000;
        text-align: center;
        margin-top: 24pt;
        margin-bottom: 12pt;
        font-style: normal;
        border-bottom: none;
      }
      .preview-container h1 { font-size: 16pt; font-weight: bold; }
      .preview-container h2 { font-size: 14pt; font-weight: bold; }
      .preview-container h3 { font-size: 12pt; font-weight: bold; }
      .preview-container p { text-align: justify; }
      .preview-container a { color: #000; text-decoration: underline; }
      .preview-container code, .preview-container pre, .preview-container blockquote { display: none; }
    `,
  },
  {
    id: 'business-letter',
    name: 'Business Letter',
    description: 'A professional template for formal correspondence.',
    styles: `
      .preview-container {
        font-family: 'Arial', 'Helvetica', sans-serif;
        font-size: 11pt;
        color: #333;
        line-height: 1.5;
        background-color: #fff;
      }
      .preview-container h1, .preview-container h2, .preview-container h3 {
        font-family: 'Arial', 'Helvetica', sans-serif;
        font-weight: bold;
        color: #111;
        border-bottom: 1px solid #ccc;
        padding-bottom: 0.2em;
        margin-top: 1.5em;
        margin-bottom: 1em;
      }
      .preview-container h1 { font-size: 16pt; }
      .preview-container h2 { font-size: 14pt; }
      .preview-container h3 { font-size: 12pt; }
      .preview-container a { color: #0056b3; }
      .preview-container code {
        font-family: 'Courier New', monospace;
        background-color: #f5f5f5;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 0.2em 0.4em;
      }
      .preview-container pre { padding: 1em; background-color: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; }
      .preview-container blockquote {
        border-left: 3px solid #ccc;
        padding-left: 1em;
        margin-left: 0;
        color: #666;
      }
    `,
  },
  {
    id: 'modern-resume',
    name: 'Modern Resume',
    description: 'A sleek, ATS-friendly resume layout with a sidebar.',
    styles: `
      .preview-container {
        font-family: 'Inter', sans-serif;
        color: #334155;
        line-height: 1.5;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
        background: #fff;
      }
      
      /* Reset for non-grid elements if they appear */
      .preview-container > * { grid-column: 1 / -1; }
      
      .preview-container h1 {
        grid-column: 1 / -1;
        font-size: 2.5rem;
        font-weight: 800;
        color: #0f172a;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        letter-spacing: -0.05em;
        border-bottom: 2px solid #0f172a;
        padding-bottom: 1rem;
      }
      
      .preview-container h2 {
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #64748b;
        border-bottom: 1px solid #e2e8f0;
        margin-top: 2rem;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
      }

      /* Main Content Area */
      .preview-container p, .preview-container ul, .preview-container h3, .preview-container h4 {
         grid-column: 1 / 2;
      }
      
      /* Sidebar Hack: Elements after a horizontal rule go to sidebar? 
         CSS Grid in Markdown is hard. Let's stick to a single column but clean style for now 
         as standard Markdown doesn't support columns easily without HTML.
         Reverting to Single Column Clean Resume.
      */
      
      .preview-container {
         display: block;
         max-width: 100%;
      }

       .preview-container h1 {
        text-align: center;
        border-bottom: none;
       }
       
       .preview-container h2 {
         color: #2563eb;
         border-bottom: 2px solid #2563eb;
       }
       
       .preview-container ul {
         list-style: none;
         padding-left: 0;
       }
       
       .preview-container li {
         margin-bottom: 0.5rem;
         padding-left: 1.5em;
         position: relative;
       }
       
       .preview-container li::before {
         content: "•";
         color: #2563eb;
         font-weight: bold;
         position: absolute;
         left: 0;
       }
    `,
  },
  {
    id: 'legal-contract',
    name: 'Legal Contract',
    description: 'Formal layout with numbered sections and justified text.',
    styles: `
      .preview-container {
        font-family: 'Times New Roman', Times, serif;
        font-size: 11pt;
        color: #000;
        line-height: 1.5;
        background-color: #fff;
        text-align: justify;
      }
      .preview-container h1 {
        text-align: center;
        text-transform: uppercase;
        font-size: 14pt;
        font-weight: bold;
        margin-bottom: 2rem;
        border-bottom: 1px solid #000;
        padding-bottom: 10px;
      }
      .preview-container h2 {
        font-size: 12pt;
        font-weight: bold;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
      }
      .preview-container p {
        margin-bottom: 1rem;
        text-indent: 2em;
      }
      .preview-container ul, .preview-container ol {
        margin-bottom: 1rem;
        padding-left: 2rem;
      }
      .preview-container li {
        margin-bottom: 0.5rem;
      }
    `,
  }
];
