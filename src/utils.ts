import { UnoConsts } from "./consts";

/* consts.tsで定義されたデータの扱いに関する基本的な処理を定義している。 */

export namespace UnoUtils {
  export function isSameCard(card1: UnoConsts.Card, card2: UnoConsts.Card): boolean {
    if (card1.color !== card2.color) { return false; }

    if (card1.number && card2.number && (card1.number === card2.number)) {
        return true;
    }
    if (card1.special && card2.special && (card1.special === card2.special)) {
        return true;
    }

    return false;
  }
}
