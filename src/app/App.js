import Head from 'next/head';
import Section from './Section.js'

const App = () => {
    return ( 
        <>
        <Head>
        <link rel="icon" href="/img/logo.png" type="image/x-icon" />
        </Head>
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