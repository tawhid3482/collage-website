import { Helmet } from 'react-helmet-async';

const Helmets = ({text}) => {
    return (
        <div>
            <Helmet> 
                <title>{text}</title>
            </Helmet>
        </div>
    );
};

export default Helmets;