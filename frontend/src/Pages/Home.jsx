import React from 'react';
import EventList from '../Components/EventList';

function Home(){
    return(
        <div>
            <h1>Home page</h1>
            <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
            <EventList />
        </div>
    )

}
export default Home;