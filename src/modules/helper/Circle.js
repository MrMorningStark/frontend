import React from "react";

export const Circle = ({
    title = '',
    width = null,
    height = null,
    size = '150px',
    color = 'black',
    backgroundColor = '#4F8A8B',
    cursor = 'auto',
    onClick,
    text = '',
    fontSize = '18px',
    fontWeight = 'bold',
    transition = 'all 0.3s',
    hoverCSS = {
        boxShadow: 'rgb(38, 57, 77) 0px 10px 8px -10px'
    },
    margin = '5px',
    icon = null,
    borderRadius = '50%',
    transform = 'rotate(0deg)',
    transformImg = 'rotate(0deg)',
    className='',

}) => {

    const circleStyle = {
        margin: margin,
        borderRadius: borderRadius,
        width: width ?? size,
        height: height ?? size,
        color: color,
        backgroundColor: backgroundColor,
        cursor: cursor,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: fontSize,
        userSelect: 'none',
        fontWeight: fontWeight,
        transition: transition,
        transform: transform,
        boxShadow: 'rgb(38, 57, 77) 0px 10px 15px -10px',

    }

    const iconStyle = {
        transform: transformImg
    }

    const [style, setStyle] = React.useState(circleStyle);


    return <p className={className}  title={title} style={style}
        onClick={onClick ? onClick : () => { }}
        onMouseOver={() => setStyle({ ...style, ...hoverCSS })}
        onMouseOut={() => setStyle(circleStyle)}
    >
        {icon && <i className={icon} style={iconStyle} />}
        {text && text}
    </p>
}