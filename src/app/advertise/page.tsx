import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

export default function AdvertisePage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <AppHeader />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">Advertise on MarkdownToPDF</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Reach thousands of developers, technical writers, and students who use our tools daily.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold">100%</CardTitle>
                                <CardDescription>Targeted Audience</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Our users are actively working on documentation, resumes, and technical reports.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold">High</CardTitle>
                                <CardDescription>Engagement</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Users spend significantly longer on our site using the editor compared to passive reading.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold">Global</CardTitle>
                                <CardDescription>Reach</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Traffic from US, Europe, and major tech hubs around the world.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 mt-8">
                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <CardTitle>Sidebar Sponsorship</CardTitle>
                                <CardDescription>Premium visibility</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-sm">
                                    <li>Sticky placement next to the editor</li>
                                    <li>Visible during the entire editing session</li>
                                    <li>Image or Text format</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Footer / Banner</CardTitle>
                                <CardDescription>Brand awareness</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-sm">
                                    <li>Top of page banner</li>
                                    <li>Footer logo placement</li>
                                    <li>Flexible duration options</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex flex-col items-center justify-center p-8 bg-muted/50 rounded-lg text-center space-y-4">
                        <h2 className="text-2xl font-semibold">Interested in partnering?</h2>
                        <p className="text-muted-foreground max-w-md">
                            Contact us directly to discuss custom placements and rates. We are open to long-term partnerships.
                        </p>
                        <Button size="lg" className="gap-2" asChild>
                            <a href="mailto:partners@markdownpdfconverter.com">
                                <Mail className="h-4 w-4" />
                                Contact Sales
                            </a>
                        </Button>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}
