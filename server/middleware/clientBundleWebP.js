import express from 'express';
import { resolve as pathResolve } from 'path';
import appRootDir from 'app-root-dir';

import acceptWebP from 'accept-webp';

import config from '../../config';

/**
 * Middleware to server our client bundle.
 */
export default acceptWebP(pathResolve(appRootDir.get(), config('bundles.client.outputPath')), [
  'jpg',
  'jpeg',
  'png',
]);
