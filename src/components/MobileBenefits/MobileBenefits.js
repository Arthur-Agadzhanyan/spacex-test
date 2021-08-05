import React from 'react';
import styles from "./mobile-benefit.module.scss"
import MBenefit from './MobileBenefit/MBenefit';

const MobileBenefits = () => {
    const benefits = [
        {topText:"мы",title:"1",bottomText:"на рынке", corner: 125},
        {topText:"гарантируем",title:"50%",bottomText:"безопасность", corner: 225},
        {topText:"календарик за",title:"2001г.",bottomText:"в подарок", corner: 45},
        {topText:"путешествие",title:"597",bottomText:"дней", corner: -45},
    ]

    return (
        <div className={styles.mobile_benefits}>
            <div className={styles.benefit_list}>
            {benefits.map((benefit,i)=>(
                <MBenefit 
                    key={`${benefit}_${i}`}
                    topText={benefit.topText} 
                    title={benefit.title} 
                    bottomText={benefit.bottomText} 
                />
            ))}
            </div>
            
        </div>
    );
}

export default MobileBenefits;
