import { SimulatedAd } from "./simulated-ad";
import { PlaceholderAd } from "@/lib/placeholder-images";

type AppFooterProps = {
    ad?: PlaceholderAd;
}

const AppFooter = ({ ad }: AppFooterProps) => {
    return (
        <footer className="py-6 md:px-8 md:py-0 z-10">
            <div className="container flex flex-col items-center justify-center gap-4">
                <div className="mb-4 w-full max-w-4xl">
                    {ad && <SimulatedAd {...ad} />}
                </div>

                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by an expert user experience designer.
                </p>
            </div>
        </footer>
    );
}

export default AppFooter;
