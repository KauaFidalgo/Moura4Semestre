import { View, Text, TextInput, TouchableOpacity} from "react-native";
import { FormTaskStyle } from "./FormTaskStyle";
import { useState } from "react";


export const FormTask = () => {
    const [taskValue, setTaskValue] = useState("");

    const saveTask = () => {
         console.log(taskValue);
        Alert.alert("Tarefa salva com sucesso!", `Tarefa: ${taskValue}`), [{
            text:"OK",
            onPress: () => {}
        }]
    }

    return(
        <View style={FormTaskStyle.formTaskBox}>
            <TextInput
            style={FormTaskStyle.taskInputName}
                value={taskValue}
                onChangeText={(textoDigidado) => {
                        setTaskValue(textoDigidado);
                }}

                placeholder="Adicione uma tarefa"
            />
            <TouchableOpacity 
                style={FormTaskStyle.taskButton}
                onPress={() => {
                    saveTask()
                }}
                >   
                <Text style={FormTaskStyle.taskButtonText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}