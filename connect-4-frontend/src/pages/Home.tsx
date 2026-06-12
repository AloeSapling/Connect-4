import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { langContext } from '@/lib/contexts';
import { useContext } from 'react';

function Home() {
    const langCtx = useContext(langContext);

    if (!langCtx) return <p>Missing language context!</p>;

    const texts = langCtx.texts.home;

    return (
        <div
            className="
            flex flex-col gap-y-5
            text-white
            text-center
            justify-center
            content-center
            items-center-safe
            text-xl
        "
        >
            <h1 className="text-6xl font-bold underline backdrop-blur-lg rounded-lg">Connect 4 Plus</h1>

            <Link to="/username">
                <Button className="bg-amber-900 hover:bg-amber-950 text-2xl rounded-lg py-3 px-8 w-fit h-fit font-semibold cursor-pointer">
                    {texts.play}
                </Button>
            </Link>
        </div>
    );
}

export default Home;
