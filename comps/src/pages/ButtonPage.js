import { GoBell, GoDownload } from 'react-icons/go';
import Button from "../components/Button";


function ButtonPage() {
    const handleClick = () => {
        console.log('clicked');
    };

    return <div>
        <div>
            <Button secondary rounded className="mb-5" onClick={handleClick} >
                <GoDownload />
                Click me
            </Button>
        </div>
        <div>
            <Button danger >
                <GoDownload />
                Buy Now!
            </Button>
        </div>
        <div>
            <Button warning>
                <GoBell />
                See Deal!
            </Button>
        </div>
        <div>
            <Button secondary >
                <GoDownload />
                Hide Ads
            </Button>
        </div>
        <div>
            <Button primary rounded>
                <GoBell />
                Something!
            </Button>
        </div>
    </div>;
};

export default ButtonPage;