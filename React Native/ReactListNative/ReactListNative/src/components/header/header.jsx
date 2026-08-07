import { Text, View } from "react-native"
import { HeaderStyle } from "./HeaderStyle"

export const Header = () => {
  return (
    <View style={HeaderStyle.header}>
        <Text style={HeaderStyle.headerText}>React List</Text>
    </View>
  )
}