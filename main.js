/** UI */
// TODO: 今回は外部から引数を受け取ることを許す
class PopUpImage {
  constructor() {
    this.wrapperImage = document.querySelectorAll('.wrapper-image');
    this.imageEl = document.getElementById('image');
    this.popUp = document.getElementById('pop-up');
    this.wrapperPopUp = document.getElementById('pop-up-wrapper-image');
    this.overlay = document.getElementById('overlay');
  }

  /**
   * クラスを付与
   */
  addClass() {
    this.popUp.classList.add('is-visible');
  }

  /**
   * クラスを削除
   */
  removeClass() {
    this.popUp.classList.remove('is-visible');
  }

  /**
   * クローンを作成
   */
  createCloneEl(target) {
    return target.cloneNode(false);
  }

  /**
   * クリックした画像DOMをpopupに挿入
   */
  setImage(target) {
    const cloneEl = this.createCloneEl(target)
    this.wrapperPopUp.appendChild(cloneEl);
  }

  /**
   * 複製した画像DOMを削除
   */
  removeImage() {
    const cloneEl = this.wrapperPopUp.firstChild;
    cloneEl.remove();
  }
}

const popupImage = new PopUpImage();

/** Presenter */
// ポップアップを表示
const popUpTargetImage = (target) => {
  popupImage.addClass();
  popupImage.setImage(target);
}

// ポップアップを非表示
const hiddenTargetImage = () => {
  popupImage.removeClass();
  popupImage.removeImage();
}

/** UseCase */
// 今回は飛ばす

/** Controller */
/**
 * 画像を拡大して確認する
 */
popupImage.wrapperImage.forEach(el => {
  el.addEventListener('click', (e) => {
    popUpTargetImage(e.target);
  })
})

/**
 * 拡大された画像を閉じる
 */
popupImage.overlay.addEventListener('click', () => {
  hiddenTargetImage();
})