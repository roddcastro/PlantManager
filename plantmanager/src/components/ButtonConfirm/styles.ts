import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.green}
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
`

export const Title = styled.Text`
    flex: 1;
    color: ${({ theme }) => theme.colors.white}
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`