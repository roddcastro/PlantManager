import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { 
    Container,
    Title
} from './styles'

export function ButtonReady({...rest}: TouchableOpacityProps ){
    return(
        <Container {...rest}>
            <Title>
                Começar
            </Title>
        </Container>
    )
}