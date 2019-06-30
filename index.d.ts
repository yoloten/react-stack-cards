declare module "react-stack-cards" { 
    export interface Stack {
        children?: React.ReactNode
        onMouseEnter?: () => void
        onMouseLeave?: () => void
        [propName: string]: any
        onClick?: () => void
        className?: string
        direction: string
        duration?: number
        images?: string[]
        height: number
        color?: string
        width: number
    }

    export interface TinderLike {
        children?: React.ReactNode
        [propName: string]: any
        className?: string
        direction: string
        duration?: number
        colors?: string[]
        images?: string[]
        height: string
        width: string
    }

    export interface Toggle {
        children?: React.ReactNode
        onMouseEnter?: () => void
        onMouseLeave?: () => void
        [propName: string]: any
        onClick?: () => void
        className?: string
        direction: string
        duration?: number 
        colors?: string[]
        images?: string[]
        height: string
        width: string
    }

    export class StackCard extends React.Component <Stack, any> {
    }
    export class TinderLikeCard extends React.Component<TinderLike, any> {
    }
    export class ToggleCard extends React.Component<Toggle, any> {
 } 
}