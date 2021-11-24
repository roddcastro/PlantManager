import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Content = styled.View`
    width: 100%;
    padding: 24px;
    margin-top: 40px;
`

export const Header = styled.View`
  width: 50%;
  height: 150px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const MessageBox = styled.View`
  margin-bottom: 24px;
`

export const Grettings = styled.Text`
    font-size: 26px;
    color: ${({ theme }) => theme.colors.heading}
`

export const UserName = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.body_dark}
`

export const Message = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.heading}
    margin-top: 10px;
`

export const RoomsContainer = styled.View`
  justify-content: space-evenly;
  margin-top: 20px;
  align-items: center;
`

export const Room = styled.TouchableOpacity`
  padding: 10px;
  width: 50%;
  height: 50px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 6px;
`

export const NameRoom = styled.Text`
  text-align: center;
  font-size: 20px;
`