import React from 'react';
import BenefitsItem from '../BenefitsItem/BenefitsItem';
import styles from "./benefits.module.scss"

const Benefits = () => {
    const benefits = [
        {topText:"мы",title:"1",bottomText:"на рынке", corner: 125},
        {topText:"гарантируем",title:"50%",bottomText:"безопасность", corner: 225},
        {topText:"календарик за",title:"2001г.",bottomText:"в подарок", corner: 45},
        {topText:"путешествие",title:"597",bottomText:"дней", corner: -45},
    ]


    return (
        <div className={styles.benefits}>
            {benefits.map((benefit,i)=>(
                <BenefitsItem 
                    key={`${benefit}_${i}`}
                    topText={benefit.topText} 
                    title={benefit.title} 
                    bottomText={benefit.bottomText} 
                    corner={benefit.corner}
                />
                
            ))}        
        </div>
    );
}

export default Benefits;
