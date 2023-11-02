const ERROR_MESSAGES = Object.freeze({
  INVALID_LOTTO_PRICE: "[ERROR] 로또 구입 금액은 1,000원 단위로 입력되어야 합니다.",
  INVALID_LOTTO_NUMBER: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_NUMBER: "[ERROR] 숫자가 아닌 값이 입력되었습니다.",
});

const GAME_MESSAGES = Object.freeze({
  ENTER_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.",
  ENTER_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.",
  ENTER_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
});

export { ERROR_MESSAGES, GAME_MESSAGES };