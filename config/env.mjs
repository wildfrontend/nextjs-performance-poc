// https://github.com/nodejs/node/issues/51347
import pck from '../package.json' with { type: 'json' };

// ANCHOR production
const production = {
  NPM_PACKAGE_NAME: pck.name,
  NPM_PACKAGE_VERSION: pck.version,
  SOCKET_URL: 'https://socket-server-kz3w.onrender.com',
};

// ANCHOR
const development = {
  NPM_PACKAGE_NAME: pck.name,
  NPM_PACKAGE_VERSION: pck.version, 
  SOCKET_URL: 'http://localhost:8080',
};

/**
 * ANCHOR ENV
 * @param {"development" | "production"} env
 */
const envVariable = ((env) => {
  switch (env) {
    case 'production': {
      return production;
    }
    default: {
      return development;
    }
  }
})(process.env.APP_ENV);

export default envVariable;
