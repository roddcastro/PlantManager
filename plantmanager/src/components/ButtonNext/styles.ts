import styled from "styled-components/native"
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    width: 70px
    height: 70px;
    background-color: ${({ theme }) => theme.colors.green}
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`

export const Icon = styled(MaterialCommunityIcons)`
    font-size: 26px;
    color: ${({ theme }) => theme.colors.white};
`