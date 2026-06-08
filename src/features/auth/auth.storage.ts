const ACCESS_TOKEN_KEY = "saasify_access_token";
const REFRESH_TOKEN_KEY = "saasify_refresh_token";

export function saveTokens(
  accessToken: string,
  refreshToken: string
) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

export function clearTokens() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}