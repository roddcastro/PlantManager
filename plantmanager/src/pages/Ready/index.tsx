import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { 
    Container,
    Content,
    Title,
    SubTitle
} from './styles'

import { ButtonReady } from '../../components/ButtonReady'

export function Ready() {
    const navigation = useNavigation()

    function handleReady(){
        navigation.navigate('Profile')
    }
    return (
        <Container>
            <Content>
                <Title>
                   Prontinho
                </Title>

                <SubTitle>
                   Agora vamos começar a cuidar das suas {'\n'}
                   plantinhas com muito cuidado.
                </SubTitle>

                <ButtonReady onPress={handleReady} />
            </Content>
        </Container>
    )
}