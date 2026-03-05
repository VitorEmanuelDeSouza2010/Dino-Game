import { useGame } from "@/hooks/gameHook";
import { useEffect } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming, useAnimatedReaction } from "react-native-reanimated";

export default function Obstacle({onEnd}: any) {
    const { width } = Dimensions.get("window");
    const offset = useSharedValue(0);
    const { dinoHeight } = useGame();

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: -offset.value }],
    }));

    useEffect(() => {
        offset.value = withTiming(width, {duration: 3000, easing: Easing.linear}, onEnd);
    }, []);

    useAnimatedReaction(() => { return offset.value},
        (currentValue) => {
            const left = Math.max(0, currentValue);
            const right = Math.min(355, currentValue + 225);
            const bottom = Math.max(0, dinoHeight.value);
            const top = 225

            if(left > right || bottom > top) {
                console.log("No collision")
                return;
            }
        },
    );

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