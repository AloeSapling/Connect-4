import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { langContext } from '@/lib/contexts';
import { useContext } from 'react';

function Home() {

    const langCtx = useContext(langContext);
    
    if (!langCtx) return <p>Missing language context!</p>;
    
    const texts = langCtx.texts.home;

    return (
        <div className="
            absolute
            top-[50%] left-[50%]
            translate-x-[-50%] translate-y-[-50%]
            flex flex-col gap-y-5
            text-white
            text-center
            justify-between
            content-center
            items-center-safe
            text-xl
        ">
            <h1 className='text-5xl'>
                Connect 4
            </h1>

            <Link to="/username">
                <Button className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer">
                    {texts.play}
                </Button>
            </Link>

            <Link to="/settings">
                <Button className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer">
                    {texts.settings}
                </Button>
            </Link>

            {/* <Link to="/game">
                <Button className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer">
                    Game
                </Button>
            </Link> */}

            {/* <Link to="/sigma">
                <Button className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer">
                    Invalid Path
                </Button>
            </Link> */}
        </div>
    );
}

export default Home;
