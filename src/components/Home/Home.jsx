import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import CategoriesLists from '../CategoriesLists/CategoriesLists';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoriesLists></CategoriesLists>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;