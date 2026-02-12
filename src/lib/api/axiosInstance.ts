import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api/v1',
  timeout: 10000,
});

// TODO: OAuth 인증 로직 추가 
// - accessToken 헤더 자동 추가
// - 401 응답 시 재발급 처리