import React from 'react'
import { Avatar } from '../../components/Avatar'
import { 
    Container,
    Content,
    User,
    Grettings,
    UserName,
    Message
} from './styles'

export function Profile(){
    return(
        <Container>
            <Content>
            <Avatar urlImage='https://avatars.githubusercontent.com/u/50750983?v=4' />
                <User>
                    <Grettings>
                        Olá,
                    </Grettings>
                    <UserName>
                        Rodrigo
                    </UserName>
                </User>
                <Message>
                    Em qual ambiente {'\n'}
                    você quer colocar sua planta?
                </Message>
            </Content>
        </Container>
    )
}