import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { 
    Container,
    Title
} from './styles'

export function ButtonConfirm({...rest}: TouchableOpacityProps ){
    return(
        <Container {...rest}>
            <Title>
                Confirmar
            </Title>
        </Container>
    )
}