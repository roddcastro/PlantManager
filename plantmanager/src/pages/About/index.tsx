import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { 
    Container,
    Content,
    Title,
    Input
} from './styles'

import { ButtonConfirm } from '../../components/ButtonConfirm'

export function About() {
    const [name, setName] = useState<string>("")
    const [disable, setDisable] = useState<boolean>(true)
    const navigation = useNavigation()

    function handleAbout(){
        if(name !== "") navigation.navigate("Ready", {name: name})
    }

    function onChangeValue(value: string): void{
        if(value !== "") setDisable(false)

        setName(value)
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
                    value={name} 
                    onChangeText={(value) => onChangeValue(value)}
                    blurOnSubmit
                />

                <ButtonConfirm disabled={disable} onPress={() => {handleAbout()}} />
            </Content>
        </Container>
    )
}