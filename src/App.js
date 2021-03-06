import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Portfolio from "./Portfolio";
import About from "./About";
import Footer from "./Footer";

const App = () => {
    return(
        <div>
            <Nav />
            <Header />
            <Portfolio />
            <About />
            <Footer />
        </div>
    );
}


export default App;