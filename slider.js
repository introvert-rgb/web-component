class PhotoSlider extends HTMLElement {
    connectedCallback() {
        this._photoIndex = 0;
        this._photos = this.getAttribute('photos').split(',');

        this.innerHTML = '<h1>' + this.getAttribute('title') + '</h1>' + '<h4>' + 'by ' + this.getAttribute('author') + '</h4>' + '<div class="image-container"></div>' + '<button class="back">&lt</buttton>' + '<button class="forward">&gt</buttton>';
        this.showPhoto();

        this.querySelector('button.back').addEventListener('click', e => this.onBackButtonClick(e));
        this.querySelector('button.forward').addEventListener('click', e => this.onForwardButtonClick(e));
    }
    onBackButtonClick(e) {
        this._photoIndex--;
        if (this._photoIndex < 0) {
            this._photoIndex = this._photos.length - 1;
        }
        this.showPhoto();
    }
    onForwardButtonClick(e) {
        this._photoIndex++;
        if (this._photoIndex >= this._photos.length) {
            this._photoIndex = 0;
        }
        this.showPhoto();
    }
    showPhoto() {
        this.querySelector('.image-container').style.backgroundImage = 'url(' + this._photos[this._photoIndex] + ')';
    }
}

if (!customElements.get('photo-slider')) {
    customElements.define('photo-slider', PhotoSlider);
}