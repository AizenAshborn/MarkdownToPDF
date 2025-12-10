'use client';

import { useLocalStorage } from '@/hooks/use-local-storage';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { templates } from '@/lib/templates';
import { useEffect, useState } from 'react';

const StatsDashboard = () => {
    const [chartData, setChartData] = useState([]);
    const [stats] = useLocalStorage('template-stats', {});

    useEffect(() => {
        const data = templates.map(template => ({
            name: template.name,
            conversions: stats[template.id] || 0,
        })).filter(item => item.conversions > 0);
        
        setChartData(data as any);
    }, [stats]);

    const chartConfig = {
        conversions: {
            label: 'Conversions',
            color: 'hsl(var(--accent))',
        },
    } satisfies ChartConfig;

    if (chartData.length === 0) {
        return (
             <section className="py-20">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>Template Usage Statistics</CardTitle>
                        <CardDescription>
                            Your template usage will appear here once you start converting documents.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center text-muted-foreground py-10">
                        No data yet. Get started by converting a document!
                    </CardContent>
                </Card>
            </section>
        );
    }
    
    return (
        <section className="py-20">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Template Usage Statistics</CardTitle>
                    <CardDescription>
                        A look at which templates you use the most for your conversions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                         <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} angle={-10} textAnchor="end" height={50} />
                                <YAxis allowDecimals={false} />
                                <Tooltip
                                    cursor={{ fill: 'hsl(var(--muted))' }}
                                    content={<ChartTooltipContent />}
                                />
                                <Bar dataKey="conversions" fill="var(--color-conversions)" radius={4} />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>
        </section>
    );
};

export default StatsDashboard;
