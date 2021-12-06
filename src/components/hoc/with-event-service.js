import React from 'react';
import EventServiceContext from '../event-service-context';

const WithEventService = () => (Wrapped) => { 
    return (props) => {  
        return (
            <EventServiceContext.Consumer>
                {
                    (EventService) => {
                        return <Wrapped {...props} EventService = {EventService}/>
                    }
                }
            </EventServiceContext.Consumer>
        )
    }
};

export default WithEventService;