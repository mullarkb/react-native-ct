import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

const Button = ({label, active, onPress}) => {


    return (
                    <TouchableOpacity
                        style={[styles.button, active && styles.buttonActive]}
                        onPress={onPress}
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                active && styles.buttonActiveText,
                            ]}
                        >
                            {label}
                        </Text>
                    </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "#21456d",
        flexGrow: 0,
        margin: 3,
        borderRadius: 10
    },
    buttonText: {
        fontFamily: "Quicksand-Regular",
        color: "#21456d",
    },
    buttonActive: {
        backgroundColor: "#21456d",
    },
    buttonActiveText: {
        color: "#fff",
    },
});

export default Button;
