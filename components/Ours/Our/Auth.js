import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

const Auth = () => {
  // 카카오 로그인
const K_REST_API_KEY = "79c2c2dd8157f358220e0add127610b4";
const K_REDIRECT_URI =  "http://localhost:3000/ours/kakao/callback";
const K_CLIENT_SECRET = "mluGNf2lYiIgVZEOXdMgcbxpSMYvRldX"
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code&amp;client_secret=${K_CLIENT_SECRET}`;

  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");

  const history = useHistory();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: K_REST_API_KEY,
      redirect_uri: K_REDIRECT_URI,
      code: code,
      client_secret: K_CLIENT_SECRET,
    });

    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      
      // Kakao Javascript SDK 초기화
      window.Kakao.init(K_REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      history.replace("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return null;
};

export default Auth;