class Section {
    constructor({ data, renderer }, containerSelector) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    clear() {
        this._container.innerHTML = "";
    }

    renderItems() {
        this.clear();

        this._renderedItems.forEach(item => {
            this._renderer(item);
        });
    }

    addItem(element) {
        this._container.append(element);
    }

}

export default Section;