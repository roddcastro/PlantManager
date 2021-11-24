import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
`
export const Content = styled.View`
    margin-top: 40px;
    padding: 50px;
`

export const Title = styled.Text`
    text-align: center;
    font-size: 32px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.green_dark};
`

export const Input = styled.TextInput`
    text-align: center;
    align-items: center;
    backgroundColor: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.body_dark};
    font-size: 18px;
    padding: 20px;
    margin-bottom: 24px;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.body_light}
`