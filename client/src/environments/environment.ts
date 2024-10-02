// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  apiUrl: "http://localhost:4000",
  ENCRIPTY_KEY: "TERMMY_BCI",
  STRIPE_KEY:
    "pk_live_51LhYhHL4uVudLiXAIvAgExZFkcpLicOlD3CBFr0FV8P7F0opaj2zYURyCz4hlJcSAFFZ2v29pKpXDrPHdbzSrZZv00AF1rYu04",
  // STRIPE_KEY: "pk_test_51LhYhHL4uVudLiXA5WwSojoMtx6m0rOM7fufOkPllausovqA0BhBJ0Id0ROuRb336IVLZMjshamhIIOlT1hFOAAS00zH00KnIN",
  GOOGLE_CLIENT_ID:
    "886729047823-77u02t3bvpk8ec98or5r5hpetdlocn6e.apps.googleusercontent.com",
  GOOGLE_AUTH_URL: "https://app.termmy.com:3003/api/google/auth",
  MICROSOFT_CLIENT_ID: "f8d10920-2603-45a7-9c7a-d474a32f4758",
  MICROSOFT_AUTH_URL: "https://app.termmy.com",
  TERMMY_COIN_PER_EURO: 0.05,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
