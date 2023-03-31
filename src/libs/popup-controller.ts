type PopupPosition = {
    left: number;
    top: number;
};

class PopupController {
    popupId: number | null = null

    constructor(
        private width: number,
        private height: number,
        public popupURL: string,
    ) {}


    async #calculatePopupPosition(): Promise<PopupPosition> {
        let left = 0
        let top = 0
        try {
            const lastFocused = await chrome.windows.getLastFocused()
            top = lastFocused.top ?? 0
            left = (lastFocused.left ?? 0) + Math.max((lastFocused.width ?? 0) - this.width, 0)
        } catch (error) {}

        return { left, top }
    }

    get popupIsOpen(): boolean {
        return Boolean(this.popupId)
    }

    async closePopup(): Promise<void> {
        if (!this.popupIsOpen || !this.popupId) {
            return
        }

        await chrome.windows.remove(this.popupId)
        this.popupId = null
    }

    async openPopup(): Promise<void> {
        if (this.popupIsOpen) {
            return
        }

        await this.#createPopup()
    }

    async #createPopup(): Promise<void> {
        const {top, left} = await this.#calculatePopupPosition()
        const popup = await chrome.windows.create({
            type: 'popup',
            url: this.popupURL,
            width: this.width,
            height: this.height,
            left,
            top,
        })

        if (popup.id) {
            this.popupId = popup.id
        } else {
            throw new Error('Failed to open approval popup')
        }
    }
}


// Singleton
export const popupController = new PopupController(
    350,
    750,
    'confirmTransaction.html',
)
