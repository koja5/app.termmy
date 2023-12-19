import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  helper = new JwtHelperService();

  constructor(private cookieService: CookieService) {}

  setSessionStorage(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSessionStorageSimple(key: string) {
    return sessionStorage.getItem(key);
  }

  getSessionStorageObject(key: string) {
    return JSON.parse(JSON.stringify(sessionStorage.getItem(key)));
  }

  removeAllSessionStorage() {
    sessionStorage.clear();
  }

  removeSessionStorage(key: string) {
    sessionStorage.removeItem(key);
  }

  setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorageSimple(key: string) {
    return localStorage.getItem(key);
  }

  getLocalStorageObject(key: string) {
    return JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem(key))));
  }

  removeAllLocalStorage() {
    localStorage.clear();
  }

  removeLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  path?: string;
  domain?: string;
  expires?: string | Date;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | "lax" | "strict" | "none";
  storeUnencoded?: boolean;

  setToken(token: any) {
    this.cookieService.put("token", token, {
      expires: new Date(new Date().getTime() + 86400000),
      sameSite: "lax",
    });
  }

  getToken() {
    return this.cookieService.get("token");
  }

  deleteToken() {
    this.cookieService.remove("token");
  }

  setCookie(key: string, value: any) {
    this.cookieService.put(key, value, {
      expires: undefined,
      path: "/",
      sameSite: "lax",
    });
  }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  removeCookie(key: string) {
    this.cookieService.remove(key);
  }

  setCookieObject(key: string, value: any) {
    this.cookieService.put(key, JSON.stringify(value), {
      expires: undefined,
      path: "/",
      sameSite: "lax",
    });
  }

  getCookieObject(key: string) {
    if (this.cookieService.get(key)) {
      return JSON.parse(this.cookieService.get(key));
    } else {
      return [];
    }
  }

  getDecodeToken() {
    if (this.getToken()) {
      return this.helper.decodeToken(this.getToken()).user;
    }
    return false;
  }
}
