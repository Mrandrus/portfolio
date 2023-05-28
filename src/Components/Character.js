import React, { useEffect, useState } from 'react'
import webMeOne from '../media/portfolioWebMe1.png'
import webMeTwo from '../media/portfolioWebMe2.png'
import webMeThree from '../media/portfolioWebMe3.png'

import {View, Animated, Easing} from 'react'


const Character = () => {
    const [state, setState] = useState([webMeOne])
    const animate = [webMeOne, webMeTwo, webMeThree]
    let imageOne = animate[0]
    let k = 0

    // useEffect(()=> {
    //     setState(animate[0])
    // }, [])

    const cycle = () => {
        for (let i = 0; i < animate.length; i++) {
            return i
        }
    }


    return (
        <div>
            <p>This is where the character will come from</p>
            <img className="meOne" src={webMeOne} alt="meOne" />
            <img className="meTwo" src={webMeTwo} alt="meOne" />
            <img className="meThree" src={webMeThree} alt="meOne" />
        </div>
    )
}

export default Character