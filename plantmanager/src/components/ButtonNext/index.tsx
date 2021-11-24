import React from "react"
import { TouchableOpacityProps } from "react-native"
import { Container, Icon } from './styles'

export function ButtonNext({...rest}: TouchableOpacityProps){
    return(
        <Container {...rest}>
            <Icon name='arrow-right' />
        </Container>
    )
}