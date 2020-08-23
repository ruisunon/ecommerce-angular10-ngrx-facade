// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiRoot='/v1';

export const environment = {
  production: false,
  api: {
    getAllUsers: {
      url: apiRoot + '/getAllUsers',
    },
    initialDataApi: {
      url: apiRoot+ '/initialDataApi',
    },
    updatePassword: {
      url: apiRoot+'/updatePassword'
    }
  },
  external_api_url: 'google.com'
};

