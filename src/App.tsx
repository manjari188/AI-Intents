import { useEffect, useState } from 'react';
import './app.scss';
import IntentCard from './IntentCard';
import {fetchIntentData} from "./intentData";
import {Intent} from "./types/types";

/**
 * Main component
 * @returns App Component
 */
function App() {
    const [intentData, setIntentData]= useState<Intent[]>([]);
    const selectedIntents = [] as Intent[];

    const selectIntent = (intent: Intent)=>{
        if (!selectedIntents.includes(intent)) {
            selectedIntents.push(intent);
        } else {
            let index = selectedIntents.indexOf(intent);
            if (index !== -1) {
                selectedIntents.splice(index, 1);
            }
        }
        /*
         * selectedIntents: This is where final data is being stored based on what has client selected
         * just kept the console to log the selection we can remove when using the data somewhere.
        */
        console.log(selectedIntents);
    };

    useEffect(
        () => {
            if (intentData.length === 0) {
                fetchIntentData().then(resp => {
                    setIntentData(resp.data);
                });
            }
        },
        [intentData.length]
    )

    return (
        <div className="App">
            <header>AI Bot Wizard</header>
            <div className="IntentCardContainer">
                {intentData.map((data: Intent) =>
                {
                    return (
                        <IntentCard 
                        intent={data} 
                        key={data.id} 
                        selectIntent={selectIntent}
                        />
                    )
                })
                }
            </div>           
        </div>
    );
}

export default App;
