import React from 'react';
import Footer from './component/section/Footer';
import FaqPage from './component/section/Faq';
import Work from './component/section/Work';
import Choose from './component/section/Choose';
import Count from './component/section/Count';
import Expat from './component/section/Expat';
import Monial from './component/section/Monial';
import Banner from './component/section/Banner';


const App = () => {
    return (
        <div>
             <Banner/>
            <Expat/>
            <Count/>
            <Choose/>
            <Work/>
            <Monial/>
            <FaqPage/>
           <Footer/>
        </div>
    );
};

export default App;