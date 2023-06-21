import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <div className="my-auto">
                    <img src='https://media.tenor.com/a4SaQmo5EesAAAAi/iranserver-bluebot.gif' className="w-60"></img>
                </div>
                <h1 className="text-5xl font-extrabold my-5">404</h1>
                <p className="text-2xl"> <span className="text-red-500 font-bold">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                </p>
                <button className='bg-white'>
                    <Link to="/" className='text-black text-decoration-none font-bold btn bg-pink-400 border-0 my-5 hover:bg-purple-500'>Back to Home</Link>
                </button>
            </div>
        </div>
    );
};

export default Error;