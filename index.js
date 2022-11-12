'use strict';

let root = document.getElementById("root");

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="img/React.webp" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
function Footer() {
    return (
        <footer className="footer">
            <p>© 2022 Sus programer</p>
        </footer>
    );
}
function MainContent() {
    return (
        <div align="center">
            <h1>Why i want to learn React</h1>
            <ul className="main-list">
                <li>It looks easy</li>
                <li>I want earn more money</li>
                <li>I love programing. All right reserved</li>
            </ul>
        </div>
    );
}

function Page() {
    return (
        <div>
            <Header></Header>
            <MainContent></MainContent>
            <Footer></Footer>
        </div>
    );
}

ReactDOM.render(<Page />, root);