import { StyleSheet } from "react-native";


export const HeaderStyle = StyleSheet.create({
    header : {
        width: '100%',
        height: 110,
        // borderWidth: 3,
        // borderStyle: 'solid',
        // borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1937',
    },
    headerText : {
        width: '40%',
        textAlign: 'center',
        fontSize: 24,
        paddingBottom: 15,
        color: 'white',
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: '#599c6b',
    }
})