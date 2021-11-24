import React,{useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { 
    Container,
    Content,
    Title,
    SubTitle
} from './styles'

import { ButtonReady } from '../../components/ButtonReady'

export function Ready() {
    const navigation = useNavigation()
    const route = useRoute()

    useEffect(() => {console.log(route)},[])
    function handleReady(){
    navigation.navigate("Profile", route.params)
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