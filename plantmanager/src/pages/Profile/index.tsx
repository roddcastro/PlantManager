import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Avatar } from '../../components/Avatar'
import { 
    Container,
    Header,
    Content,
    Grettings,
    UserName,
    Message,
    MessageBox,
    RoomsContainer,
    Room,
    NameRoom
} from './styles'

export function Profile(){
    const route = useRoute();
    return(
        <Container>
            <Content>
                <Header>
                <Avatar urlImage='https://avatars.githubusercontent.com/u/50750983?v=4' />
                    <Grettings>
                        Olá, {'\n'}
                    </Grettings>
                    <UserName>
                        {route.params?.name}
                    </UserName>
                </Header>

                <MessageBox>
                    <Message>
                        Em qual ambiente {'\n'}
                        você quer colocar sua planta?
                    </Message>
                </MessageBox>

                <RoomsContainer>
                    <Room>
                        <NameRoom>
                            Sala
                        </NameRoom>
                    </Room>
                    <Room>
                        <NameRoom>
                            Quarto
                        </NameRoom>
                    </Room>
                    <Room>
                        <NameRoom>
                            Cozinha
                        </NameRoom>
                    </Room>
                    <Room>
                        <NameRoom>
                            Banheiro
                        </NameRoom>
                    </Room>
                </RoomsContainer>
            </Content>
        </Container>
    )
}