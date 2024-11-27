import CryptoJS from 'crypto-js'

class AESCrypto {
  private secretKey: CryptoJS.lib.WordArray

  constructor(secretKey: string) {
    if (
      secretKey.length !== 16 &&
      secretKey.length !== 24 &&
      secretKey.length !== 32
    ) {
      throw new Error('Secret key must be 16, 24, or 32 characters long.')
    }
    this.secretKey = CryptoJS.enc.Utf8.parse(secretKey)
  }

  /**
   * Mengenkripsi plaintext menggunakan AES-CBC
   * @param plaintext - Text yang akan dienkripsi
   * @returns Object yang berisi ciphertext dan iv
   */
  encrypt(plaintext: string): { ciphertext: string; iv: string } {
    // Generate iv
    const iv = CryptoJS.lib.WordArray.random(16)

    // Encrypt plaintext
    const encrypted = CryptoJS.AES.encrypt(plaintext, this.secretKey, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })

    return {
      ciphertext: encrypted.ciphertext.toString(CryptoJS.enc.Base64),
      iv: iv.toString(CryptoJS.enc.Hex),
    }
  }

  /**
   * Mendekripsi ciphertext menggunakan AES-CBC
   * @param ciphertext - Ciphertext (Base64) yang akan didekripsi
   * @param iv - IV (Hex) yang digunakan saat enkripsi
   * @returns Plaintext hasil dekripsi
   */
  decrypt(ciphertext: string, iv: string): string {
    const ivWordArray = CryptoJS.enc.Hex.parse(iv)

    const decrypted = CryptoJS.AES.decrypt(ciphertext, this.secretKey, {
      iv: ivWordArray,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })

    const plaintext = decrypted.toString(CryptoJS.enc.Utf8)

    if (!plaintext) {
      throw new Error(
        'Decryption failed. Possibly incorrect key or corrupted data.',
      )
    }

    return plaintext
  }
}

export default AESCrypto
