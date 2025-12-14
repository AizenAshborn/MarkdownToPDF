import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Check, X, Minus } from "lucide-react"

export function ComparisonTable() {
    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm my-12 overflow-hidden">
            <div className="p-4 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-4 text-center">Why we are the Best Choice</h2>
                <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                    A Side-by-Side comparison showing why <strong>MarkdownPDFConverter.com</strong> is the preferred tool for developers and writers.
                </p>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead className="w-[30%] min-w-[150px]">Feature</TableHead>
                                <TableHead className="text-center font-bold text-primary text-base sm:text-lg min-w-[150px] bg-primary/5 rounded-t-lg">MarkdownPDFConverter</TableHead>
                                <TableHead className="text-center min-w-[120px]">VSCode / CLI</TableHead>
                                <TableHead className="text-center min-w-[120px]">Other Online Tools</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="hover:bg-transparent">
                                <TableCell className="font-medium">AI-Powered Formatting</TableCell>
                                <TableCell className="text-center bg-primary/5"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                                <TableCell className="text-center"><X className="inline h-5 w-5 text-red-400" /></TableCell>
                                <TableCell className="text-center"><Minus className="inline h-5 w-5 text-muted-foreground" /></TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-transparent">
                                <TableCell className="font-medium">Free & No Watermark</TableCell>
                                <TableCell className="text-center bg-primary/5"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                                <TableCell className="text-center"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                                <TableCell className="text-center"><span className="text-red-500 text-sm font-bold">$$$</span></TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-transparent">
                                <TableCell className="font-medium">Zero Installation</TableCell>
                                <TableCell className="text-center bg-primary/5"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                                <TableCell className="text-center"><X className="inline h-5 w-5 text-red-400" /></TableCell>
                                <TableCell className="text-center"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-transparent">
                                <TableCell className="font-medium">Cloud Architecture</TableCell>
                                <TableCell className="text-center bg-primary/5"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                                <TableCell className="text-center"><Minus className="inline h-5 w-5 text-muted-foreground" /></TableCell>
                                <TableCell className="text-center"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-transparent">
                                <TableCell className="font-medium rounded-bl-lg">ATS-Friendly PDFs</TableCell>
                                <TableCell className="text-center bg-primary/5 rounded-br-lg"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                                <TableCell className="text-center"><Minus className="inline h-5 w-5 text-muted-foreground" /></TableCell>
                                <TableCell className="text-center"><Minus className="inline h-5 w-5 text-muted-foreground" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
