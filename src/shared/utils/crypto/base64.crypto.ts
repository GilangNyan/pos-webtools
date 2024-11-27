import { Buffer } from 'buffer'

class Base64Crypto {
  /**
   * Encode string ke format Base64
   * @param input String yang akan di-encode
   * @returns String Base64
   */
  public static encode(input: string): string {
    return Buffer.from(input, 'utf-8').toString('base64')
  }

  /**
   * Decode Base64 string
   * @param input String Base64 yang akan di-decode
   * @returns String yang sudah di-decode
   */
  public static decode(input: string): string {
    return Buffer.from(input, 'base64').toString('utf-8')
  }

  /**
   * Encode byte array atau binary ke Base64
   * @param input Byte array (Uint8Array) atau data binary (ArrayBuffer atau Blob)
   * @returns String Base64
   */
  public static async encodeBinary(
    input: Blob | ArrayBuffer | Uint8Array,
  ): Promise<string> {
    let buffer: Uint8Array

    if (input instanceof Blob) {
      buffer = new Uint8Array(await input.arrayBuffer())
    } else if (input instanceof ArrayBuffer) {
      buffer = new Uint8Array(input)
    } else {
      buffer = input
    }

    return Buffer.from(buffer).toString('base64')
  }

  /**
   * Decode Base64 string ke Uint8Array
   * @param input String Base64 yang akan di-decode
   * @returns Byte array yang sudah di-decode (Uint8Array)
   */
  public static decodeToBytes(input: string): Uint8Array {
    return new Uint8Array(Buffer.from(input, 'base64'))
  }

  /**
   * Konversi Base64 string kembali ke Blob
   * @param input String Base64 yang akan di-decode
   * @param mimeType Tipe MIME dari Blob (default: application/octet-stream)
   * @returns Blob
   */
  public static decodeToBlob(
    input: string,
    mimeType: string = 'application/octet-stream',
  ): Blob {
    const bytes = Base64Crypto.decodeToBytes(input)
    return new Blob([bytes], { type: mimeType })
  }
}

export default Base64Crypto
