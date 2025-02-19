import "./Home.css";

export default function Home() {
    return (
        <div className="home">
            <div className="wrapper">
                <div className="text-holder">
                    <div className="info">
                        <h1>Student's Association Of Computer Science</h1>
                        <h5>Department of Computer Science</h5>
                    </div>

                    <div className="quote">
                        <h5>
                            "Collaboration is the fuel that allows common people
                            to attain uncommon results."
                        </h5>
                        <h5 className="quoter">- Andrew Carnegie</h5>
                    </div>
                </div>
                <img src="./img/hero-img.svg" alt="community" />
            </div>
        </div>
    );
}
