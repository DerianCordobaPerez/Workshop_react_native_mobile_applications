import styledComponents from "styled-components/native";

export const Label = styledComponents.Text`
    color: ${(props) => (!props.outline ? "#fff" : "#911")}
    font-weight: bold;
    aling-self: center;
    padding: 10px;
`;

export const ButtonContainer = styledComponents.TouchableHighlight`
    background-color: ${(props) => (props.outline ? "#fff" : "#911")};
    width: 80%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-color: '#911';
    border-width: 2px;
`;
