import { StyleSheet } from "react-native";


export const FormTaskStyle = StyleSheet.create({
    formTaskBox:{
        width: "100%",
        // height: "200px",
        paddingTop: 15,
        paddingBottom: 15,
        // borderWidth: 3,
        // borderStyle:"solid",
        // borderColor: "#1e9d1c"
    },
    taskInputName: {
        width: "100%",
        height: 40,
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 5
    },
    taskButton: {
        width: "100%",
        height: 40,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#60A771",
        borderRadius: 10
    },
    taskButtonText: {
        color: "white",
        textAlign: "center", 
    }
})