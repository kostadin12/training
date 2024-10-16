import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type ComponentPropsWithoutRef } from 'react'

export type IconProps = ComponentPropsWithoutRef<typeof FontAwesomeIcon>; 

export const Icon = (props: IconProps) => {
    return <FontAwesomeIcon icon={props.icon} {...props}/>
}