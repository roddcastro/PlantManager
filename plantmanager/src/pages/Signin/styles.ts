import styled from 'styled-components/native'

export const Title = styled.Text`
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green_dark}
`

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background}
`

export const Content = styled.View`
    margin-top: 40px;
    margin-bottom: 40px;
`

export const Imagem = styled.Image`
    width: 100%;
    height: 300px;
`

export const Description = styled.Text`
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.heading}
`