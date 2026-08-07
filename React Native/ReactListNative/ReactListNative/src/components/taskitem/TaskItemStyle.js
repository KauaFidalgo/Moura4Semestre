import { StyleSheet } from "react-native";

export const TaskItemStyle = StyleSheet.create({

    cardBox: {
        borderWidth: 2,
        borderColor: '#31364d',
        backgroundColor: '#31364d',

        marginBottom: 15,
        borderRadius: 5,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 15,
        paddingVertical: 12,
    },

    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },

    iconBox: {
        flexDirection: "row",
        alignItems: "center",
    },

    iconPenBox: {
        width: 35,
        height: 35,

        borderWidth: 2,
        borderRadius: 6,
        borderColor: "#82c9fc",

        justifyContent: "center",
        alignItems: "center",

        marginRight: 10,
    },

    iconTrashBox: {
        width: 35,
        height: 35,

        borderWidth: 2,
        borderRadius: 6,
        borderColor: "red",

        justifyContent: "center",
        alignItems: "center",
    },

});