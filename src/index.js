import React from 'react';
import { useEffect ,useState,useRef } from 'react'

const getWindowSizeNumber = (windowWidth) =>{
    if(windowWidth < 576){
        return 0;
    }else if(windowWidth < 768){
        return 1;
    }else if(windowWidth < 992){
        return 2;
    }else if(windowWidth < 1200){
        return 3;
    }else{
        return 4;
    }
}


const CardTitle = (props) => {
    const titleFontSizes = props.params.titleFontSizes || [14,14,16,16,18];
    const TagName = props.titleAs || 'h3';
    const style={
        fontSize: titleFontSizes[getWindowSizeNumber(props.windowWidth)]+'px',
        color: props.params.baseColor || '#800000',
        padding: '10px 0 10px 10px',
        borderBottom: '1px solid '+ (props.params.baseColor ? props.params.baseColor+'AA' : '#800000AA'),
        borderLeft: '10px solid '+ (props.params.baseColor ? props.params.baseColor+'AA' : '#800000AA')
    }
    const spanStyle={
        display:'block'
    }
    const titles = props.title.split(' ').map((x, index) => {
        return <span style={spanStyle} key={index}>{x}</span>
    });

    return(
        <TagName style={style}>
            {titles}
        </TagName>
    )
}


const CardImage =(props) => {
    const imageHeights = props.params.imageHeights || [200,100,100,100,100];
    const style={
        width: '100%',
        height: imageHeights[getWindowSizeNumber(props.windowWidth)]+'px',
        backgroundImage: 'url('+props.imagePath+')',
        backgroundPosition:'center',
        backgroundSize:'cover',
    }
    return (
        <div style={style}></div>
    )
}

const Card = (props) =>{
    const style={
        flex: '1',
        display:'flex',
        flexDirection: getWindowSizeNumber(props.windowWidth) < 2 ? 'row' : 'column',
    }
    return(
        <div style={style}>
            <CardImage 
                params={props.params} 
                imagePath={props.imagePath} 
                windowWidth={props.windowWidth}
            />
            <div>
                <CardTitle
                title={props.title}
                params={props.params} 
                windowWidth={props.windowWidth}
                />
            </div>
        </div>
    )
}

const ThreeCards = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const cardsStyle={
        display:'flex',
        flexDirection: getWindowSizeNumber(windowWidth) < 2 ? 'column' : 'row',
        gap:'20px'
    }
    const cards = props.displayData.map((x, index) => {
        return <Card 
                params={props}
                title={x.title} 
                description={x.description} 
                imagePath={x.imagePath} 
                key={index} 
                windowWidth={windowWidth}
                />
    })

    useEffect(()=>{
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        });
    },[])

 
    return(
        <div style={props.style}>
            {props.children}
            {getWindowSizeNumber(windowWidth)}
            <div style={cardsStyle}>
                {cards}
            </div>
        </div>
    )
}



    
export default ThreeCards;