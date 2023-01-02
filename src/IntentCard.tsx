import {Intent, Expressions} from "./types/types";
import './IntentCard.scss';
import addButton from './icons/add.svg';
import addedIcon from './icons/added.png';
import removeIcon from './icons/delete.svg';
import { useState } from 'react';

/**
 * @param props intent, selectIntent
 * @returns Intent Cards
 */
const IntentCard = (props: { intent: Intent, selectIntent: any}) =>
{
    const cardSelectEvent = ()=>{
        setIsAddIcon(!isAddIcon);
        props.selectIntent(props.intent);
    }
    
    const [isAddIcon, setIsAddIcon]= useState<Boolean>(true);
    return (
        <div className="card-container" tabIndex={0} aria-label={'Intent Card'}>
            <div className="overlay-top">
                <div className='exp-card-head'>
                    Intent Expample
                </div>
                <p>
                    User: {props.intent.trainingData.expressions[0].text}
                </p>
                <p>
                    AI: {props.intent.reply.text}
                </p>
            </div>
            <div className='card-head'>
                { !isAddIcon &&
                    <img src={addedIcon} alt="Added" className='added-icon'/>
                }
                {props.intent.name}
            </div>
            <div className='expressions'>
                <p className='bold-class sub-heading-card'>Training Expressions </p>
                {
                    props.intent.trainingData.expressions.map((expression: Expressions) =>{
                        return (
                            <span key={expression.text}>{expression.text} | </span>
                        )
                    })
                }
            </div>
            <div className='reply'>
                <p className='bold-class sub-heading-card'>
                    Reply
                </p> 
                <span>
                    {props.intent.reply.text}
                </span>
            </div>
            <div className='intent-text'>
                Intent
            </div>
            {
                isAddIcon ?
                <img 
                    tabIndex={0} 
                    data-testid="add-button" 
                    src={addButton} 
                    alt="Add" 
                    className='svgAdd' 
                    onKeyPress={(e)=>{if(e.charCode === 13){cardSelectEvent()}}} 
                    onClick={() => cardSelectEvent()}
                /> :
                <>
                <img 
                    tabIndex={0} 
                    data-testid="remove-button" 
                    src={removeIcon} 
                    alt="Remove" 
                    className='svgRemove' 
                    onKeyPress={(e)=>{if(e.charCode === 13){cardSelectEvent()}}} 
                    onClick={() => cardSelectEvent()}
                />
                </>
            }
        </div>
    )
}

export default IntentCard;
