/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { getTemplateInstallPackage } = require('../createReactApp');

describe('getTemplateInstallPackage', () => {
  it('no options gives ipfs-template', async () => {
    await expect(getTemplateInstallPackage()).resolves.toBe('ipfs-template');
  });

  it('ipfs-template gives ipfs-template', async () => {
    await expect(getTemplateInstallPackage('ipfs-template')).resolves.toBe(
      'ipfs-template'
    );
  });

  it('ipfs-template-typescript gives ipfs-template-typescript', async () => {
    await expect(
      getTemplateInstallPackage('ipfs-template-typescript')
    ).resolves.toBe('ipfs-template-typescript');
  });

  it('typescript gives ipfs-template-typescript', async () => {
    await expect(getTemplateInstallPackage('typescript')).resolves.toBe(
      'ipfs-template-typescript'
    );
  });

  it('typescript@next gives ipfs-template-typescript@next', async () => {
    await expect(getTemplateInstallPackage('typescript@next')).resolves.toBe(
      'ipfs-template-typescript@next'
    );
  });

  it('ipfs-template@next gives ipfs-template@next', async () => {
    await expect(getTemplateInstallPackage('ipfs-template@next')).resolves.toBe(
      'ipfs-template@next'
    );
  });

  it('ipfs-template-typescript@next gives ipfs-template-typescript@next', async () => {
    await expect(
      getTemplateInstallPackage('ipfs-template-typescript@next')
    ).resolves.toBe('ipfs-template-typescript@next');
  });

  it('@iansu gives @iansu/ipfs-template', async () => {
    await expect(getTemplateInstallPackage('@iansu')).resolves.toBe(
      '@iansu/ipfs-template'
    );
  });

  it('@iansu/ipfs-template gives @iansu/ipfs-template', async () => {
    await expect(
      getTemplateInstallPackage('@iansu/ipfs-template')
    ).resolves.toBe('@iansu/ipfs-template');
  });

  it('@iansu/ipfs-template@next gives @iansu/ipfs-template@next', async () => {
    await expect(
      getTemplateInstallPackage('@iansu/ipfs-template@next')
    ).resolves.toBe('@iansu/ipfs-template@next');
  });

  it('@iansu/ipfs-template-typescript@next gives @iansu/ipfs-template-typescript@next', async () => {
    await expect(
      getTemplateInstallPackage('@iansu/ipfs-template-typescript@next')
    ).resolves.toBe('@iansu/ipfs-template-typescript@next');
  });

  it('http://example.com/ipfs-template.tar.gz gives http://example.com/ipfs-template.tar.gz', async () => {
    await expect(
      getTemplateInstallPackage('http://example.com/ipfs-template.tar.gz')
    ).resolves.toBe('http://example.com/ipfs-template.tar.gz');
  });
});
