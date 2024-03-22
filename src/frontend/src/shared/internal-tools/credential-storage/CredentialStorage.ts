import { CredentialOptions, CredentialStorageInterface } from '@/shared';

class CredentialStorage implements CredentialStorageInterface {
  setCredential(
    key: string,
    value: string,
    options: CredentialOptions = {},
  ): void {
    if (options && options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie =
      encodeURIComponent(key) + '=' + encodeURIComponent(value);

    for (const [oKey, optionValue] of Object.entries(options)) {
      let optionKey = oKey;
      if (optionKey === 'maxAge') {
        optionKey = 'max-age';
      }

      updatedCookie += '; ' + optionKey;

      if (optionValue !== true) {
        updatedCookie += '=' + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }

  getCredential(key: string): string | null | undefined {
    const matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)',
      ),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  removeCredential(key: string): void {
    this.setCredential(key, '', {
      maxAge: -1,
    });
  }

  invalidate(): void {
    document.cookie
      .split(';')
      .forEach(
        (c) =>
          (document.cookie = c
            .replace(/^ +/, '')
            .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)),
      );
  }
}

export const CSI = new CredentialStorage();
