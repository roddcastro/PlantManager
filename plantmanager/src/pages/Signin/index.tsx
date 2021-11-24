import React from 'react'
import { ButtonNext } from '../../components/ButtonNext'
import { useNavigation } from '@react-navigation/native'

import Illustration from '../../assets/watering.png'
import { 
    Container,
    Content,
    Title,
    Imagem,
    Description
} from './styles'

export function Signin(){
    const navigation = useNavigation()

    function handleSignin(){
        navigation.navigate('About')
    }
    return(
        <>
            <Container>
                <Content>
                    <Title>
                        Gerencie {'\n'} 
                        suas plantas de {'\n'} 
                        forma fácil
                    </Title>
                </Content>

                <Imagem source={Illustration} />

                <Content>
                    <Description>
                        Não esqueça mais de regar suas {'\n'}
                        plantas. Nós cuidamos de lembrar você {'\n'}
                        sempre que precisar.
                    </Description>
                </Content>
                <ButtonNext onPress={handleSignin} />
            </Container>
        </>
    )
}