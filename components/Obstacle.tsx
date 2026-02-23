import { useEffect } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function Obstacle({onEnd}: any) {
    const { width } = Dimensions.get("window");
    const offset = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: -offset.value }],
    }));

    useEffect(() => {
        offset.value = withTiming(600, {duration: 3000, easing: Easing.linear}, onEnd);
    }, []);

    return (
        <Animated.View style={[styles.obstacle, animatedStyle]}>
                <Image source={require("@/assets/images/Rock.webp")} resizeMode="contain" style={styles.image}/>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
    },

    obstacle: {
        width: 225,
        height: 225,
        position: "absolute",
        bottom: "7%",
        right: 0,
    },
})