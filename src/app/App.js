import Section from './Section.js'

const App = () => {
    return ( 
        <>
        <Header />
        <Section />
        </>
     );
}
 
export default App;

function Header(){
    return (
        <header>
            <span className="logo"></span>
            <h1>Calculator Web App</h1>
            <span>
            </span>
        </header>
    )
}