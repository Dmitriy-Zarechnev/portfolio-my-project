import React from 'react'
import iconsSprite from '../../assets/images/sprite_svg.svg'

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    fill?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || '110'} height={props.height || '110'} viewBox={props.viewBox || '0 0 120 120'}
             fill={props.fill || 'white'} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}





