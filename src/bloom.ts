/**
 * Karnstack BYOX: Bloom filter, TypeScript variant.
 *
 * The interface below is the contract karnstack tests target. Do not rename
 * the public methods. Implementation lives in this file across six stages:
 *
 *   Stage 1: bit array storage and a single hash function.
 *   Stage 2: multiple hash functions via the Kirsch-Mitzenmacher construction.
 *   Stage 3: optimal sizing helpers (m and k from a target false-positive rate).
 *   Stage 4: cache-line-blocked layout.
 *   Stage 5: concurrent-safe Add (best-effort in single-threaded JS; Web Workers extension is bonus).
 *   Stage 6: serialize, deserialize, and saturation estimation.
 *
 * Read the stage on karnstack.com/build/bloom-filter before implementing.
 */

export class Filter {
  // Bit array. Stage 1: allocate at least m bits, rounded up to a multiple of 8.
  private bits: Uint8Array = new Uint8Array(0)
  // Actual bit capacity (multiple of 8 after rounding).
  private _m: number = 0
  // Number of hash functions per probe. Stage 1 uses k=1; stage 2 passes
  // k > 1 to enable the Kirsch-Mitzenmacher two-hash construction.
  private _k: number = 1

  /**
   * Construct a filter sized for at least m bits, optionally using k hash
   * functions per probe. k defaults to 1 (stage 1). Stage 2 callers pass a
   * larger k.
   *
   * Stage 1: implement for k = 1.
   * Stage 2: extend to support k > 1.
   */
  constructor(m: number, k: number = 1) {
    // TODO(stage1/stage2): allocate the bit array; set this._m and this._k.
    void m
    this._k = k
  }

  /**
   * Insert a key into the filter.
   * Stage 1: hash key, map to a bit position in [0, m), set the bit.
   * Stage 2: extend to k bit positions via Kirsch-Mitzenmacher.
   */
  add(key: Uint8Array): void {
    // TODO(stage1/stage2).
    void key
    throw new Error("not implemented")
  }

  /**
   * Return true if the key may be in the filter, false if definitely not.
   * Stage 1: hash key, map to a bit position in [0, m), check the bit.
   * Stage 2: extend to k bit positions; ALL must be set.
   */
  test(key: Uint8Array): boolean {
    // TODO(stage1/stage2).
    void key
    return false
  }

  /** Actual bit capacity (after rounding up). */
  get m(): number {
    return this._m
  }

  /** Number of hash functions per probe. */
  get k(): number {
    return this._k
  }
}
