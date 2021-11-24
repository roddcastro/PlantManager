import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Content = styled.View`
    width: 100%;
    padding-left: 24px;
    margin-top: 56px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 42px;
`

export const User = styled.View`
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
    margin-top: 40px;
`