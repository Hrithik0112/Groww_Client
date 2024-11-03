import React from "react";
import { View, Text, SafeAreaView, StyleSheet, useColorScheme, Image } from "react-native";
import CustomSafeAreaView from "../../components/global/CustomSafeAreaView";
import CustomText from "../../components/global/CustomText";
import { FONTS } from "../../constants/Fonts";
import { normalizeModerately, screenHeight, screenWidth } from "../../utils/Scaling";
import LoginImageDark from "../../assets/images/login_dark_animation.png"
import LoginImageLight from "../../assets/images/login_animation_light.png"
import SocialLoginButton from "../../components/auth/SocialLoginButton";
import GoogleIcon from "../../assets/images/google.png"
import Icon from "react-native-vector-icons/Ionicons"
import BottomText from "../../components/auth/BottomText";
import TouchableText from "../../components/auth/TouchableText";

export default function LoginScreen() {

  const theme = useColorScheme()
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText variant="h1" fontFamily={FONTS.Medium}>
          Together We Grow.
        </CustomText>
        <CustomText variant="h7" fontFamily={FONTS.Bold} style={styles.subtext}>
          Invest • Pay • Loans
        </CustomText>
        <View style={styles.imgContainer}>
          <Image source={theme === "dark" ? LoginImageDark : LoginImageLight} style={styles.img} />
        </View>

        <SocialLoginButton
          icon={<Image source={GoogleIcon} style={styles.gimg} />}
          text="Continue with Google"
          onPress={async () => { }}
        />
        <SocialLoginButton
          icon={<Icon name="logo-apple" size={18} color="black" />}
          text="Continue with Apple"
          onPress={async () => { }}
        />

        <TouchableText
          firstText="Use other email ID"
          onPress={() => { }}
          style={styles.touchText}
        />

        <BottomText />
      </View>
    </CustomSafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  subtext: {
    marginTop: 16,
    opacity: 0.6,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",

  },
  imgContainer: {
    width: screenWidth,
    height: screenHeight * 0.45,
    marginVertical: normalizeModerately(30)
  },
  gimg: {
    height: 20,
    width: 20,
  },
  touchText: {
    marginVertical: 30,
    marginTop: 15,
  },
});
