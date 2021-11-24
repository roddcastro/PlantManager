import styled from 'styled-components/native'

export const Container = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    margin-right: 22px;
`

export const AvatarImage = styled.Image`
    width: 46px;
    height: 46px;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.green}
`