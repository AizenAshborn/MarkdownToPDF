'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { intelligentPdfStyling, IntelligentPdfStylingInput } from '@/ai/flows/intelligent-pdf-styling';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import type { PdfTemplate } from '@/lib/templates';
import { useToast } from '@/hooks/use-toast';
import { Loader } from 'lucide-react';

const formSchema = z.object({
    fontFamily: z.string().optional(),
    primaryColor: z.string().optional(),
    backgroundColor: z.string().optional(),
    headerText: z.string().optional(),
    footerText: z.string().optional(),
});

type StylePanelProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    baseTemplate: PdfTemplate;
    onStylesGenerated: (styles: string) => void;
};

const StylePanel = ({ isOpen, setIsOpen, baseTemplate, onStylesGenerated }: StylePanelProps) => {
    const { toast } = useToast();
    const [isGenerating, setIsGenerating] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fontFamily: "",
            primaryColor: "",
            backgroundColor: "",
            headerText: "",
            footerText: ""
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsGenerating(true);
        try {
            const input: IntelligentPdfStylingInput = {
                baseTemplate: baseTemplate.name,
                ...values,
            };

            const result = await intelligentPdfStyling(input);
            const styleObject = JSON.parse(result.pdfStylingSchema);
            
            const css = `
                .preview-container {
                    ${styleObject.fontFamily ? `font-family: ${styleObject.fontFamily};` : ''}
                    ${styleObject.backgroundColor ? `background-color: ${styleObject.backgroundColor};` : ''}
                    ${styleObject.primaryColor ? `color: ${styleObject.primaryColor};` : ''}
                }
                .preview-container h1, .preview-container h2, .preview-container h3, .preview-container h4, .preview-container h5, .preview-container h6 {
                    ${styleObject.primaryColor ? `color: ${styleObject.primaryColor};` : ''}
                }
            `;
            
            onStylesGenerated(css);
            toast({
                title: 'Styles Applied!',
                description: 'The AI-generated styles have been applied to your preview.',
            });
            setIsOpen(false);
        } catch (error) {
            console.error('Error generating styles:', error);
            toast({
                variant: 'destructive',
                title: 'Something went wrong',
                description: 'Could not generate styles. Please try again.',
            });
        } finally {
            setIsGenerating(false);
        }
    };
    
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className="sm:max-w-md">
                <SheetHeader>
                    <SheetTitle>Intelligent Styling</SheetTitle>
                    <SheetDescription>
                        Use AI to customize your PDF's appearance. Leave fields blank to use defaults.
                    </SheetDescription>
                </SheetHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-6">
                        <FormField
                            control={form.control}
                            name="fontFamily"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Font Family</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., 'Helvetica', sans-serif" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="primaryColor"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Primary Color (Text/Headings)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="#2D3748" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="backgroundColor"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Background Color</FormLabel>
                                    <FormControl>
                                        <Input placeholder="#FFFEF7" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <SheetFooter>
                            <Button type="submit" disabled={isGenerating} className="w-full">
                                {isGenerating ? <Loader className="animate-spin mr-2"/> : null}
                                {isGenerating ? 'Generating...' : 'Apply Styles'}
                            </Button>
                        </SheetFooter>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    );
};

export default StylePanel;
