import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { 
    Container,
    Content,
    Title,
    Input
} from './styles'

import { ButtonConfirm } from '../../components/ButtonConfirm'

export function About() {
    const navigation = useNavigation()

    function handleAbout(){
        navigation.navigate('Ready')
    }
    return (
        <Container>
            <Content>
                <Title>
                   Como podemos {'\n'}
                   chamar você? {'\n'}
                </Title>

                <Input 
                    placeholder= 'Digite seu nome'
                    blurOnSubmit
                />

                <ButtonConfirm onPress={handleAbout} />
            </Content>
        </Container>
    )
}